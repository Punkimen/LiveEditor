import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthDto } from './auth.dto';
import { PasswordService } from './password.service';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private readonly passwordService: PasswordService,
    private readonly userService: UserService,
  ) {}

  async signIn() {}
  async registration(authBody: AuthDto) {
    const { email, password } = authBody;

    const hashPassword = await this.passwordService.hashPassword(password);

    await this.userService.createUser({
      email,
      password: hashPassword,
    });
  }
  async logout() {}
}
