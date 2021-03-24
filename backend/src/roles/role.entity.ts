import { Field, ObjectType } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

export enum RoleTypes {
  User = 'user',
  Publisher = 'publisher',
  Administrator = 'administrator',
}

@ObjectType()
@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  @Field()
  id?: number;

  @Field()
  @Column({ type: 'enum', enum: RoleTypes })
  name: RoleTypes;
}
