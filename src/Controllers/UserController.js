import AuthService from "../Services/AuthService.js";
import UserService from "../Services/UserService.js";
import status from "http-status";

export default class AuthController{
    constructor(){
        this.auth_service = new AuthService();
        this.user_service = new UserService();
    }

    async login(req, res){
        const response = await this.auth_service.login(req);

        return res.status(response.status).json(response);
    }

    async register(req, res){
        const user = await this.user_service.register(req);

        return res.status(user.status).json({
            status: user.status,
            message: user.message});
    }

}