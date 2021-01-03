import { Field, Int, ObjectType, ArgsType, InputType } from '@nestjs/graphql';

@InputType()
class Args {
  @Field((type) => String)
  username: string;

  @Field((type) => String)
  password: string;
}

@ArgsType()
export class LoginArgs {
  @Field()
  args: Args;
}
