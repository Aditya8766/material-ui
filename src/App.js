import { useEffect, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import Form from "./components/Form";
import getApi from "./services";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "Adress",
    headerName: "Adress",
    type: "text",
    width: 300,
    height: 300,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue(params.id, "firstName") || ""} ${
        params.getValue(params.id, "lastName") || ""
      }`,
  },
];

const rows = [
  {
    id: 1,
    lastName: "Bhosale",
    firstName: "Aditya",
    age: 20,
    Adress: "244,Bhawani Peth Ramoshi Gate",
  },
  {
    id: 2,
    lastName: "Kadam",
    firstName: "Roshan",
    age: 20,
    Adress: "42,Janta vasahat Pune",
  },
  {
    id: 3,
    lastName: "Landge",
    firstName: "Abhisek",
    age: 21,
    Adress:
      "43,BibeWadi Pune near vasant baug near natu baug  near parvati near appar near yash lawns near city pride ",
  },
  {
    id: 4,
    lastName: "Stark",
    firstName: "Toney",
    age: 16,
    Adress: "30,VishrantWadi Pune",
  },
  {
    id: 5,
    lastName: "Narke",
    firstName: "Shreyas",
    age: null,
    Adress: "11,RamWadi Pune",
  },
  { id: 6, lastName: "Ad", firstName: null, age: 150 },
  {
    id: 7,
    lastName: "Patil",
    firstName: "Suraj",
    age: 29,
    Adress: "13,Hadapsar Pune",
  },
  {
    id: 8,
    lastName: "Kale",
    firstName: "Harshal",
    age: 36,
    Adress: "14,Magarpatta Pune",
  },
  {
    id: 9,
    lastName: "Patil",
    firstName: "Harshad",
    age: 65,
    Adress: "15,Deccnan Pune",
  },
];



export default function App() {
  const [students,setStudents]=useState([]); 

useEffect(() => {
  getApi().then((api) => {
    setStudents(api);
  });
}, []);
console.log("students::",students)
  return (
    <div style={{ height: 400, width: "100%", border: "1px solid black" }}>
      <DataGrid
        style={{ border: "1px solid black" }}
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
      <Form />
    </div>
  );
}
