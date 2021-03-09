import { Field, ObjectType } from '@nestjs/graphql';
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
import { File } from '../files/file.entity';
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
  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    name: 'created_at',
  })
  createdAt: Date;

  @Field(() => User)
  @ManyToOne((type) => User, (user) => user.blogs)
  author: User;

  @Field((type) => File, { nullable: true })
  @OneToOne((type) => File)
  @JoinColumn({ name: 'image' })
  file: File;
}
