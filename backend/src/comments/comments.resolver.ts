import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CommentsService } from './comments.service';
import { CreateCommentArgs } from './dto/create-comment.args';
import { Comment } from './comment.entity';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/gql-auth.guard';
import { CurrentUser } from 'src/auth/current-user.decorator';
import { User } from 'src/users/user.entity';

@Resolver()
export class CommentsResolver {
  constructor(private readonly commentservice: CommentsService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation((returns) => Comment)
  async createComment(
    @Args() args: CreateCommentArgs,
    @CurrentUser() user: User,
  ): Promise<Comment> {
    args.record.author = user.id;
    return await this.commentservice.createComment(args);
  }
}
