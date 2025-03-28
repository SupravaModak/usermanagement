import axios from "axios";

const API_BASE_URL = "https://reqres.in/api";

export const loginUser = async (credentials) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/login`, credentials);
        console.log("Login Success:", response.data);
        return response.data;
    } catch (error) {
        console.error("Login Error:", error.response?.data || error.message);
        throw error.response?.data || "Login failed!";
    }
};

export const fetchUsers = async (page = 1) => {
    const response = await axios.get(`${API_BASE_URL}/users?page=${page}`);
    return response.data;
};

export const updateUser = async (id, userData) => {
    return axios.put(`${API_BASE_URL}/users/${id}`, userData);
};

export const deleteUser = async (id) => {
    return axios.delete(`${API_BASE_URL}/users/${id}`);
};
