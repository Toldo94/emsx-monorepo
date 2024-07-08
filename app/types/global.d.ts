interface Token {
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
}

interface AuthUser {
    id: number;
    email: string;
    role: string;
}