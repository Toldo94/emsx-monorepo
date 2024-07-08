import "next-auth";
import "next-auth/jwt";


declare module "next-auth" {
    interface Session {
        token: Token;
        authUser: AuthUser
    }

    interface User {
        id?: string
        name?: string | null
        email?: string | null
        roleName: string
        accessToken: string,
        refreshToken: string
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        accesToken: string;
        refreshToken: string;
        expiresIn: number;
        authUser: AuthUser;
    }
}