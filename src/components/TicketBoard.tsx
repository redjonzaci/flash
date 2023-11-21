import { DataStore, SortDirection } from 'aws-amplify/datastore';
import { useEffect, useState } from 'react';
import { Ticket } from '../models';
import './link.css';
import './table.css';

export default function TicketBoard() {
  const [tickets, setTickets] = useState<Ticket[]>([]);

  useEffect(() => {
    DataStore.query(Ticket, null, {
      limit: 20,
      sort: (ticket) => ticket.timestamp(SortDirection.DESCENDING),
    }).then(setTickets);
  }, []);

  useEffect(() => {
    const subscription = DataStore.observe(Ticket).subscribe(() => {
      DataStore.query(Ticket).then(setTickets);
    });

    return () => subscription.unsubscribe();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function handleScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    const threshold = 5;

    if (scrollTop + windowHeight >= documentHeight - threshold) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  }

  useEffect(() => {
    if (currentPage === 1 || !hasMore) return;
    loadMoreData(currentPage);
  }, [currentPage]);

  async function loadMoreData(currentPage: number) {
    const newTickets = await DataStore.query(Ticket, null, {
      // Load more data as the page number increases
      limit: 20 * currentPage,
      sort: (ticket) => ticket.timestamp(SortDirection.DESCENDING),
      page: currentPage,
    });

    if (newTickets.length === 0) {
      setHasMore(false);
    } else {
      setTickets([...tickets, ...newTickets]);
    }
  }

  return (
    <table className="tds-table tds-o-table-cells-centered tds-table--thead_border tds-table--padded_cells tds-table--hoverable tds-table--row_border tds-o-legacy-careers">
      <thead className="tds-table-head">
        <tr className="tds-table-row">
          <th role="columnheader" scope="col">
            Title
          </th>
          <th role="columnheader" scope="col">
            Content
          </th>
          <th role="columnheader" scope="col">
            Timestamp
          </th>
        </tr>
      </thead>
      <tbody className="tds-table-body">
        {tickets.map((ticket) => (
          <tr className="tds-table-row" key={ticket.id}>
            <td>
              <a href={ticket.url} className="tds-link" target="_blank">
                {ticket.title} (
                {ticket.sourceType[0] +
                  ticket.sourceType.toLowerCase().slice(1)}
                )
              </a>
            </td>
            <td>{ticket.content.slice(0, 200)}...</td>
            <td>{new Date(ticket.timestamp).toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
