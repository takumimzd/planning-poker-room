```mermaid
erDiagram

room ||--o{ theme : owns
theme ||--o{ card : owns

room {
  column type
  id number
}

theme {
  column type
  id number
  title string
  count number
}

card {
  column type
  id number
  count number
}

```
