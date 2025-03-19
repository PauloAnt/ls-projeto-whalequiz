import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_SERVER_URL;

export async function loginUser(credentials) {
    try {
        const { data } = await axios.post(`${API_URL}/api/login`, credentials, {
            headers: { "Content-Type": "application/json" }
        });
        return data;
    } catch (error) {
        console.error("Erro ao fazer login:", error.response?.data || error.message);
        throw error;
    }
}

export async function registerUser(userData) {
    try {
        const response = await axios.post(`${API_URL}/api/register`, userData, {
            headers: { "Content-Type": "application/json" }
        });
        return response.data; 
    } catch (error) {
        const errorMessage = error.response?.data?.message || "Erro ao registrar usuário.";
        console.error("Erro ao registrar usuário:", errorMessage);
        throw new Error(errorMessage);
    }
}