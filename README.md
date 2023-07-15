# stock-app

Investment Dashboard
```mermaid
erDiagram
	DASHBOARD }|--|{ SEARCH-API : uses
	SEARCH-API }|--o| SEARCH-CACHE : uses
	SEARCH-CACHE |o--|| DATA-FEEDER : uses
	SEARCH-API }|--|| DATA-FEEDER : uses
	ARCHIVE ||..|| DATA-FEEDER : uses
	SEARCH-API ||--|| ARCHIVE : uses
```