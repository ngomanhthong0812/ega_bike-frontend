import axios from "@/utils/axiosConfig";
export const getDiscounts = async (limit?: number | null) => {
    const discounts = await axios.get("/discounts", { params: { limit } });
    return discounts.data;
};


