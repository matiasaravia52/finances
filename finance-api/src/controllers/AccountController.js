const accountService = require('../services/AccountService')

class AccountController {
  async createAccount(req, res) {
    try {
      const account = await accountService.createAccount(req.body);
      res.status(201).json(account);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async findAllAccounts(req, res) {
    const accounts = await accountService.findAllAccounts();
    res.status(200).json(accounts)
  }
}

module.exports = new AccountController();