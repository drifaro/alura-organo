import React, { useState } from "react";
import { Banner } from "./components/Banner";
import { Form } from "./components/Form/Form";
import { Teams } from "./components/Teams/Teams";
import { teamList } from "./teamList";
import { Footer } from "./components/Footer";

export const App = () => {
  const [employeesData, setEmployeesData] = useState([]);

  const newEmployeeAdd = (employee) => {
    setEmployeesData([...employeesData, employee]);
  };
  return (
    <div className="App">
      <Banner />
      <Form
        teamNameList={teamList.map((item) => item.teamName)}
        isRegistered={(employee) => newEmployeeAdd(employee)}
      />
      {employeesData.length > 0 && (
        <section className="header-list-team">
          <h1>Minha Organização</h1>
          <div className="divider-list-team" />
        </section>
      )}
      {teamList.map((team) => (
        <Teams
          key={team.teamName}
          teamName={team.teamName}
          backgroundColor={team.secondaryColor}
          cardColor={team.primaryColor}
          employees={employeesData.filter(
            (employee) => employee.team === team.teamName
          )}
        />
      ))}
      <Footer />
    </div>
  );
};
