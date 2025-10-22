import axios from "@/utils/axiosConfig";

export const getCartByUserId = async (userId: number) => {
    const res = await axios.get(`/cart/user/${userId}`);
    return res.data;
};


