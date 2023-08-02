import React, { useState } from 'react';
import './css/AddUserForm.css'; // CSS dosyasını düzeltelim

const AddUserForm = ({ onAddUser }) => {
  const [formData, setFormData] = useState({ departmentId: '', departmentName: '', departmentCode: '', departmentAddress: '' });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddUser(formData);
    setFormData({ departmentId: '', departmentName: '', departmentCode: '', departmentAddress: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="departmentId"
        placeholder="Department ID"
        value={formData.departmentId}
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
