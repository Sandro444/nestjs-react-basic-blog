import { Mutation, Resolver , Args} from '@nestjs/graphql';
import {User} from './user.entity'
import { RegisterUserDto } from './dto/register.user.dto';
import { RegisterUserArgs } from "./dto/register.user.args";
import { UsersService } from './users.service'; 
import { Query } from '@nestjs/common';

@Resolver(of=>User)
export class UsersResolver {
    constructor(private readonly usersService: UsersService){}

    @Mutation(returns => User)
    async registerUser(@Args() registerUserArgs: RegisterUserArgs):Promise<User>{
        return await this.usersService.registerUser(registerUserArgs.args)
    }
    
}
