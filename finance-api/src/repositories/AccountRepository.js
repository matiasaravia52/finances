const Account = require('../models/AccountModel')

class AccountRepository {
    async createAccount(accountData) {
        const account = new Account(accountData);
        return await account.save();
    }

    async findAllAccounts() {
        return await Account.find();
    }
}

module.exports = new AccountRepository();