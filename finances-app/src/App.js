import AccountForm from './components/AccountForm';
import AccountList from './components/AccountList';
import './App.css';
import { useEffect, useState } from 'react';
import AccountService from './services/AccountService';

function App() {

  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    AccountService.getAllAccounts()
      .then(accountsResult => setAccounts(accountsResult));
  }, []);

  const addAccount = (newAccount) => {
    console.log('new account app.js', newAccount)
    setAccounts((prevAccounts) => [...prevAccounts, newAccount]);
    console.log('Account added:', newAccount); // Log para verificar la cuenta añadida
  };

  return (
    <div>
      <h1>Gestión de Cuentas</h1>
      <AccountForm addAccount={addAccount} />
      <AccountList accounts={accounts} />
    </div>
  );
}

export default App;
