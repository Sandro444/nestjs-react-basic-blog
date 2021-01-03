import { Int, Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { UserType } from './dto/user.dto';
import { LoginArgs } from './dto/signjwt.args';
import { JwtTokenType } from "./dto/JwtToken.type";
import {GqlAuthGuard} from './gql-auth.guard'
import { Req, UseGuards } from '@nestjs/common';
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
  @Query(returns=>String)
  getString():string{
      return "protected route "
  }
 
  @UseGuards(GqlAuthGuard)
  @Query(returns=>UserType)
  getCurrentUser(@Req() request):UserType{
    console.log(request)
    return {
      username: "sandro",
      password: "tsereteli"
    }
  }

  @Mutation((returns) => JwtTokenType)
  async logIn(@Args() loginArgs: LoginArgs): Promise<any> {
    console.log(loginArgs)
    return this.authService.login(loginArgs.args);
  }
}
