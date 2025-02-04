import axios from 'axios';

const coinbaseApi = axios.create({
    baseURL: 'https://api.coinbase.com/v2', // Adjust the base URL if applicable
    headers: {
        Authorization: `Bearer YOUR_ACCESS_TOKEN`, // Use the access token for authentication
    },
});

export const getWalletDetails = async () => {
    const response = await coinbaseApi.get('/accounts'); // Adjust endpoint as needed
    return response.data;
};
