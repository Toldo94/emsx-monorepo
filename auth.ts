import { z } from "zod";

import NextAuth, { User } from "next-auth";
import Credentials from "next-auth/providers/credentials";

import { jwtDecode } from "jwt-decode";

import { HttpClient } from "./app/lib/http-client";
import { UserRoutes } from "./app/lib/routes/users.routes";

const LoginSchema = z.object({
    email: z.string().email(),
    password: z.string(),
});


const getTokenExpiration = (token: string): number => {
    const decoded = jwtDecode(token);
    const expiserAt = decoded['exp']! * 1000;

    return expiserAt;
}


export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            credentials: {
                email: {},
                password: {}
            },
            authorize: async (credentials) => {
                let user = null

                const { email, password } = LoginSchema.parse(credentials);

                const data: { accessToken?: string } = await HttpClient.postRequest(UserRoutes.login, {
                    email,
                    password
                });

                user = await HttpClient.getRequest(UserRoutes.userMe, data.accessToken);

                console.log("user: ", user);

                if (user) {
                    return { ...user, ...data } as User;
                }

                return null
            }
        })
    ],
    callbacks: {
        jwt({ token, user }) {
            if (user) {
                token.accesToken = user.accessToken;
                token.refreshToken = user.refreshToken;
                token.expiresIn = getTokenExpiration(user.accessToken);
                token.authUser = {
                    id: parseInt(user.id!),
                    email: user.email!,
                    role: user.roleName
                };
            }
            return token
        },
        session({ session, token }) {
            session.token = {
                accessToken: token.accesToken,
                refreshToken: token.refreshToken,
                expiresIn: token.expiresIn
            }
            session.authUser = {
                id: token.authUser.id,
                email: token.authUser.email,
                role: token.authUser.role
            }
            return session
        },
    },
    pages: {
        signIn: "/login",
        signOut: "/"
    },
})