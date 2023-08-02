import React, { useState, useEffect } from 'react';
import './css/EditUserForm.css'; // CSS dosyasını düzeltelim
import axios from 'axios';

// components/EditUserForm.js


const EditUserForm = ({ user, onUpdateUser, onCancelEdit }) => {
  const [formData, setFormData] = useState({ ...user });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // API'ye PUT isteği göndererek güncelleme işlemini gerçekleştiriyoruz
      await axios.put(`'http://localhost:8082/api/v1/demo'${user.id}`, formData);
      onUpdateUser(formData); // Backend güncelleme başarılıysa, kullanıcının bilgilerini güncelliyoruz
      onCancelEdit();
    } catch (error) {
      console.error('Error updating user:', error);
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
      <button type="submit">Update Department</button>
      <button className="cancel" type="button" onClick={onCancelEdit}>
        Cancel
      </button>
    </form>
  );
};

export default EditUserForm;
