/*import React from 'react';
import axios from 'axios';

const UserList = ({ users, onDeleteUser, onEditUser }) => {
  const handleDeleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:8082/api/v1/demo/${id}`);
      onDeleteUser(id);
    } catch (error) {
      console.error('Error deleting department:', error);
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Department Name</th>
          <th>Department Code</th>
          <th>Department Address</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.departmentName}</td>
            <td>{user.departmentCode}</td>
            <td>{user.departmentAddress}</td>
            <td>
              <button onClick={() => onEditUser(user)}>Edit</button>
              <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserList;*/
import React from 'react';
import axios from 'axios';

const UserList = ({ users, onDeleteUser, onEditUser }) => {
  const handleDeleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:8082/api/v1/demo/${id}`);
      onDeleteUser(id);
    } catch (error) {
      console.error('Error deleting department:', error);
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Department ID</th>
          <th>Department Name</th>
          <th>Department Code</th>
          <th>Department Address</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.departmentName}</td>
            <td>{user.departmentCode}</td>
            <td>{user.departmentAddress}</td>
            <td>
              <button onClick={() => onEditUser(user)}>Edit</button>
              <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserList;
