import axios from "axios";
import { genSuccessObj, handleUnexpectedError } from "./requestUtil";

const MOCK_API_SECRET = process.env.VUE_APP_MOCK_API_SECRET;
const MOCK_API_URL = `https://${MOCK_API_SECRET}.mockapi.io/base/account`;

export const getAllAccount = async () => {
    try {
        const res = await axios.get(MOCK_API_URL);
        return genSuccessObj(res.status, res.data);

    } catch (err) {
        return handleUnexpectedError();
    }
}

export const getAccountById = async (id) => {
    try {
        const res = await axios.get(`${MOCK_API_URL}/${id}`);
        return genSuccessObj(res.status, res.data);

    } catch (err) {
        return handleUnexpectedError();
    }
}

export const createAccount = async (name, avatarUrl) => {
    try {
        const res = await axios.post(MOCK_API_URL, {
            name,
            avatarUrl,
        });
        return genSuccessObj(res.status, res.data);

    } catch (err) {
        return handleUnexpectedError();
    }
}

export const updateAccount = async (id, name, avatarUrl) => {
    try {
        const res = await axios.put(`${MOCK_API_URL}/${id}`, {
            name,
            avatarUrl,
        });
        return genSuccessObj(res.status, res.data);

    } catch (err) {
        return handleUnexpectedError();
    }
}

export const deleteAccount = async (id) => {
    try {
        const res = await axios.delete(`${MOCK_API_URL}/${id}`);
        return genSuccessObj(res.status, res.data);

    } catch (err) {
        return handleUnexpectedError();
    }
}
