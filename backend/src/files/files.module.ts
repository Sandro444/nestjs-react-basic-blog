import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilesResolver } from './files.resolver';
import { FileRepository } from './file.repository';
import { File } from './file.entity';
import { FilesService } from './files.service';
@Module({
  imports: [TypeOrmModule.forFeature([FileRepository, File])],
  providers: [FilesResolver, FilesService],
})
export class FilesModule {}
