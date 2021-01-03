import { ArgsType, Field, InputType, } from '@nestjs/graphql';

@InputType()
export class RegisterUserInput {
  @Field({ nullable: true })
  username: string;

  @Field({ nullable: true })
  email: string;

  @Field({ nullable: true })
  password: string;

  @Field({ nullable: true })
  repeatPassword: string;
}


@ArgsType()
export class RegisterUserArgs{
    @Field()
    args: RegisterUserInput
}