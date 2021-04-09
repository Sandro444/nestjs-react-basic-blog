import { Field, ObjectType } from '@nestjs/graphql';
import { Blog } from 'src/blogs/blog.entity';
import { User } from 'src/users/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
@ObjectType()
@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  @Field()
  id?: number;

  @Field()
  @Column()
  body: string;

  @Field((type) => Date)
  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    name: 'created_at',
  })
  createdAt: Date;

  @Field(() => User)
  @ManyToOne((type) => User, (user) => user.comments)
  author: User;

  @Field(() => Blog)
  @ManyToOne((type) => Blog, (blog) => blog.comments)
  blog: Blog;
}
