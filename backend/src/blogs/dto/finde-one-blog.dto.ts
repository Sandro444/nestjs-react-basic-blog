import { ArgsType, Field, InputType, Int } from '@nestjs/graphql';

@InputType()
class FindOneBlogRecord {
  @Field((type) => Int)
  id: number;
}

@ArgsType()
export class FindOneBlogArgs {
  @Field((type) => FindOneBlogRecord)
  record: FindOneBlogRecord;
}
