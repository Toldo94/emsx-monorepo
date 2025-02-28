import { z } from "zod";

import NextAuth, { User } from "next-auth";

import Credentials from "next-auth/providers/credentials";
import { AuthService } from "@/lib/auth.service";


const LoginSchema = z.object({
    email: z.string().email(),
    password: z.string(),
});


export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            credentials: {
                email: {},
                password: {}
            },
            authorize: async (credentials, request): Promise<User | null> => {
                const { email, password } = LoginSchema.parse(credentials);
                return AuthService.validateUser(email, password);
            }
        })
    ],
    callbacks: {
        authorized({ request, auth }) {
            if (request.nextUrl.pathname === '/') {
                return true;
            }
            return !!auth;
        },
        jwt({ token, user }) {
            if (user) {
                return {
                    ...token,
                    id: user.id,
                    roleName: user.roleName,
                };
            }
            return token;
        },
        session({ session, token }) {
            return {
                ...session,
                authUser: {
                    ...session.user,
                    id: String(token.id),
                    roleName: token.roleName,
                },
            };
        },
    },
    session: {
        strategy: "jwt",
        maxAge: 15 * 60, // 15 minutes
    },
    jwt: {
        maxAge: 15 * 60, // 15 minutes
    },
    pages: {
        signIn: "/login",
        signOut: "/"
    },
})