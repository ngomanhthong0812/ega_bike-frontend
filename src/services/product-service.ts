import axios from "@/utils/axiosConfig";

export const getProducts = async (limit?: number | null) => {
    const products = await axios.get("/products", { params: { limit } });
    return products.data;
};
