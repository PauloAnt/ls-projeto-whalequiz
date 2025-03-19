import db from '../Configurations/supaBaseConfig.js';
import UserDTO from '../Models/UserDTO.js';

export default class UserRepository {

    async findByEmail(email) {
        const { data, error } = await db
            .from('users')
            .select("*")
            .eq('email', email)
            .single();
        
        if (error) return null;

        return new UserDTO(data.id, data.username, data.email, data.senha);
    }

    async register(userData) {
        const { username, email, senha } = userData;

        const { data, error } = await db
            .from('users')
            .insert([
                {
                    username: username,
                    email: email,
                    senha: senha,
                }
            ])
            .select("*");

        if (error) {
            console.error('Erro ao registrar usuário:', error);
            return null;
        }

        return true;
    }
}
