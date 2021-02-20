import { ArgsType, Field, InputType, Int } from '@nestjs/graphql';

@InputType()
class GetOneBlogRecord {
  @Field((type) => Int)
  id: number;
}

@ArgsType()
export class GetOneBlogArgs {
  @Field((type) => GetOneBlogRecord)
  record: GetOneBlogRecord;
}
