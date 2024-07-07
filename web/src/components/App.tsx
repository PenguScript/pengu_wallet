// src/App.tsx
import React, { useState, useEffect } from 'react';
import Wallet from './Wallet';
import './App.css';

const App: React.FC = () => {
  const [cash, setCash] = useState(150);  // Example values
  const [bank, setBank] = useState(1200); // Example values

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const data = event.data;
      if (data.action === 'updateWallet') {
        setCash(data.data.cash);
        setBank(data.data.bank);
      }
    };

    window.addEventListener('message', handleMessage);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Wallet 
          cash={cash} 
          bank={bank} 
        />
      </header>
    </div>
  );
};

export default App;
