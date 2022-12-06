import React from "react";
import "./Employee.scss";
import Counter from "../Counter/Counter"

const Employee = (props) => {
  const { name, role } = props;

  return (
    <>
      <h2 className="card__name">{name}</h2>
      <h3 className="card__role">{role}</h3>
      <Counter/>
    </>
  );
};

export default Employee;