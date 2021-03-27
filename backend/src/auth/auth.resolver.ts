import { Int, Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { UserType } from './dto/user.dto';
import { LoginArgs } from './dto/signjwt.args';
import { JwtTokenType } from './dto/JwtToken.type';
import { GqlAuthGuard } from './gql-auth.guard';
import { Req, UseGuards } from '@nestjs/common';
import { CurrentUser } from './current-user.decorator';
import { User } from 'src/users/user.entity';
import { AuthRoles } from './gql-role.guard';
@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(GqlAuthGuard)
  @Query((returns) => UserType)
  finduser(): UserType {
    return {
      username: 'sandro',
      password: 'tsereteli',
    };
  }

  @UseGuards(GqlAuthGuard)
  @Query((returns) => String)
  getString(): string {
    return 'protected route ';
  }

  @UseGuards(GqlAuthGuard)
  @Query((returns) => User)
  getCurrentUser(@CurrentUser() user: UserType): Promise<User> {
    return this.authService.getCurrentUser(user.username, user.password);
  }

  @Mutation((returns) => JwtTokenType)
  async logIn(@Args() loginArgs: LoginArgs): Promise<any> {
    return this.authService.login(loginArgs.args);
  }
}
