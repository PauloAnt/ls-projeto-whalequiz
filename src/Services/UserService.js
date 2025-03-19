import status from 'http-status';
import UserRepository from '../Repositories/UserRepository.js';
import UserDTO from '../Models/UserDTO.js'; 
import bcrypt from 'bcrypt';

export default class UserService {
    constructor() {
        this.repository = new UserRepository();
    }

    async findByEmail(req) {
        const { email } = req.body;

        try {

            const user = await this.repository.findByEmail(email);

            if (!user) {
                return {
                    status: status.NOT_FOUND,
                    message: "Usuário não encontrado."
                };
            }

            const userDTO = new UserDTO(user.id, user.username, user.email, user.senha);

            return {
                status: status.OK,
                data: userDTO
            };
        } catch (err) {
            console.log(`Erro inesperado. ${err.message}`);
            return {
                status: status.INTERNAL_SERVER_ERROR,
                message: "Erro inesperado no servidor."
            };
        }
    }

    async register(req) {
        const { username, email, senha } = req.body;

        try {
            const user = await this.repository.findByEmail(email);
            if (user) {
                return {
                    status: status.CONFLICT,
                    message: "Email já está em uso."
                };
            }
            const hashedPassword = await bcrypt.hash(senha, 10);

            const newUser = await this.repository.register({ username, email, senha: hashedPassword });

            if (!newUser) {
                return {
                    status: status.BAD_REQUEST,
                    message: "Erro ao registrar o usuário."
                };
            }

            const userDTO = new UserDTO(newUser.id, newUser.username, newUser.email, newUser.senha);

            return {
                status: status.CREATED,
                message: "Usuário registrado com sucesso.",
            };
        } catch (err) {
            console.log(`Erro inesperado: ${err.message}`);
            return {
                status: status.INTERNAL_SERVER_ERROR,
                message: "Erro inesperado no servidor."
            };
        }
    }
}
