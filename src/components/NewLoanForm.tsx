import React, { useState } from 'react';
import { Loan } from '../types';


interface NewLoanFormProps {
  onNewLoan: (loan: Loan) => void;
}

const NewLoanForm: React.FC<NewLoanFormProps> = ({ onNewLoan }) => {
  const [studentName, setStudentName] = useState('');
  const [amount, setAmount] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newLoan: Loan = {
      id: Date.now(),
      studentName,
      amount,
    };

    onNewLoan(newLoan);

    setStudentName('');
    setAmount(0);
  };

  return (
    <div className="container">
    <h2>Add New Loan</h2>
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="studentName" className="form-label">Student Name</label>
        <input
          type="text"
          id="studentName"
          className="form-control"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">Amount</label>
        <input
          type="number"
          id="amount"
          className="form-control"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
      </div>
      <button type="submit" className="btn btn-primary">Add Loan</button>
    </form>
  </div>
  );
};

export default NewLoanForm;
