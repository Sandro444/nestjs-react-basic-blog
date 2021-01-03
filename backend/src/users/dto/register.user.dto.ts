import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class RegisterUserDto {
  @Field({ nullable: true })
  username: string;

  @Field({ nullable: true })
  email: string;

  @Field({ nullable: true })
  password: string;

  @Field({ nullable: true })
  repeatPassword: string;
}
