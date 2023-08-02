import React from 'react';

const UserList = ({ users, onDeleteUser, onEditUser }) => {
  return (
    <div>
      <h2>Department List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th> {/* ID alanını tabloya ekliyoruz */}
            <th>Department Name</th>
            <th>Department Code</th>
            <th>Department Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.departmentId}</td> {/* ID alanını burada gösteriyoruz */}
              <td>{user.departmentName}</td>
              <td>{user.departmentCode}</td>
              <td>{user.departmentAddress}</td>
              <td>
                <button className="edit" onClick={() => onEditUser(user)}>Edit</button>
                <button className="delete" onClick={() => onDeleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
