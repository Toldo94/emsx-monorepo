import client from "@/lib/mongodb";

import EncryptionService from "@/app/lib/encryption/encryption.service";


export class AuthService {
    static async validateUser(email: string, password: string) {
        await client.connect();
        try {
            const userFromDb = await client.db().collection('users').findOne({ email });
            
            if (!userFromDb || !await EncryptionService.compare(password, userFromDb.password)) {
                return null;
            }

            return {
                id: String(userFromDb.id),
                name: userFromDb.name || "",
                email: userFromDb.email,
                roleName: userFromDb.roleName || "",
            };
        } finally {
            await client.close();
        }
    }
} 