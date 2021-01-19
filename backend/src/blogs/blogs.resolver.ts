import { Query } from '@nestjs/common';
import { Args, ArgsType, Mutation, Resolver } from '@nestjs/graphql';
import { Blog } from './blog.entity';
import { BlogsService } from './blogs.service';
import { CreateBlogArgs } from './dto/create-blog.dto';

@Resolver()
export class BlogsResolver {
    constructor(private blogsService: BlogsService) {}

    @Mutation(returns => Blog)
    async createBlog(@Args() createBlogArgs: CreateBlogArgs): Promise<Blog> {
        return this.blogsService.createBlog(createBlogArgs)
    }

}
