import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsResolver } from './comments.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogRepository } from 'src/blogs/blog.repository';
import { UserRepository } from 'src/users/user.repository';
import { CommentRepository } from './comment.repository';
@Module({
  imports: [
    TypeOrmModule.forFeature([
      BlogRepository,
      UserRepository,
      CommentRepository,
    ]),
  ],
  providers: [CommentsService, CommentsResolver],
  exports: [CommentsResolver],
})
export class CommentsModule {}
