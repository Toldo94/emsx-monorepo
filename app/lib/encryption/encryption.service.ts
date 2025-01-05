import { hash, compare } from 'bcryptjs';

export default class EncryptionService {

  public static async hash(value: string) {
    return await hash(value, 12);
  }

  public static async compare(value: string, hash: string) {
    return await compare(value, hash);
  }
}