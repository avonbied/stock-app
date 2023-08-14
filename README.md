# stock-app

Investment Dashboard
```mermaid
erDiagram
	DASHBOARD }|--|{ SEARCH-API : uses
	DASHBOARD }|--|| DATA-FEEDER : uses

	SEARCH-API }|--o| SEARCH-CACHE : uses
	SEARCH-API }|--|| DATA-FEEDER : uses
	SEARCH-API ||--|| ARCHIVE : uses

	SEARCH-CACHE |o--|| DATA-FEEDER : uses
	ARCHIVE ||..|| DATA-FEEDER : uses
```