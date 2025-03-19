import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_SERVER_URL;

export async function getQuestionById(id) {
    try {
        const { data } = await axios.get(`${API_URL}/api/questoes/${id}`);
        console.log(data)
        return data;
    } catch (error) {
        console.error(`Erro ao buscar questão ${id}:`, error.response?.data || error.message);
        throw error;
    }
}

export async function getAllQuestions() {
    try {
        const { data } = await axios.get(`${API_URL}/api/questoes`);
        return data;
    } catch (error) {
        console.error("Erro ao buscar questões:", error.response?.data || error.message);
        throw error;
    }
}

export async function createQuestion(questionData, token) {
    try {
        const { data } = await axios.post(`${API_URL}/api/questoes`, questionData, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });
        return data;
    } catch (error) {
        console.error("Erro ao criar questão:", error.response?.data || error.message);
        throw error;
    }
}
