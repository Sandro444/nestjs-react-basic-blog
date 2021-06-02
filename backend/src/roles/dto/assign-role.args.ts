import {
  ArgsType,
  Field,
  InputType,
  Int,
  registerEnumType,
} from '@nestjs/graphql';
import { User } from 'src/users/user.entity';
import { RoleTypes } from '../role.entity';

registerEnumType(RoleTypes, {
  name: 'RoleTypes',
});

@InputType()
class AssignRoleRecord {
  @Field((type) => Int)
  userId: number;

  @Field((type) => RoleTypes)
  roleName: RoleTypes;
}

@ArgsType()
export class AssignRoleArgs {
  @Field((type) => AssignRoleRecord)
  record: AssignRoleRecord;
}
