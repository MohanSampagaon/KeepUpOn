import React, { useState } from 'react';

interface Role {
  name: string;
  subRoles?: Role[];
}

const roles: Role[] = [
  { name: 'Director', subRoles: [{ name: 'Manager', subRoles: [{ name: 'Employee' }] }] },
];

const AddUser: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState('');

  const handleRoleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRole(event.target.value);
  };

  return (
    <div>
      <h1>Add User</h1>
      <form>
        <label htmlFor="role">Select Role:</label>
        <select id="role" value={selectedRole} onChange={handleRoleChange}>
          {roles.map((role) => (
            <option key={role.name} value={role.name}>
              {role.name}
            </option>
          ))}
        </select>

        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
