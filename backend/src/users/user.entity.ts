import { Field, ObjectType } from '@nestjs/graphql';
import { Blog } from 'src/blogs/blog.entity';
import { Role } from 'src/roles/role.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToMany,
  ManyToOne,
} from 'typeorm';

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

  @Field((type) => Date)
  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    name: 'created_at',
  })
  createdAt: Date;

  @OneToMany((type) => Blog, (blog) => blog.author)
  blogs?: Blog[];

  @Field((type) => Role)
  @ManyToOne((type) => Role)
  role: Role;
}
