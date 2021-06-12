import { UseGuards } from '@nestjs/common';
import { Args, ArgsType, Mutation, Resolver, Query } from '@nestjs/graphql';
import { GqlAuthGuard } from 'src/auth/gql-auth.guard';
import { Blog } from './blog.entity';
import { BlogsService } from './blogs.service';
import { CreateBlogArgs } from './dto/create-blog.dto';
import { GetOneBlogArgs } from './dto/get-one-blog.dto';
import { UpdateBlogArgs } from './dto/update-blog.dto';
import { AllBlogsFilter } from './dto/all-blogs.filter';
import { AuthRoles } from 'src/auth/gql-role.guard';
import { RoleTypes } from 'src/roles/role.entity';
@Resolver()
export class BlogsResolver {
  constructor(private blogsService: BlogsService) {}

  @AuthRoles(RoleTypes.Administrator, RoleTypes.Publisher)
  @Mutation((returns) => Blog)
  async createBlog(@Args() createBlogArgs: CreateBlogArgs): Promise<Blog> {
    return this.blogsService.createBlog(createBlogArgs);
  }

  @UseGuards(GqlAuthGuard)
  @Query((returns) => [Blog])
  async allBlogs(@Args() filter?: AllBlogsFilter): Promise<Blog[]> {
    return this.blogsService.allBlogs(filter);
  }

  @AuthRoles(RoleTypes.Administrator, RoleTypes.Publisher)
  @UseGuards(GqlAuthGuard)
  @Mutation((returns) => Blog)
  async updateBlog(@Args() updateBlogArgs: UpdateBlogArgs): Promise<Blog> {
    return this.blogsService.updateBlog(updateBlogArgs);
  }

  // @UseGuards(GqlAuthGuard)
  @Query((returns) => [Blog])
  async getTopBlogs(): Promise<Blog[]> {
    return await this.blogsService.getTopBlogs();
  }

  @UseGuards(GqlAuthGuard)
  @Query((returns) => Blog)
  async getOneBlog(@Args() getOneBlogArgs: GetOneBlogArgs): Promise<Blog> {
    return this.blogsService.getOneBlog(getOneBlogArgs);
  }

  @AuthRoles(RoleTypes.Administrator, RoleTypes.Publisher)
  @UseGuards(GqlAuthGuard)
  @Mutation((returns) => String)
  async deleteBlog(@Args() deleteBlogArgs: GetOneBlogArgs): Promise<string> {
    return this.blogsService.deleteBlog(deleteBlogArgs);
  }
}
