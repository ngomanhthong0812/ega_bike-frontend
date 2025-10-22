import axios from "@/utils/axiosConfig";

export const getCategories = async () => {
    const response = await axios.get("/categories");
    return response.data;
};
