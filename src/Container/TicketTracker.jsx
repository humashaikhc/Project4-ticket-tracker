import React from "react";
import "./TicketTracker.scss"
import Employee from "../components/Employee/Employee";
//import {useState} from "react";

const TicketTracker = (props) =>{
    const {EmployeeArr} = props;

    const employeeMap = EmployeeArr.map((employee, index) => {


        return (
            
            <div className="card">
                <Employee key = {index} name = {employee.name} role = {employee.role}/>
            </div>              
        );   
        });
        return <div className = "card__container">{employeeMap}</div>

    };

    


export default TicketTracker;