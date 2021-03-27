import {
  applyDecorators,
  CanActivate,
  ExecutionContext,
  Injectable,
  SetMetadata,
  UseGuards,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { use } from 'passport';
import { UserRepository } from 'src/users/user.repository';
import { GqlAuthGuard } from './gql-auth.guard';

@Injectable()
class GqlRolesGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly userRepository: UserRepository,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles.length) {
      return true;
    }

    const ctx = GqlExecutionContext.create(context);
    const request = ctx.getContext().req;
    const currentUser = await this.userRepository.findOne({
      where: {
        username: request.user.username,
      },
      relations: ['role'],
    });
    if (roles.includes(currentUser?.role?.name)) {
      return true;
    }
    return false;
  }
}

export const AuthRoles = (...roles: string[]) => {
  return applyDecorators(
    SetMetadata('roles', roles),
    UseGuards(GqlAuthGuard, GqlRolesGuard),
  );
};
