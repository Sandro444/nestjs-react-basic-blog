import { Injectable, OnModuleInit } from '@nestjs/common';
import { Role, RoleTypes } from './role.entity';
import { RoleRepository } from './role.repository';
import { UsersService } from '../users/users.service';
import { AssignRoleArgs } from './dto/assign-role.args';
@Injectable()
export class RolesService implements OnModuleInit {
  constructor(
    private roleRepository: RoleRepository,
    private UsersService: UsersService,
  ) {}
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

  async assignRole(userId: number, roleName: RoleTypes): Promise<boolean> {
    try {
      const user = await this.UsersService.getOneUser(userId);
      user.role = await this.roleRepository.findOne({ name: roleName });
      await this.UsersService.saveUser(user);
      return true;
    } catch (e) {
      throw new Error('error assigning role');
    }
  }
}
