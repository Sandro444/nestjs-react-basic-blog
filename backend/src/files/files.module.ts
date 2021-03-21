import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilesResolver } from './files.resolver';
import { FileRepository } from './file.repository';
import { File } from './file.entity';
import { FilesService } from './files.service';
import { BlogRepository } from 'src/blogs/blog.repository';
import { FilesController } from './files.controller';
@Module({
  imports: [TypeOrmModule.forFeature([FileRepository, File, BlogRepository])],
  providers: [FilesResolver, FilesService, FilesController],
  exports: [FilesController, FilesService],
})
export class FilesModule {}
