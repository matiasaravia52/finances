import React from 'react';
const AccountList = ({ accounts }) => {
  console.log('Rendering AccountList with accounts:', accounts);
  return (
    <div>
      <h2>Lista de Cuentas</h2>
      <ul>
        {accounts.map(account => (
          <li key={account._id}>{account.description} - {account.number}</li>
        ))}
      </ul>
    </div>
  );
}



export default AccountList;