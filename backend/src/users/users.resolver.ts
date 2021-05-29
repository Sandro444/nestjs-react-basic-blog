import { Mutation, Resolver, Args, Query } from '@nestjs/graphql';
import { User } from './user.entity';
import { RegisterUserDto } from './dto/register.user.dto';
import { RegisterUserArgs } from './dto/register.user.args';
import { UsersService } from './users.service';
import { AuthRoles } from '../auth/gql-role.guard';
@Resolver((of) => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation((returns) => User)
  async registerUser(
    @Args() registerUserArgs: RegisterUserArgs,
  ): Promise<User> {
    return await this.usersService.registerUser(registerUserArgs.args);
  }

  @AuthRoles('administrator')
  @Query((returns) => [User])
  async getAllUsers(): Promise<User[]> {
    return this.usersService.getAllUsers();
  }
}
