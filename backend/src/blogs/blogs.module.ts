import { forwardRef, Module } from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { BlogsResolver } from './blogs.resolver';
import { Blog } from './blog.entity';
import { UsersModule } from 'src/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';
@Module({
  imports: [forwardRef(()=>UsersModule), TypeOrmModule.forFeature([User, Blog])],
  providers: [BlogsService, BlogsResolver, Blog],
  exports: [BlogsService, Blog],
})
export class BlogsModule {}
