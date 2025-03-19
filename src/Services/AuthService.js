import dotenv from "dotenv";
import UserRepository from "../Repositories/UserRepository.js";
import status from "http-status"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

dotenv.config();
const SECRET = process.env.SECRET_KEY;

export default class AuthService{
    constructor(){
        this.repository = new UserRepository();
    }

    async login(req){
        try{
            const { email, senha } = req.body;

            if (!email || !senha) {
                return {
                    status: status.BAD_REQUEST,
                    message: "Email e senha são obrigatórios."
                };
            }

            const user = await this.repository.findByEmail(email);

            if (!user){
                return {
                    status: status.NOT_FOUND,
                    message: "Email inexistente."
                };
            }

            const validatePassword = bcrypt.compareSync(senha, user.senha);

            if(!validatePassword){
                return {
                    status: status.NOT_FOUND,
                    message: "Senha inválida."
                };
            }

            const authUser = {
                id: user.id,
                username: user.name,
                email: user.email
            }

            const token = jwt.sign(authUser, SECRET, {
                expiresIn: "1d"
            })
            
            return {
                status: status.OK,
                token: token
            };

        } catch(err){
            console.log(`Falha no login. ${err.message}`);
            return {
                status: status.INTERNAL_SERVER_ERROR,
                message: "Falha no login."
            };
        }
    }
}