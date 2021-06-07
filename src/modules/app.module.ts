import { Module } from '@nestjs/common';
import { CreateUserController } from './create-user/create-user.controller';

@Module({
  imports: [],
  controllers: [CreateUserController],
})
export class AppModule {}
