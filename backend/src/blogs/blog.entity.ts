import { Field, ObjectType } from '@nestjs/graphql';
import { User } from 'src/users/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
 
@ObjectType()
@Entity()
export class Blog {
  @PrimaryGeneratedColumn()
  @Field()
  id?: number;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column()
  content: string;

  @Field(() => User)
  @ManyToOne(type => User, user => user.blogs )
  author: User;
}