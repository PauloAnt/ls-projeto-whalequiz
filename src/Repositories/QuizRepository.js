import db from '../Configurations/supaBaseConfig.js';
import QuizDTO from '../Models/QuizDTO.js';

export default class QuizRepository {

    async findById(id) {
        const { data, error } = await db
            .from('quizzes')
            .select("*")
            .eq("id", id)
            .single();

        if (error || !data) return null;

        return new QuizDTO(data.id, data.nome, data.criador_email, data.tema, data.descricao);
    }

    async findAll() {
        const { data, error } = await db
            .from('quizzes')
            .select("*");

        if (error || !data) return null;

        return data.map(quiz => new QuizDTO(quiz.id, quiz.nome, quiz.criador_email, quiz.tema, quiz.descricao));
    }

    async insert(data) {
        const { data: insertedData, error } = await db
            .from('quizzes')
            .insert(data)
            .select("*");

        if (error || !insertedData) return null;

        return new QuizDTO(insertedData[0].id, insertedData[0].nome, insertedData[0].criador_email, insertedData[0].tema, insertedData[0].descricao);
    }

    async update(data) {
        const { data: updatedData, error } = await db
            .from('quizzes')
            .update(data)
            .eq('id', data.id)
            .select("*");

        if (error || !updatedData) return null;

        return new QuizDTO(updatedData[0].id, updatedData[0].nome, updatedData[0].criador_email, updatedData[0].tema, updatedData[0].descricao);
    }

    async del(id) {
        const { error } = await db
            .from('quizzes')
            .delete()
            .eq('id', id);

        if (error) return null;

        return true;
    }
}
