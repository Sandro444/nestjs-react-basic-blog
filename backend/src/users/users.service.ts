import { BadRequestException, Injectable, OnModuleInit } from '@nestjs/common';
import { User } from './user.entity';
import { UserRepository } from './user.repository';
import { Repository } from 'typeorm';
import { RegisterUserDto } from './dto/register.user.dto';
import { RoleRepository } from 'src/roles/role.repository';
import { resolveNaptr } from 'dns';
import { RoleTypes } from 'src/roles/role.entity';
@Injectable()
export class UsersService implements OnModuleInit {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly roleRepository: RoleRepository,
  ) {}

  async onModuleInit() {
    const adminUser = await this.userRepository.findOne({
      where: {
        username: 'admin',
      },
    });
    if (!adminUser) {
      await this.registerUser(
        {
          username: 'admin',
          email: 'email@com',
          password: 'sandro',
          repeatPassword: 'sandro',
        },
        RoleTypes.Administrator,
      );
    }
  }
  async loginUser(username: string, password: string): Promise<boolean> {
    const user = await this.userRepository.findOne({
      where: {
        username: username,
        password: password,
      },
    });
    return !!user;
  }

  async getCurrentUser(username: string, password: string): Promise<User> {
    return await this.userRepository.findOne({
      where: {
        username: username,
        password: password,
      },
      relations: ['role'],
    });
  }

  comparePasswords(password: string, repeatPassword: string): boolean {
    return password === repeatPassword;
  }

  async checkRegisteredUser(username: string): Promise<boolean> {
    const registeredUser = await this.userRepository.findOne({
      where: {
        username: username,
      },
    });
    return !!registeredUser;
  }

  async registerUser(
    userArgs: RegisterUserDto,
    role: string = RoleTypes.User,
  ): Promise<User> {
    const passwordsSame = this.comparePasswords(
      userArgs.password,
      userArgs.repeatPassword,
    );
    const registeredUser = await this.checkRegisteredUser(userArgs.username);
    if (!passwordsSame) {
      throw new BadRequestException('passwords not same');
    } else if (registeredUser) {
      throw new BadRequestException('user with this username already exists');
    }

    const userRole = await this.roleRepository.findOne({
      where: {
        name: role,
      },
    });

    return await this.userRepository.save({
      username: userArgs.username,
      email: userArgs.email,
      password: userArgs.password,
      role: userRole,
    });
  }
}
