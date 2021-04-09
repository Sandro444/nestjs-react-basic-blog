import { ArgsType, Field, InputType, Int } from '@nestjs/graphql';
import { User } from 'src/users/user.entity';

@InputType()
class CreateCommentRecord {
  @Field((type) => String)
  body: string;

  @Field(() => Int)
  blog: number;

  @Field(() => Int, { nullable: true })
  author?: number;
}

@ArgsType()
export class CreateCommentArgs {
  @Field((type) => CreateCommentRecord)
  record: CreateCommentRecord;
}
