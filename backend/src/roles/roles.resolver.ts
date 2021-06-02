import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { RolesService } from './roles.service';
import { AssignRoleArgs } from './dto/assign-role.args';
import { AuthRoles } from 'src/auth/gql-role.guard';
import { RoleTypes } from './role.entity';
@Resolver()
export class RolesResolver {
  constructor(private roleService: RolesService) {}

  @AuthRoles(RoleTypes.Administrator)
  @Mutation((returns) => Boolean)
  async assignRole(@Args() assignRoleArgs: AssignRoleArgs): Promise<boolean> {
    return await this.roleService.assignRole(
      assignRoleArgs.record.userId,
      assignRoleArgs.record.roleName,
    );
  }
}
