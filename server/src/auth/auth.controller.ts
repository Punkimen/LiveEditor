import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  registration(@Body() authBody: AuthDto) {
    return this.authService.registration(authBody);
  }

  @Post()
  auth(): string {
    return 'this.authService.auth()';
  }
}
