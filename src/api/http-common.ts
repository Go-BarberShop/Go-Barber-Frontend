import axios from "axios";

export default axios.create({
    baseURL: "https://go-barber-api.onrender.com",
    headers:  {
        "Content-Type": "application/json"
    }
})