import { Args, Mutation, Resolver, Subscription } from '@nestjs/graphql';
import { CommentsService } from './comments.service';
import { CreateCommentArgs } from './dto/create-comment.args';
import { Comment } from './comment.entity';
import { Req, UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/gql-auth.guard';
import { CurrentUser } from 'src/auth/current-user.decorator';
import { User } from 'src/users/user.entity';
import { PubSub } from 'graphql-subscriptions';

const pubSub = new PubSub();

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
    const comment = await this.commentservice.createComment(args);
    pubSub.publish('commentAdded', { commentAdded: comment });
    return comment;
  }

  @UseGuards(GqlAuthGuard)
  @Subscription((returns) => Comment, {
    filter: (payload, variables, context) => {
      return (
        context.req.user?.username ===
        payload.commentAdded.blog.author?.username
      );
    },
  })
  commentAdded(@Req() req) {
    return pubSub.asyncIterator('commentAdded');
  }
}
