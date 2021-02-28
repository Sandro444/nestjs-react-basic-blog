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

  @Field((type) => Date)
  @Column({ type: 'timestamp', default: new Date(), name: 'created_at' })
  createdAt: Date;

  @Field((type) => Date)
  @Column({ type: 'timestamp', default: new Date(), name: 'new_col' })
  desc: Date;

  @Field(() => User)
  @ManyToOne((type) => User, (user) => user.blogs)
  author: User;
}
