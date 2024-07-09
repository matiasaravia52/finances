import React, { useState } from 'react';
import accountService from '../services/AccountService';

const AccountForm = ({ addAccount }) => {
  const [description, setDescription] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const accountData = { description, number: parseInt(number) };
    addAccount(accountData);
    const newAccount = await accountService.createAccount(accountData);
    setDescription('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Description:</label>
        <input type="text" value={description} onChange={e => setDescription(e.target.value)} required />
      </div>
      <div>
        <label>Number:</label>
        <input type="text" value={number} onChange={e => setNumber(e.target.value)} required />
      </div>
      <button type="submit">Guardar Cuenta</button>
    </form>
  );
}



export default AccountForm;