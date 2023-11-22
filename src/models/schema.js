export const schema = {
    "models": {
        "Ticket": {
            "name": "Ticket",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "title": {
                    "name": "title",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "content": {
                    "name": "content",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "url": {
                    "name": "url",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "sourceType": {
                    "name": "sourceType",
                    "isArray": false,
                    "type": {
                        "enum": "SourceType"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "timestamp": {
                    "name": "timestamp",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "severity": {
                    "name": "severity",
                    "isArray": false,
                    "type": {
                        "enum": "Severity"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "category": {
                    "name": "category",
                    "isArray": false,
                    "type": {
                        "enum": "Category"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Tickets",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byUrl",
                        "queryField": "ticketsByUrl",
                        "fields": [
                            "url"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    },
    "enums": {
        "SourceType": {
            "name": "SourceType",
            "values": [
                "REDDIT"
            ]
        },
        "Severity": {
            "name": "Severity",
            "values": [
                "LOW",
                "MEDIUM",
                "HIGH"
            ]
        },
        "Category": {
            "name": "Category",
            "values": [
                "MODEL_S",
                "MODEL_3",
                "MODEL_X",
                "MODEL_Y",
                "STORE",
                "SERVICE_CENTER",
                "APP",
                "WEBSITE",
                "SUPERCHARGER",
                "NOT_AN_ISSUE"
            ]
        }
    },
    "nonModels": {},
    "codegenVersion": "3.4.4",
    "version": "7cad739f393513f0c0f48f621e8695c9"
};