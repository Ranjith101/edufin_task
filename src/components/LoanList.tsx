import React from 'react';
import { Loan } from '../types';

interface LoanListProps {
  loans: Loan[];
}

const LoanList: React.FC<LoanListProps> = ({ loans }) => {
  return (
    <div>
      <h2>Loans</h2>
      <ul>
        {loans.map((loan) => (
          <li key={loan.id}>
            <strong>Student Name:</strong> {loan.studentName}, <strong>Amount:</strong> {loan.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LoanList;
