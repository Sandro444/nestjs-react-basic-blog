import { UseGuards } from '@nestjs/common';
import { Args, ArgsType, Mutation, Resolver, Query } from '@nestjs/graphql';
import { GqlAuthGuard } from 'src/auth/gql-auth.guard';
import { Blog } from './blog.entity';
import { BlogsService } from './blogs.service';
import { CreateBlogArgs } from './dto/create-blog.dto';
import { FindOneBlogArgs } from './dto/finde-one-blog.dto';
import { UpdateBlogArgs } from './dto/update-blog.dto';
import { AllBlogsFilter } from './dto/all-blogs.filter';
@Resolver()
export class BlogsResolver {
  constructor(private blogsService: BlogsService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation((returns) => Blog)
  async createBlog(@Args() createBlogArgs: CreateBlogArgs): Promise<Blog> {
    return this.blogsService.createBlog(createBlogArgs);
  }

  @UseGuards(GqlAuthGuard)
  @Query((returns) => [Blog])
  async allBlogs(@Args() filter?: AllBlogsFilter): Promise<Blog[]> {
    return this.blogsService.allBlogs(filter);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation((returns) => Blog)
  async updateBlog(@Args() updateBlogArgs: UpdateBlogArgs): Promise<Blog> {
    return this.blogsService.updateBlog(updateBlogArgs);
  }

  @UseGuards(GqlAuthGuard)
  @Query((returns) => Blog)
  async findOneBlog(@Args() findOneBlogArgs: FindOneBlogArgs): Promise<Blog> {
    return this.blogsService.findOneBlog(findOneBlogArgs);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation((returns) => String)
  async deleteBlog(@Args() deleteBlogArgs: FindOneBlogArgs): Promise<string> {
    return this.blogsService.deleteBlog(deleteBlogArgs);
  }
}
