import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { employeesSelector, addEmployee, updateEmployee, Employee } from '../features/employeeSlice';
import { CRITICALITY_RATING, PERFORMANCE_RATING, RISK_RATING, TRIGGER } from '../assets/json/dummy_data';

const EmployeesTable: React.FC<any> = (props) => {
  const employees = useSelector(employeesSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    const {jsonData} = props; 
    jsonData.forEach((employee: Employee) => dispatch(addEmployee(employee)));
  }, []);

  const handleUpdateEmployee = (employee: Employee) => {
    dispatch(updateEmployee(employee));
  };

  return (

    <div className="container mt-4 rounded-4 table-responsive">
      <table className="table table-bordered table-hover rounded-4 table-sm">
        <thead className="thead-dark">
          <tr>
            <th>Employee Name</th>
            <th>Performance Rating</th>
            <th>Previous EWS Rating</th>
            <th>Talent Type</th>
            <th>Project Dependency</th>
            <th>Mental Health</th>
            <th>Career Oppurtunities</th>
            <th>Motivation</th>
            <th>Personal</th>
            <th>EWS Rating</th>
            <th>Manager Rating</th>
            <th>Trigger</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {employees.map((employee) => (
            <tr key={employee.employeeName}>
              <td>{employee.employeeName}</td>
              <td className={`bg-${employee.performanceRating}`}> {PERFORMANCE_RATING[employee.performanceRating]}</td>
              <td className={`bg-${employee.previousEWSRating}`}>{RISK_RATING[employee.previousEWSRating]}</td>
              <td className={`bg-${employee.talentType}`}>{CRITICALITY_RATING[employee.talentType]}</td>
              <td className={`bg-${employee.projectHealth}`}>{RISK_RATING[employee.projectHealth]}</td>
              <td className={`bg-${employee.mentalHealth}`}>{RISK_RATING[employee.mentalHealth]}</td>
              <td className={`bg-${employee.career}`}>{CRITICALITY_RATING[employee.career]}</td>
              <td className={`bg-${employee.motivation}`}>{RISK_RATING[employee.motivation]}</td>
              <td className={`bg-${employee.personal}`}>{RISK_RATING[employee.personal]}</td>
              <td className={`bg-${employee.currentRating}`}>{RISK_RATING[employee.currentRating]}</td>
              <td className={`bg-${employee.managerRating}`}>{RISK_RATING[employee.managerRating]}</td>
              <td>{TRIGGER[employee.trigger]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeesTable;