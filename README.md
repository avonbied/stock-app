# stock-app

Investment Dashboard
```mermaid
erDiagram
	DASHBOARD }|--|{ SEARCH-API
	SEARCH-API }|..|o SEARCH-CACHE
	SEARCH-CACHE o|..|| DATA-FEEDER
	SEARCH-API }--|| DATA-FEEDER
	ARCHIVE ||..|| DATA-FEEDER
	SEARCH-API ||..|| ARCHIVE
```