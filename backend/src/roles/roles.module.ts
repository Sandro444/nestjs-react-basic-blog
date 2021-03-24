import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesResolver } from './roles.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleRepository } from './role.repository';

@Module({
  imports: [TypeOrmModule.forFeature([RoleRepository])],
  providers: [RolesService, RolesResolver],
})
export class RolesModule {}
