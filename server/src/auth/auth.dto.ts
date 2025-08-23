import { IsEmail, MaxLength, MinLength } from 'class-validator';

export class AuthDto {
  @IsEmail()
  email: string;

  @MinLength(2)
  @MaxLength(34)
  password: string;
}
