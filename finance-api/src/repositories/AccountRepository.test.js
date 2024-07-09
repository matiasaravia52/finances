const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

const AccountRepository = require('./AccountRepository')
const Account = require('../models/AccountModel')

let mongoServer;

beforeAll(async() => {
    mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri();
    await mongoose.connect(uri);
});

afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
});

test('should create a account', async () => {
    const accountData = { description: 'Cuenta Principal', number: 636353 };
    const account = await AccountRepository.createAccount(accountData);

    expect(account).toHaveProperty('description');
    expect(account).toHaveProperty('number');
    expect(account.description).toBe('Cuenta Principal');
    expect(account.number).toBe(636353);
});