import React, { useState } from 'react';
import './SlideTable.scss';
import CustomTable from '../../pages/EditableTable';
import EmployeesTable from '../../pages/EmployeesTable';
import employeJsonData from '../../assets/json/employee_performance.json';

const SlideTable = () => {
  const [isTableVisible, setTableVisible] = useState(false);
  const [employeeData, setEmployeeData] = useState(employeJsonData);

  // Toggle function to show/hide the table
  const toggleTable = () => {
    setTableVisible(!isTableVisible);
  };

  return (
    <div className="dashboard">
      {/* Right Arrow Button */}
      <button className="btn btn-green toggle-button"
        onClick={toggleTable}
      >
        <div className="arrow-container">
          <span className="arrow">{isTableVisible ? <span className="arrowLeft">→</span> : <span className="arrowRight">←</span>}</span>
        </div>
      </button>

      {/* Slide-in Table */}
      <div className={`table-container ${isTableVisible ? 'visible' : ''}`}>
        {employeeData && <EmployeesTable jsonData={employeeData.employeJsonData} />}
      </div>
    </div>
  );
};

export default SlideTable;
