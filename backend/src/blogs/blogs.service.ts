import { Injectable } from '@nestjs/common';
import { Blog } from './blog.entity';
import { BlogRepository } from './blog.repository';
import { CreateBlogArgs } from './dto/create-blog.dto';

@Injectable()
export class BlogsService {
  constructor(private readonly blogRepository: BlogRepository) {}

  async createBlog(createBlogArgs: CreateBlogArgs): Promise<Blog> {
    const blog: any = {
      title: createBlogArgs.record.title,
      author: createBlogArgs.record.author,
      content: createBlogArgs.record.content,
    };
    const createdBlog = await this.blogRepository.save(blog);

    const returnBlogType = await this.blogRepository.findOne(createdBlog.id, {
        relations: ['author']
    })

    return returnBlogType;
  }
}
