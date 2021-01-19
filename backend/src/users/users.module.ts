import { forwardRef, Module } from '@nestjs/common';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Blog } from 'src/blogs/blog.entity';
import { BlogsModule } from 'src/blogs/blogs.module';
@Module({
  imports: [
    forwardRef(() => BlogsModule),
    TypeOrmModule.forFeature([User, Blog]),
  ],
  exports: [TypeOrmModule, UsersService],
  providers: [UsersResolver, UsersService, User],
})
export class UsersModule {}
