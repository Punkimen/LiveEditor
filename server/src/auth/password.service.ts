import bcrypt from 'bcrypt';

export class PasswordService {
  async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, 3);
  }

  async compare(password: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(password, hash);
  }
}
