import React from "react";
import "./Teams.css";
import { EmployeeCard } from "./components/EmployeeCard/EmployeeCard";

export const Teams = ({ employees, cardColor, backgroundColor, teamName }) => {
  const css = {
    team: {
      backgroundColor,
    },
    divider: {
      borderTop: `4px solid ${cardColor}`,
    },
  };

  return (
    employees?.length > 0 && (
      <>
        <section className="header-list-team">
          <h1>Minha Organização</h1>
          <div className="divider-list-team" />
        </section>
        <section className="team" style={css.team}>
          <h3>{teamName}</h3>
          <div className="divider" style={css.divider} />
          <div className="employee-list">
            {employees.map((employee) => (
              <EmployeeCard
                key={employee.name}
                employeeName={employee.name}
                employeeRole={employee.role}
                employeeImage={employee.image}
                backgroundColor={cardColor}
              />
            ))}
          </div>
        </section>
      </>
    )
  );
};
