import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesResolver } from './roles.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleRepository } from './role.repository';
import { UsersService } from 'src/users/users.service';
import { UserRepository } from 'src/users/user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([RoleRepository, UserRepository])],
  providers: [RolesService, RolesResolver, UsersService],
})
export class RolesModule {}
