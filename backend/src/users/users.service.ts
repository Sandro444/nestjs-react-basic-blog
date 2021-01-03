import { BadRequestException, Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { UserRepository} from "./user.repository";
import { Repository } from 'typeorm';
import { RegisterUserDto } from './dto/register.user.dto';
@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}

async loginUser(username: string, password: string) : Promise<boolean> {
    const user = await this.userRepository.findOne({
        where: {
            username: username,
            password: password
        }
    })
    return !!user

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

  async registerUser(userArgs: RegisterUserDto): Promise<User> {
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

    return await this.userRepository.save({
        username: userArgs.username,
        email: userArgs.email,
        password: userArgs.password
    })
  }
}
