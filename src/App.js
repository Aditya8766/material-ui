import { useEffect, useState } from "react";
import "./App.css";
import DataGridComponent from "./components/DataGridComponent";
import getApi from "./services";
import SingleSelectableCheckbox from "./components/Checkbox";


export default function App() {
  const [students,setStudents]=useState([]); 

  const handleData = async () => {
    const api = await getApi();
    console.log("api",api);
    setStudents(api);
  };
useEffect(() => {
  handleData();
}, []);
console.log("students::",students)
  return (
    <div>
      {/* Table by fetching data from services but api is not given now so you can update your api on services  */}
      <div className="table">
        {students?.map((data, index) => {
          return (
            <div  className="table-container">
              <div className="id">{`${data.StudentId}`}</div>
              <div className="title">{`${data.Name}`}</div>
              <div className="description">{`${data.Roll}`}</div>
              <div className="price">{`${data.Birthday}`}</div>
            </div>
          );
        })}
      </div>
      <h4>Practice for Mui data grid</h4>
      <DataGridComponent/>
      <h4>Practice for single SingleSelectableCheckbox</h4>
      <SingleSelectableCheckbox/>
    </div>
  );
}
