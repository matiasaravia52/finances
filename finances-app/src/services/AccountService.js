import axios from 'axios'

const API_URL = `${process.env.REACT_APP_BACKEND_API_URL}/accounts`;

const createAccount = async (accountData) => {
    const response = await axios.post(API_URL, accountData);
    return response.data;
};

const getAllAccounts = async () => {
    const response = await axios.get(API_URL);
    return response.data;
}

export default {
    createAccount,
    getAllAccounts
};