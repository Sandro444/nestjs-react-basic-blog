import { Injectable, OnModuleInit } from '@nestjs/common';
import { Role, RoleTypes } from './role.entity';
import { RoleRepository } from './role.repository';

@Injectable()
export class RolesService implements OnModuleInit {
  constructor(private roleRepository: RoleRepository) {}

  async onModuleInit() {
    if ((await this.roleRepository.count({})) === 0) {
      const roles = [
        {
          name: RoleTypes.Administrator,
        },
        { name: RoleTypes.Publisher },
        { name: RoleTypes.User },
      ];

      for (let role of roles) {
        const newRole = new Role();
        newRole.name = role.name;
        await this.roleRepository.save(newRole);
      }
    }
  }
}
