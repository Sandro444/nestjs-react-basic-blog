import { Module } from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { BlogsResolver } from './blogs.resolver';

@Module({
  providers: [BlogsService, BlogsResolver]
})
export class BlogsModule {}
