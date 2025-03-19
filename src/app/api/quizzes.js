import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_SERVER_URL;

export async function getQuizById(id) {
    try {
        const { data } = await axios.get(`${API_URL}/api/quizzes/${id}`);
        console.log(data)
        return data;
        
    } catch (error) {
        console.error(`Erro ao buscar quiz ${id}:`, error.response?.data || error.message);
        throw error;
    }
}

export async function getAllQuizzes() {
    try {
        const { data } = await axios.get(`${API_URL}/api/quizzes`);
        console.log("Quizzes recebidos:", data); 
        return data;
    } catch (error) {
        console.error("Erro ao buscar quizzes:", error.response?.data || error.message);
        throw error;
    }
}

export async function createQuiz(quizData, token) {
    try {
        const { data } = await axios.post(`${API_URL}/api/quizzes`, quizData, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });
        return data;
    } catch (error) {
        console.error("Erro ao criar quiz:", error.response?.data || error.message);
        throw error;
    }
}
