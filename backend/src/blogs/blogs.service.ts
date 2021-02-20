import { BadRequestException, Injectable } from '@nestjs/common';
import { UserRepository } from 'src/users/user.repository';
import { Blog } from './blog.entity';
import { BlogRepository } from './blog.repository';
import { CreateBlogArgs } from './dto/create-blog.dto';
import { GetOneBlogArgs } from './dto/get-one-blog.dto';
import { UpdateBlogArgs, UpdateBlogRecord } from './dto/update-blog.dto';
import { AllBlogsFilter } from './dto/all-blogs.filter';
import { FindManyOptions } from 'typeorm';

@Injectable()
export class BlogsService {
  constructor(
    private readonly blogRepository: BlogRepository,
    private readonly usersRepository: UserRepository,
  ) {}

  async createBlog(createBlogArgs: CreateBlogArgs): Promise<Blog> {
    const blog: any = {
      title: createBlogArgs.record.title,
      author: createBlogArgs.record.author,
      content: createBlogArgs.record.content,
    };
    const createdBlog = await this.blogRepository.save(blog);

    const returnBlogType = await this.blogRepository.findOne(createdBlog.id, {
      relations: ['author'],
    });

    return returnBlogType;
  }

  async allBlogs(filter?: AllBlogsFilter): Promise<Blog[]> {
    const props: Partial<FindManyOptions<Blog>> = {
      relations: ['author'],
    };
    if (filter?.filter?.createdAtSort) {
      props.order = { createdAt: filter?.filter?.createdAtSort };
    }
    if (filter?.filter?.take) {
      props.take = filter?.filter?.take;
    }
    if (filter?.filter?.skip) {
      props.skip = filter?.filter?.skip;
    }
    return await this.blogRepository.find(props);
  }

  async getOneBlog(getOneBlogArgs: GetOneBlogArgs): Promise<Blog> {
    return await this.blogRepository.findOne(getOneBlogArgs.record.id, {
      relations: ['author'],
    });
  }

  async updateBlog(updateBlogArgs: UpdateBlogArgs): Promise<Blog> {
    const { id, author, ...args }: any = updateBlogArgs.record;
    const blogAuthor = author && (await this.usersRepository.findOne(author));
    if (blogAuthor) {
      args.author = blogAuthor;
    }
    await this.blogRepository.update(id, {
      ...args,
    });
    return await this.blogRepository.findOne(id, {
      relations: ['author'],
    });
  }

  async deleteBlog(deleteBlogArgs: GetOneBlogArgs): Promise<string> {
    try {
      await this.blogRepository.delete(deleteBlogArgs.record.id);
      return 'success';
    } catch (err) {
      throw new BadRequestException({
        message: 'Error while deleting blog',
      });
    }
  }
}
