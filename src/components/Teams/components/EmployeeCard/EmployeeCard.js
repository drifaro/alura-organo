import React from "react";
import "./EmployeeCard.css";

export const EmployeeCard = ({
  employeeImage,
  employeeRole,
  employeeName,
  backgroundColor,
}) => (
  <div className="employee">
    <div className="header" style={{ background: backgroundColor }}>
      <img src={employeeImage} alt={`Foto do colaborador(a) ${employeeName}`} />
    </div>
    <div className="footer-card">
      <h4>{employeeName}</h4>
      <h5>{employeeRole}</h5>
    </div>
  </div>
);
