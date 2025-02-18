import { z } from "zod";

import NextAuth, { User } from "next-auth";
import { jwtDecode } from "jwt-decode";

import Credentials from "next-auth/providers/credentials";

import EncryptionService from "./app/lib/encryption/encryption.service";

import client from "@/lib/mongodb";


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
            authorize: async (credentials, request): Promise<User | null> => {
                const { email, password } = LoginSchema.parse(credentials);

                await client.connect();

                const userFromDb = await client.db().collection('users').findOne({
                    email: email
                });

                console.log("User from DB: ", userFromDb);

                if (!userFromDb || !await EncryptionService.compare(password, userFromDb.password)) {
                    return null;
                };


                return {
                    id: String(userFromDb.id),
                    name: userFromDb.name || "",
                    email: userFromDb.email,
                    roleName: userFromDb.roleName || "",
                };
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