import axios from "axios";

const MOCK_API_SECRET = process.env.VUE_APP_MOCK_API_SECRET;
const MOCK_API_URL = `https://${MOCK_API_SECRET}.mockapi.io/base/people`;

export const getAllPerson = async () => {
    const res = await axios.get(MOCK_API_URL);
    return res;
}

export const getPersonById = async (id) => {
    const res = await axios.get(MOCK_API_URL, {
        params: {
            id
        }
    });

    return res;
}

// export const createPerson = async (name, avatarUrl) => {
//     const res = await axios.post(MOCK_API_URL, {
//         params: {
//             id
//         }
//     });

//     return res;
// }

// export const updatePerson = async (id, name, avatarUrl) => {
//     const res = await axios.put(MOCK_API_URL, {
//         params: {
//             id
//         }
//     });

//     return res;
// }

// export const deletePerson = async (id) => {
//     const res = await axios.delete(MOCK_API_URL, {
//         params: {
//             id
//         }
//     });

//     return res;
// }
