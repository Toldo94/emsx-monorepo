export interface Token {
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
}

export interface AuthUser {
    id: number;
    email: string;
    roleName: string;
}