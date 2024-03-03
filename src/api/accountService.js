import axios from "axios";
import { handleUnexpectedError } from './requestUtil.js';

const MOCK_API_SECRET = process.env.VUE_APP_MOCK_API_SECRET;
const MOCK_API_URL = `https://${MOCK_API_SECRET}.mockapi.io/base/account`;

export const getAllAccount = async () => {
    try {
        const res = await axios.get(MOCK_API_URL);
        return res.data;

    } catch (err) {
        handleUnexpectedError(err);
        throw err.message;
    }
}

export const getAccountById = async (id) => {
    try {
        const res = await axios.get(`${MOCK_API_URL}/${id}`);
        return res.data;

    } catch (err) {
        handleUnexpectedError(err);
        throw err.message;
    }
}

export const createAccount = async (name, avatarUrl) => {
    try {
        const res = await axios.post(MOCK_API_URL, {
            name,
            avatarUrl,
        });
        return res.data;

    } catch (err) {
        handleUnexpectedError(err);
        throw err.message;
    }
}

export const updateAccount = async (id, name, avatarUrl) => {
    try {
        const res = await axios.put(`${MOCK_API_URL}/${id}`, {
            name,
            avatarUrl,
        });
        return res.data;

    } catch (err) {
        handleUnexpectedError(err);
        throw err.message;
    }
}

export const deleteAccount = async (id) => {
    try {
        const res = await axios.delete(`${MOCK_API_URL}/${id}`);
        return res.data;

    } catch (err) {
        handleUnexpectedError(err);
        throw err.message;
    }
}
