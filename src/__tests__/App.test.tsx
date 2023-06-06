import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  test('renders the initial loan list', () => {
    render(<App />);
    expect(screen.getByText('Loans')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
  });

  test('adds a new loan and displays it in the list', () => {
    render(<App />);
    const studentNameInput = screen.getByLabelText('Student Name:');
    const amountInput = screen.getByLabelText('Amount:');
    const addButton = screen.getByText('Add Loan');

    fireEvent.change(studentNameInput, { target: { value: 'Alice' } });
    fireEvent.change(amountInput, { target: { value: '1500' } });
    fireEvent.click(addButton);

    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.getByText('1500')).toBeInTheDocument();
  });

  test('renders the initial pending document work list', () => {
    render(<App />);
    expect(screen.getByText('Pending Document Work')).toBeInTheDocument();
    expect(screen.getByText('Transcript')).toBeInTheDocument();
    expect(screen.getByText('Transcript request pending')).toBeInTheDocument();
    expect(screen.getByText('ID Proof')).toBeInTheDocument();
    expect(screen.getByText('ID proof verification pending')).toBeInTheDocument();
  });

  test('adds a new pending document work and displays it in the list', () => {
    render(<App />);
    const studentNameInput = screen.getByLabelText('Student Name:');
    const documentTypeInput = screen.getByLabelText('Document Type:');
    const descriptionInput = screen.getByLabelText('Description:');
    const addButton = screen.getByText('Add Work');

    fireEvent.change(studentNameInput, { target: { value: 'Bob' } });
    fireEvent.change(documentTypeInput, { target: { value: 'Report Card' } });
    fireEvent.change(descriptionInput, { target: { value: 'Report card pending' } });
    fireEvent.click(addButton);

    expect(screen.getByText('Bob')).toBeInTheDocument();
    expect(screen.getByText('Report Card')).toBeInTheDocument();
    expect(screen.getByText('Report card pending')).toBeInTheDocument();
  });
});
