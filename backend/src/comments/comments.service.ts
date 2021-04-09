import { Injectable } from '@nestjs/common';
import { BlogRepository } from 'src/blogs/blog.repository';
import { UserRepository } from 'src/users/user.repository';
import { CommentRepository } from './comment.repository';
import { Comment } from './comment.entity';
import { CreateCommentArgs } from './dto/create-comment.args';

@Injectable()
export class CommentsService {
  constructor(
    private readonly commentRepository: CommentRepository,
    private readonly userRepository: UserRepository,
    private readonly blogRepository: BlogRepository,
  ) {}

  async createComment(args: CreateCommentArgs): Promise<Comment> {
    const { body, author, blog } = args.record;

    const commentAuthor = await this.userRepository.findOne(author);
    const commentBlog = await this.blogRepository.findOne(blog);

    const comment = new Comment();
    comment.blog = commentBlog;
    comment.author = commentAuthor;
    comment.body = body;

    return await this.commentRepository.save(comment);
  }
}
