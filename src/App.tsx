import './App.css';
import TicketBoard from './components/TicketBoard';

function App() {
  return (
    <div className="app">
      <h2>Flash</h2>
      <h3>Searches the web for issues with Tesla vehicles</h3>
      <TicketBoard />
    </div>
  );
}

export default App;
