import axios from "axios";

const instence = axios.create({
    baseURL: "https://fakestoreapi.com/"
})

export default instence;