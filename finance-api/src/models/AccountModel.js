const mongoose = require('mongoose')

const accountSchema = new mongoose.Schema({
    description: {type: String, required: true},
    number: {type: Number, required: true}
});

const Account = mongoose.model('Account', accountSchema);

module.exports = Account;