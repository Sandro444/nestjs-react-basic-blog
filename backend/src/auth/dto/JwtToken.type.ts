import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class JwtTokenType {
  @Field({ nullable: true })
  access_token: String;
}
