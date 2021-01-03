import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    return (await this.usersService.loginUser(username, pass)) || null;
  }

  async login(user: any) {
    const payload = { username: user.username, password: user.password };
    const validatedUser = await this.validateUser(
      payload.username,
      payload.password,
    );
    if (validatedUser) {
      return {
        access_token: this.jwtService.sign(payload),
      };
    }
    throw new BadRequestException('wrong credentials');
  }
}
