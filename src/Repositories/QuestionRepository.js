import db from '../Configurations/supaBaseConfig.js'; 
import QuestionDTO from '../Models/QuestionDTO.js';  

export default class QuestionRepository {

    async findById(id) {
        const { data, error } = await db
            .from('questoes')
            .select("*")
            .eq("id", id)
            .single();

        if (error || !data) return null;

        return new QuestionDTO(data.id, data.quiz_id, data.questao, data.opcoes, data.correto);
    }

    async findAll() {
        const { data, error } = await db
            .from('questoes')
            .select("*");

        if (error || !data) return null;

        return data.map(questao => new QuestionDTO(questao.id, questao.quiz_id, questao.questao, questao.opcoes, questao.correto));
    }

    async insert(data) {
        const { data: insertedData, error } = await db
            .from('questoes')
            .insert(data)
            .select("*");

        if (error || !insertedData) return null;

        return new QuestionDTO(insertedData[0].id, insertedData[0].quiz_id, insertedData[0].questao, insertedData[0].opcoes, insertedData[0].correto);
    }

    async update(data) {
        const { data: updatedData, error } = await db
            .from('questoes')
            .update(data)
            .eq('id', data.id)
            .select("*");

        if (error || !updatedData) return null;

        return new QuestionDTO(updatedData[0].id, updatedData[0].quiz_id, updatedData[0].questao, updatedData[0].opcoes, updatedData[0].correto);
    }

    async del(id) {
        const { error } = await db
            .from('questoes')
            .delete()
            .eq('id', id);

        if (error) return null;

        return true;
    }
}
