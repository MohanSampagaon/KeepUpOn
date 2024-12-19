import React, { useState } from 'react';
import "../styles/_custom.scss";

// Sample data for the table
const initialData = [
  { id: 1, name: 'Item 1', status: 'active', category: 'A' },
  { id: 2, name: 'Item 2', status: 'inactive', category: 'B' },
  { id: 3, name: 'Item 3', status: 'pending', category: 'A' },
];

const statusOptions = ['active', 'inactive', 'pending'];
const categoryOptions = ['A', 'B', 'C'];

const CustomTable = () => {
  const [data, setData] = useState(initialData);
  const [visibleDropdown, setVisibleDropdown] = useState<string>(""); // To track which dropdown is visible

  // Handle dropdown change for status and category
  const handleDropdownChange = (id: number, field: string, newValue: string) => {
    const updatedData = data.map(item => 
      item.id === id ? { ...item, [field]: newValue } : item
    );
    setData(updatedData);
    setVisibleDropdown(""); // Hide dropdown after selection
  };

  return (
    <div className="container mt-4">
      <table className="table table-bordered table-hover">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Status</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>

              {/* Status Column */}
              <td className={`bg-${item.status}`}>
                {visibleDropdown === `status-${item.id}` ? (
                  <select
                    className={`form-select bg-${item.status}`}
                    value={item.status}
                    onChange={(e) => handleDropdownChange(item.id, 'status', e.target.value)}
                  >
                    {statusOptions.map(option => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : (
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => setVisibleDropdown(`status-${item.id}`)}
                  >
                    {item.status}
                  </button>
                )}
              </td>

              {/* Category Column */}
              <td>
                {visibleDropdown === `category-${item.id}` ? (
                  <select
                    className="form-select"
                    value={item.category}
                    onChange={(e) => handleDropdownChange(item.id, 'category', e.target.value)}
                  >
                    {categoryOptions.map(option => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : (
                  <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => setVisibleDropdown(`category-${item.id}`)}
                  >
                    {item.category}
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;
