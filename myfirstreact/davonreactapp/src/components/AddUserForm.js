/*import React, { useState } from 'react';
import './css/AddUserForm.css'; // CSS dosyasını düzeltelim
import axios from 'axios';

const AddUserForm = ({ onAddUser }) => {
  const [formData, setFormData] = useState({ departmentName: '', departmentCode: '', departmentAddress: '' });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8082/api/v1/demo', formData);
      onAddUser(response.data);
      setFormData({ departmentName: '', departmentCode: '', departmentAddress: '' });
    } catch (error) {
      console.error('Error adding department:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="departmentName"
        placeholder="Department Name"
        value={formData.departmentName}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="departmentCode"
        placeholder="Department Code"
        value={formData.departmentCode}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="departmentAddress"
        placeholder="Department Address"
        value={formData.departmentAddress}
        onChange={handleInputChange}
      />
      <button type="submit">Add Department</button>
    </form>
  );
};

export default AddUserForm;*/
import React, { useState } from 'react';
import './css/AddUserForm.css';
import axios from 'axios';

const AddUserForm = ({ onAddUser }) => {
  const [formData, setFormData] = useState({ id: '', departmentName: '', departmentCode: '', departmentAddress: '' });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8082/api/v1/demo', formData);
      onAddUser(response.data);
      setFormData({ id: '', departmentName: '', departmentCode: '', departmentAddress: '' });
    } catch (error) {
      console.error('Error adding department:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="id"
        placeholder="Department ID"
        value={formData.id}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="departmentName"
        placeholder="Department Name"
        value={formData.departmentName}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="departmentCode"
        placeholder="Department Code"
        value={formData.departmentCode}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="departmentAddress"
        placeholder="Department Address"
        value={formData.departmentAddress}
        onChange={handleInputChange}
      />
      <button type="submit">Add Department</button>
    </form>
  );
};

export default AddUserForm;
