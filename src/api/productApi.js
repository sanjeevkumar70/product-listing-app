import axios from "axios";

const API = axios.create({
    baseURL: "https://dummyjson.com",
});

export const getProducts = async (limit = 20, skip = 0) => {
    const res = await API.get(`/products?limit=${limit}&skip=${skip}`);
    return res.data;
};

export const getProductById = async (id) => {
    const res = await API.get(`/products/${id}`);
    return res.data;
};

export const getCategories = async () => {
    const res = await API.get("/products/categories");
    return res.data;
};

export const getProductsByCategory = async (category) => {
    const res = await API.get(`/products/category/${category}`);
    return res.data;
}; 
