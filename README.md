# table-plugin-React-Ts

`table-plugin-React-Ts` is a React component designed to render dynamic tables with configurable columns and data, utilizing TypeScript for type safety. This component simplifies the process of displaying tabular data in React applications, ensuring that developers can customize the table's columns and data according to their needs.

## Installation

To install the `table-plugin-React-Ts`, you can use npm or yarn as follows:

```bash
npm install table-plugin-React-Ts
# or
yarn add table-plugin-React-Ts
```

## Example Usage in TSX

Here's a detailed example of how to use the `Table` component in a TSX file:

```tsx
import React from "react";
import { Table } from "table-plugin-React-Ts";

const columns = [
  { title: "First Name", dataKey: "firstName" },
  { title: "Last Name", dataKey: "lastName" },
  { title: "Email", dataKey: "email" },
];

const data = [
  { firstName: "John", lastName: "Doe", email: "john.doe@example.com" },
  { firstName: "Jane", lastName: "Doe", email: "jane.doe@example.com" },
];

const App: React.FC = () => {
  return (
    <div>
      <h1>Dynamic Table Example</h1>
      <Table columns={columns} data={data} />
    </div>
  );
};

export default App;
```

## Props

The 'Table' component accepts the following props:

- Columns (TableConfig[]): An array of configuration objects of the table. Each object includes:
  &nbsp;

  - title('string'): The display of the column.
  - dataKey('string'): The key from the data objects that holds the value for taht column.
    &nbsp;

- Data('Record<string, string>[]'): An array of objects, each representing a row of data, where each key should match a 'dataKey' specified in columns.

```ts
interface TableConfig {
  title: string;
  dataKey: string;
}

interface TableProps {
  columns: TableConfig[];
  data: Record<string, any>[];
}
```
