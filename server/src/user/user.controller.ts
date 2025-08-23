import { Controller, Get, Patch, Post, Delete } from '@nestjs/common';

@Controller('users')
export class UserController {
  @Get(':id')
  getUser() {}

  @Get()
  getAllUser() {}

  @Post()
  createUser() {}

  @Patch()
  updateUser() {}

  @Delete(':id')
  deleteUser() {}
}
