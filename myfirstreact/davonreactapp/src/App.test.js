/*import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});*/
import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import axios from 'axios';
import App from './App';

describe('CRUD Operations', () => {
  test('Adding a new department', async () => {
    render(<App />);

    // Add Department form elements
    const departmentNameInput = screen.getByPlaceholderText('Department Name');
    const departmentCodeInput = screen.getByPlaceholderText('Department Code');
    const departmentAddressInput = screen.getByPlaceholderText('Department Address');
    const addButton = screen.getByText('Add Department');

    // Fill in the form
    fireEvent.change(departmentNameInput, { target: { value: 'IT Department' } });
    fireEvent.change(departmentCodeInput, { target: { value: 'IT001' } });
    fireEvent.change(departmentAddressInput, { target: { value: '123 Main St' } });

    // Click the Add button
    fireEvent.click(addButton);

    // Wait for the new department to appear in the table
    await waitFor(() => screen.getByText('IT Department'));

    // Assert that the new department is added
    expect(screen.getByText('IT Department')).toBeInTheDocument();
    expect(screen.getByText('IT001')).toBeInTheDocument();
    expect(screen.getByText('123 Main St')).toBeInTheDocument();
  });

  test('Editing a department', async () => {
    render(<App />);

    // Assuming there is a department with ID 1 in the list
    // If not, you can mock the API response to include the department you want to edit
    const editButton = screen.getByText('Edit');

    // Click the Edit button
    fireEvent.click(editButton);

    // Edit Department form elements
    const departmentNameInput = screen.getByPlaceholderText('Department Name');
    const departmentCodeInput = screen.getByPlaceholderText('Department Code');
    const departmentAddressInput = screen.getByPlaceholderText('Department Address');
    const updateButton = screen.getByText('Update Department');

    // Fill in the form
    fireEvent.change(departmentNameInput, { target: { value: 'Updated IT Department' } });
    fireEvent.change(departmentCodeInput, { target: { value: 'IT001-updated' } });
    fireEvent.change(departmentAddressInput, { target: { value: '456 Updated St' } });

    // Click the Update button
    fireEvent.click(updateButton);

    // Wait for the changes to reflect in the table
    await waitFor(() => screen.getByText('Updated IT Department'));

    // Assert that the department is updated
    expect(screen.getByText('Updated IT Department')).toBeInTheDocument();
    expect(screen.getByText('IT001-updated')).toBeInTheDocument();
    expect(screen.getByText('456 Updated St')).toBeInTheDocument();
  });

  test('Deleting a department', async () => {
    render(<App />);

    // Assuming there is a department with ID 1 in the list
    // If not, you can mock the API response to include the department you want to delete
    const deleteIdInput = screen.getByPlaceholderText('Enter Department ID');
    const deleteButton = screen.getByText('Delete Department');

    // Fill in the department ID to delete
    fireEvent.change(deleteIdInput, { target: { value: '1' } });

    // Click the Delete button
    fireEvent.click(deleteButton);

    // Wait for the department to be removed from the table
    await waitFor(() => expect(screen.queryByText('IT Department')).toBeNull());

    // Assert that the department is deleted
    expect(screen.queryByText('IT Department')).toBeNull();
    expect(screen.queryByText('IT001')).toBeNull();
    expect(screen.queryByText('123 Main St')).toBeNull();
  });
});

