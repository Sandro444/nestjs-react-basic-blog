import { Field, ObjectType } from '@nestjs/graphql';
import { Blog } from 'src/blogs/blog.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@ObjectType()
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @Field()
  @Column()
  username: string;

  @Field()
  @Column()
  email: string;

  @Field()
  @Column({ default: true })
  password: string;

  @OneToMany(type => Blog, blog => blog.author)
  blogs?: Blog[]
}