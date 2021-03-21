import { BadRequestException, Injectable } from '@nestjs/common';

import { FileRepository } from './file.repository';
import { File } from './file.entity';
import { BlogRepository } from 'src/blogs/blog.repository';
import * as dotenv from 'dotenv';
dotenv.config();
@Injectable()
export class FilesService {
  constructor(
    private readonly fileRepository: FileRepository,
    private readonly blogRepository: BlogRepository,
  ) {}

  async saveFile(filename: string): Promise<any> {
    const file = new File();
    file.name = filename;
    file.url = process.env.BACKEND_URL.concat(`/files/getfile/${filename}`);
    const savedFile = await this.fileRepository.save(file);
    return savedFile.id;
  }
}
