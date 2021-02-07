import {
  ArgsType,
  Field,
  InputType,
  Int,
  registerEnumType,
} from '@nestjs/graphql';

enum SortEnum {
  ASC = 'ASC',
  DESC = 'DESC',
}

registerEnumType(SortEnum, {
  name: 'SortEnum',
});

@InputType()
class AllBlogsFilterInput {
  @Field((type) => Int, { nullable: true })
  take: number;

  @Field((type) => Int, { nullable: true })
  skip: number;

  @Field(() => SortEnum, { nullable: true })
  createdAtSort: SortEnum;
}

@ArgsType()
export class AllBlogsFilter {
  @Field((type) => AllBlogsFilterInput, { nullable: true })
  filter: AllBlogsFilterInput;
}
