import jwt from 'jsonwebtoken';

export interface JwtPayload {
    email: string;
    userId: string;
};

const JWT_SECRET = process.env.JWT_SECRET!;

export const generateToken = (payload: JwtPayload) => {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });
};

export const verifyToken = (token: string) => {
    return jwt.verify(token, JWT_SECRET) as JwtPayload;
};