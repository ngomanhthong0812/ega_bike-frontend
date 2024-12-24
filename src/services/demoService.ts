import axios from "@/utils/axiosConfig";

export const createUser = (data: any) => {
    return axios.post(`/users`, data); // Truyền object trong body
}

export const getUser = (userId: number, page: number) => {
    return axios.get(`/users`, {
        params: { user_id: userId, page: page } // Truyền tham số dưới dạng query
    });
}