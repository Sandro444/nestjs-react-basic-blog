import { Module } from '@nestjs/common';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {User} from './user.entity'
import { Repository } from 'typeorm';
@Module({
  imports: [TypeOrmModule.forFeature([User]), ],
  exports: [TypeOrmModule,UsersService],
  providers: [UsersResolver, UsersService,],
})
export class UsersModule {}
