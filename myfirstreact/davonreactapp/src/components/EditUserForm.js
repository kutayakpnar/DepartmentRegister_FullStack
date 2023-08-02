import React, { useState, useEffect } from 'react';
import './css/EditUserForm.css'; // CSS dosyasını düzeltelim
const EditUserForm = ({ user, onUpdateUser, onCancelEdit }) => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    setFormData(user);
  }, [user]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateUser(user.id, formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="departmentId"
        placeholder="Department ID"
        value={formData.departmentId || ''}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="departmentName"
        placeholder="Department Name"
        value={formData.departmentName || ''}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="departmentCode"
        placeholder="Department Code"
        value={formData.departmentCode || ''}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="departmentAddress"
        placeholder="Department Address"
        value={formData.departmentAddress || ''}
        onChange={handleInputChange}
      />
      <button type="submit">Update Department</button>
      <button type="button" onClick={onCancelEdit}>Cancel</button>
    </form>
  );
};

export default EditUserForm;
