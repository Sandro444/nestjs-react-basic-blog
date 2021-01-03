import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserType {
  @Field({ nullable: true })
  username: string;

  @Field({ nullable: true })
  password: string;
}
