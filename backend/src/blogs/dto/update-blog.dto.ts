import { ArgsType, Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UpdateBlogRecord {
  @Field((type) => Int)
  id: number;

  @Field((type) => String, { nullable: true })
  title?: string;

  @Field((type) => String, { nullable: true })
  content?: string;

  @Field(() => Int, { nullable: true })
  author?: number;
}

@ArgsType()
export class UpdateBlogArgs {
  @Field((type) => UpdateBlogRecord)
  record: UpdateBlogRecord;
}
