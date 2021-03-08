import { Field, ObjectType } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class File {
  @PrimaryGeneratedColumn()
  @Field()
  id?: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  url: string;

  @Field((type) => Date)
  @Column({
    type: 'timestamp',
    default: 'CURRENT_TIMESTAMP',
    name: 'created_at',
  })
  createdAt: Date;
}
