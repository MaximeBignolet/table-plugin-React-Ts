import "./App.css";
import { Table } from "../";

function App() {
  const columns = [
    { title: "First Name", dataKey: "firstName" },
    { title: "Last Name", dataKey: "lastName" },
    { title: "Start Date", dataKey: "startDate" },
    { title: "Department", dataKey: "department" },
    { title: "Date of Birth", dataKey: "dateOfBirth" },
    { title: "Street", dataKey: "street" },
    { title: "City", dataKey: "city" },
    { title: "State", dataKey: "state" },
    { title: "Zip Code", dataKey: "zipCode" },
  ];

  const data = [
    {
      firstName: "Max",
      lastName: "Bgt",
      startDate: "05/05/2024",
      department: "Sales",
      dateOfBirth: "27/01/1999",
      street: "1 rue de l'avenue",
      city: "La Rochelle",
      state: "France",
      zipCode: "17000",
    },
  ];

  return (
    <>
      <Table columns={columns} data={data} />
    </>
  );
}

export default App;
