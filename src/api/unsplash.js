import axios from "axios";

const { REACT_APP_UNSPLASH_ACCESS_KEY } = process.env;
const ACCESS_KEY = REACT_APP_UNSPLASH_ACCESS_KEY;

// create new instance of axios
export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`
    }
});
