import "./App.css";
import { Table } from "../";
import { useEffect, useState } from "react";

export const App = () => {
  const [userData, setUserData] = useState();

  useEffect(() => {
    async function fetchData() {
      const resp = await fetch("https://jsonplaceholder.org/users");
      const jsonResp = await resp.json();
      setUserData(jsonResp);
    }
    fetchData();
  }, []);

  const columns = [
    { title: "First Name", dataKey: "firstname" },
    { title: "Last Name", dataKey: "lastname" },
    { title: "ID", dataKey: "id" },
  ];

  const columnsToSearch = ["firstname", 'id'];

  // const data = [
  //   {
  //     firstName: "Max",
  //     lastName: "Bgt",
  //     startDate: "05/05/2024",
  //     department: "Sales",
  //     dateOfBirth: "27/01/1999",
  //     street: "1 rue de l'avenue",
  //     city: "La Rochelle",
  //     state: "France",
  //     zipCode: "17000",
  //   },
  //   {
  //     firstName: "Max",
  //     lastName: "Bgt",
  //     startDate: "05/05/2024",
  //     department: "Sales",
  //     dateOfBirth: "27/01/1999",
  //     street: "1 rue de l'avenue",
  //     city: "La Rochelle",
  //     state: "France",
  //     zipCode: "17000",
  //   },
  //   {
  //     firstName: "Max",
  //     lastName: "Bgt",
  //     startDate: "05/05/2024",
  //     department: "Sales",
  //     dateOfBirth: "27/01/1999",
  //     street: "1 rue de l'avenue",
  //     city: "La Rochelle",
  //     state: "France",
  //     zipCode: "17000",
  //   },
  //   {
  //     firstName: "Max",
  //     lastName: "Bgt",
  //     startDate: "05/05/2024",
  //     department: "Sales",
  //     dateOfBirth: "27/01/1999",
  //     street: "1 rue de l'avenue",
  //     city: "La Rochelle",
  //     state: "France",
  //     zipCode: "17000",
  //   },
  //   {
  //     firstName: "Max",
  //     lastName: "Bgt",
  //     startDate: "05/05/2024",
  //     department: "Sales",
  //     dateOfBirth: "27/01/1999",
  //     street: "1 rue de l'avenue",
  //     city: "La Rochelle",
  //     state: "France",
  //     zipCode: "17000",
  //   },
  //   {
  //     firstName: "Max",
  //     lastName: "Bgt",
  //     startDate: "05/05/2024",
  //     department: "Sales",
  //     dateOfBirth: "27/01/1999",
  //     street: "1 rue de l'avenue",
  //     city: "La Rochelle",
  //     state: "France",
  //     zipCode: "17000",
  //   },
  //   {
  //     firstName: "Max",
  //     lastName: "Bgt",
  //     startDate: "05/05/2024",
  //     department: "Sales",
  //     dateOfBirth: "27/01/1999",
  //     street: "1 rue de l'avenue",
  //     city: "La Rochelle",
  //     state: "France",
  //     zipCode: "17000",
  //   },
  //   {
  //     firstName: "Max",
  //     lastName: "Bgt",
  //     startDate: "05/05/2024",
  //     department: "Sales",
  //     dateOfBirth: "27/01/1999",
  //     street: "1 rue de l'avenue",
  //     city: "La Rochelle",
  //     state: "France",
  //     zipCode: "17000",
  //   },
  //   {
  //     firstName: "Max",
  //     lastName: "Bgt",
  //     startDate: "05/05/2024",
  //     department: "Sales",
  //     dateOfBirth: "27/01/1999",
  //     street: "1 rue de l'avenue",
  //     city: "La Rochelle",
  //     state: "France",
  //     zipCode: "17000",
  //   },
  //   {
  //     firstName: "Max",
  //     lastName: "Bgt",
  //     startDate: "05/05/2024",
  //     department: "Sales",
  //     dateOfBirth: "27/01/1999",
  //     street: "1 rue de l'avenue",
  //     city: "La Rochelle",
  //     state: "France",
  //     zipCode: "17000",
  //   },
  //   {
  //     firstName: "Max",
  //     lastName: "Bgt",
  //     startDate: "05/05/2024",
  //     department: "Sales",
  //     dateOfBirth: "27/01/1999",
  //     street: "1 rue de l'avenue",
  //     city: "La Rochelle",
  //     state: "France",
  //     zipCode: "17000",
  //   },
  //   {
  //     firstName: "Thomas",
  //     lastName: "Bgt",
  //     startDate: "05/05/2024",
  //     department: "Sales",
  //     dateOfBirth: "27/01/1999",
  //     street: "1 rue de l'avenue",
  //     city: "La Rochelle",
  //     state: "France",
  //     zipCode: "17000",
  //   },
  //   {
  //     firstName: "Max",
  //     lastName: "Bgt",
  //     startDate: "05/05/2024",
  //     department: "Sales",
  //     dateOfBirth: "27/01/1999",
  //     street: "1 rue de l'avenue",
  //     city: "La Rochelle",
  //     state: "France",
  //     zipCode: "17000",
  //   },
  //   {
  //     firstName: "Max",
  //     lastName: "Bgt",
  //     startDate: "05/05/2024",
  //     department: "Sales",
  //     dateOfBirth: "27/01/1999",
  //     street: "1 rue de l'avenue",
  //     city: "La Rochelle",
  //     state: "France",
  //     zipCode: "17000",
  //   },
  //   {
  //     firstName: "Max",
  //     lastName: "Bgt",
  //     startDate: "05/05/2024",
  //     department: "Sales",
  //     dateOfBirth: "27/01/1999",
  //     street: "1 rue de l'avenue",
  //     city: "La Rochelle",
  //     state: "France",
  //     zipCode: "17000",
  //   },
  //   {
  //     firstName: "Max",
  //     lastName: "Bgt",
  //     startDate: "05/05/2024",
  //     department: "Sales",
  //     dateOfBirth: "27/01/1999",
  //     street: "1 rue de l'avenue",
  //     city: "La Rochelle",
  //     state: "France",
  //     zipCode: "17000",
  //   },
  //   {
  //     firstName: "Max",
  //     lastName: "Bgt",
  //     startDate: "05/05/2024",
  //     department: "Sales",
  //     dateOfBirth: "27/01/1999",
  //     street: "1 rue de l'avenue",
  //     city: "La Rochelle",
  //     state: "France",
  //     zipCode: "17000",
  //   },
  //   {
  //     firstName: "Max",
  //     lastName: "Bgt",
  //     startDate: "05/05/2024",
  //     department: "Sales",
  //     dateOfBirth: "27/01/1999",
  //     street: "1 rue de l'avenue",
  //     city: "La Rochelle",
  //     state: "France",
  //     zipCode: "17000",
  //   },
  //   {
  //     firstName: "Max",
  //     lastName: "Bgt",
  //     startDate: "05/05/2024",
  //     department: "Sales",
  //     dateOfBirth: "27/01/1999",
  //     street: "1 rue de l'avenue",
  //     city: "La Rochelle",
  //     state: "France",
  //     zipCode: "17000",
  //   },
  //   {
  //     firstName: "Max",
  //     lastName: "Bgt",
  //     startDate: "05/05/2024",
  //     department: "Sales",
  //     dateOfBirth: "27/01/1999",
  //     street: "1 rue de l'avenue",
  //     city: "La Rochelle",
  //     state: "France",
  //     zipCode: "17000",
  //   },
  //   {
  //     firstName: "Max",
  //     lastName: "Bgt",
  //     startDate: "05/05/2024",
  //     department: "Sales",
  //     dateOfBirth: "27/01/1999",
  //     street: "1 rue de l'avenue",
  //     city: "La Rochelle",
  //     state: "France",
  //     zipCode: "17000",
  //   },
  // ];

  return (
    <div>
      {userData ? (
        <Table
          columns={columns}
          data={userData}
          columnQuery={columnsToSearch}
        />
      ) : (
        <p>Erreur</p>
      )}
    </div>
  );
}
