import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserList from './components/UserList';
import AddUserForm from './components/AddUserForm';
import EditUserForm from './components/EditUserForm';
import './components/css/App.css'; // App.js ile ilgili CSS dosyasını ekleyelim

const App = () => {
  const [users, setUsers] = useState([]);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  // API'den kullanıcıları almak için kullanılan fonksiyon
  const fetchUsers = async () => {
    try { //https://jsonplaceholder.typicode.com/users
      const response = await axios.get('http://localhost:8082/api/v1/demo');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Kullanıcı eklemek için kullanılan fonksiyon
  const handleAddUser = async (user) => {
    try {
      const response = await axios.post('http://localhost:8082/api/v1/demo', user);
      setUsers([...users, response.data]);
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  // Kullanıcı silmek için kullanılan fonksiyon
  const handleDeleteUser = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  // Kullanıcı düzenlemek için kullanılan fonksiyon
  const handleEditUser = (id, updatedUser) => {
    setEditing(true);
    setCurrentUser({ id, ...updatedUser });
  };

  // Kullanıcı güncellemek için kullanılan fonksiyon
  const handleUpdateUser = async (id, updatedUser) => {
    try {
      await axios.put(`'http://localhost:8082/api/v1/demo'${id}`, updatedUser);
      setUsers(users.map((user) => (user.id === id ? { ...user, ...updatedUser } : user)));
      setEditing(false);
      setCurrentUser({});
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };
  

  // Düzenleme iptali için kullanılan fonksiyon
  const handleCancelEdit = () => {
    setEditing(false);
    setCurrentUser({});
  };

  return (
    <div className="app">
      <h1>Department Registration App</h1>
      <div className="container">
        {editing ? (
          <div>
            <h2>Edit Department</h2>
            <EditUserForm user={currentUser} onUpdateUser={handleUpdateUser} onCancelEdit={handleCancelEdit} />
          </div>
        ) : (
          <div>
            <h2>Add Department</h2>
            <AddUserForm onAddUser={handleAddUser} />
          </div>
        )}
        <UserList users={users} onDeleteUser={handleDeleteUser} onEditUser={handleEditUser} />
      </div>
    </div>
  );
};

export default App;
