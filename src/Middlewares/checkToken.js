import http from 'http-status';
import jwt from 'jsonwebtoken';

export const checkedToken = (req, res, next) => {

    const token = req.headers["authorization"];
    

    if (!token) {
        return res.status(http.UNAUTHORIZED).json({
            status: http.UNAUTHORIZED,
            message: "Acesso negado. Nenhum token fornecido."
        });
    }

    const tokenFormatado = token.split(" ")[1];

    if (!tokenFormatado) {
        return res.status(http.UNAUTHORIZED).json({
            status: http.UNAUTHORIZED,
            message: "Acesso negado. Token mal formatado."
        });
    }

    jwt.verify(tokenFormatado, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(http.UNAUTHORIZED).json({
                status: http.UNAUTHORIZED,
                message: "Token inválido ou expirado."
            });
        }

        req.user = decoded;
        
        next();
    });
};
