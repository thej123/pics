import axios from 'axios';

// creates some default values for us
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 9wtV3pYgPuNFJMrEzVNVtS2Z3P_W-P-XZn7eDvZiSnU' 
    },
})
