import React from 'react';
import { PendingDocumentWork } from '../types';

interface PendingDocumentWorkListProps {
  pendingWorks: PendingDocumentWork[];
}

const PendingDocumentWorkList: React.FC<PendingDocumentWorkListProps> = ({ pendingWorks }) => {
  return (
    <div>
      <h2>Pending Document Work</h2>
      <ul>
        {pendingWorks.map((work) => (
          <li key={work.id}>
            <strong>Student Name:</strong> {work.studentName}, <strong>Document Type:</strong> {work.documentType},{' '}
            <strong>Description:</strong> {work.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PendingDocumentWorkList;
