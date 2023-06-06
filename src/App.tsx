import React, { useState } from 'react';
import LoanList from './components/LoanList';
import NewLoanForm from './components/NewLoanForm';
import PendingDocumentWorkList from './components/PendingDocumentWorkList';
import { Loan, PendingDocumentWork } from './types';
import './App.css';

enum ActiveTab {
  Loans = 'loans',
  PendingWorks = 'pendingWorks',
}

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>(ActiveTab.Loans);
  const [loans, setLoans] = useState<Loan[]>([
    { id: 1, studentName: 'John Doe', amount: 1000 },
    { id: 2, studentName: 'Jane Smith', amount: 2000 },
  ]);
  const [pendingWorks, setPendingWorks] = useState<PendingDocumentWork[]>([
    { id: 1, studentName: 'John Doe', documentType: 'Transcript', description: 'Transcript request pending' },
    { id: 2, studentName: 'Jane Smith', documentType: 'ID Proof', description: 'ID proof verification pending' },
  ]);

  const addLoan = (newLoan: Loan) => {
    setLoans((prevLoans) => [...prevLoans, newLoan]);
  };

  const addPendingWork = (newWork: PendingDocumentWork) => {
    setPendingWorks((prevWorks) => [...prevWorks, newWork]);
  };

  const handleTabChange = (tab: ActiveTab) => {
    setActiveTab(tab);
  };

  return (
    <div className="app">
      <nav className="navbar">
        <button
          className={`tab-button ${activeTab === ActiveTab.Loans ? 'active' : ''}`}
          onClick={() => handleTabChange(ActiveTab.Loans)}
        >
          Loans
        </button>
        <button
          className={`tab-button ${activeTab === ActiveTab.PendingWorks ? 'active' : ''}`}
          onClick={() => handleTabChange(ActiveTab.PendingWorks)}
        >
          Pending Document Work
        </button>
      </nav>

      {activeTab === ActiveTab.Loans && (
        <div>
          <h1>Loans</h1>
          <NewLoanForm onNewLoan={addLoan} />
          <LoanList loans={loans} />
        </div>
      )}

      {activeTab === ActiveTab.PendingWorks && (
        <div>
          <h1>Pending Document Work</h1>
          <PendingDocumentWorkList pendingWorks={pendingWorks} />
        </div>
      )}
    </div>
  );
};

export default App;
