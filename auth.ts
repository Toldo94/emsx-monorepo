import { z } from "zod";

import NextAuth, { type User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";


import prisma from "@/lib/prisma";

import EncryptionService from "@/app/lib/encryption/encryption.service";

const LoginSchema = z.object({
    email: z.string().email(),
    password: z.string(),
});


export const { handlers, signIn, signOut, auth } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            credentials: {
                email: {},
                password: {}
            },
            authorize: async (credentials, request): Promise<User | null> => {
                const { email, password } = LoginSchema.parse(credentials);

                try {
                    const userFromDb = await prisma.user.findUnique({ where: { email } });

                    if (!userFromDb || !await EncryptionService.compare(password, userFromDb.password)) {
                        return null;
                    }

                    return {
                        id: String(userFromDb.id),
                        name: userFromDb.name || "",
                        email: userFromDb.email,
                        roleName: userFromDb.roleName || "",
                    };
                } catch (error) {
                    console.error("Error during authentication:", error);
                    return null;
                }
            }
        })
    ],
    session: {
        strategy: "jwt",
        maxAge: 15 * 60, // 15 minutes
    },
    jwt: {
        maxAge: 15 * 60, // 15 minutes
    },
})