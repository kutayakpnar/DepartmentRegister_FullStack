import React, { useState } from 'react';
import './css/EditUserForm.css';
import axios from 'axios';

const EditDepartment = ({ onUpdateDepartment, onCancelEdit }) => {
  const [formData, setFormData] = useState({
    id: '',
    departmentName: '',
    departmentCode: '',
    departmentAddress: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8082/api/v1/demo/${formData.id}`, formData);
      onUpdateDepartment(formData); // Backend güncelleme başarılıysa, department bilgilerini güncelliyoruz
      onCancelEdit();
    } catch (error) {
      console.error('Error updating department:', error);
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
      <button type="submit">Update Department</button>
      <button className="cancel" type="button" onClick={onCancelEdit}>
        Cancel
      </button>
    </form>
  );
};

export default EditDepartment;
