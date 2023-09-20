import axios from "axios";

const apiClient = axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:"ef0de6c70bfa4f4ba5b4f509d02feeea"
    }
})

export default apiClient