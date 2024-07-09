const accountRepository = require('../repositories/AccountRepository')

class AccountService {
    async createAccount(accountData) {
        return await accountRepository.createAccount(accountData);
    }

    async findAllAccounts() {
        return await accountRepository.findAllAccounts();
    }
}


module.exports = new AccountService();