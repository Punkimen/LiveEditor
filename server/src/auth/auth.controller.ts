import { Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  getName(): string {
    return this.authService.auth();
  }

  @Post()
  auth(): string {
    return this.authService.auth();
  }
}
