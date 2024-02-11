import React, { useState } from "react";
import { Banner } from "./components/Banner";
import { Form } from "./components/Form/Form";

export const App = () => {
  const [employeesData, setEmployeesData] = useState([]);

  const newEmployeeAdd = (employee) => {
    setEmployeesData([...employeesData, employee]);
  };
  return (
    <div className="App">
      <Banner />
      <Form isRegistered={(employee) => newEmployeeAdd(employee)} />
    </div>
  );
};

export default App;
