import type { NextAuthConfig } from "next-auth";


export const authConfig = {
    pages: {
        signIn: "/login",
        signOut: "/"
    },
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
    providers: []
} satisfies NextAuthConfig;