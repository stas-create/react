import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://api.spacexdata.com/v3/launches/',
});
const getMissions = () => {
    return axiosInstance.get();
};

export {getMissions}