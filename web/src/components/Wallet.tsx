// src/components/Wallet.tsx
import React from 'react';
import './Wallet.css';

interface WalletProps {
  cash: number;
  bank: number;
}

const Wallet: React.FC<WalletProps> = ({ cash, bank }) => {
  return (
    <div className="wallet">
      <div className="wallet-section">
        <span className="wallet-label">Cash:</span>
        <span className="wallet-value">${cash}</span>

      </div>
      <div className="wallet-section">
        <span className="wallet-label">Bank:</span>
        <span className="wallet-value">${bank}</span>

      </div>
    </div>
  );
};

export default Wallet;
