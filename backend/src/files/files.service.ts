import { BadRequestException, Injectable } from '@nestjs/common';

import { FileRepository } from './file.repository';
import { File } from './file.entity';
@Injectable()
export class FilesService {
  constructor(private readonly fileRepository: FileRepository) {}

  async saveFile(filename): Promise<any> {
    const file = new File();
    file.name = filename.split('.')[0];
    file.url = process.env.BACKEND_URL.concat(`/uploads/${filename}`);

    const savedFile = await this.fileRepository.save(file);
    console.log(savedFile);
    return true;
  }
}
