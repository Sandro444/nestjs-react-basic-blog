import { ArgsType, Field, InputType, Int } from '@nestjs/graphql';
import { User } from 'src/users/user.entity';

@InputType()
class CreateBlogRecord {
  @Field((type) => String)
  title: string;

  @Field((type) => String)
  content: string;

  @Field(() => Int, { nullable: true })
  author: number;

  @Field(() => Int, { nullable: true })
  file: number;
}

@ArgsType()
export class CreateBlogArgs {
  @Field((type) => CreateBlogRecord)
  record: CreateBlogRecord;
}
