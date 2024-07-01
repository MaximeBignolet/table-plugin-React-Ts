import "./App.css";
import { Table } from "../";

export const App = () => {
  const data = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      dateOfBirth: new Date("1990-01-01"),
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      dateOfBirth: new Date("1995-05-10"),
    },
    {
      id: 3,
      firstName: "Alice",
      lastName: "Johnson",
      dateOfBirth: new Date("1988-09-15"),
    },
    {
      id: 4,
      firstName: "Bob",
      lastName: "Williams",
      dateOfBirth: new Date("1992-03-25"),
    },
  ];

  const columns = [
    { title: "First Name", dataKey: "firstName" },
    { title: "Last Name", dataKey: "lastName" },
    { title: "Date of Birth", dataKey: "dateOfBirth" },
  ];

  const columnsToSearch = ["firstName", "dateOfBirth"];
  const colmunToSort = ["firstName", 'dateOfBirth', 'lastName'];

  return (
    <div>
      {data ? (
        <Table
          columns={columns}
          data={data}
          columnQuery={columnsToSearch}
          colmunToSort={colmunToSort}
        />
      ) : (
        <p>Erreur</p>
      )}
    </div>
  );
}
