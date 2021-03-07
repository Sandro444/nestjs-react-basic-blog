import { Module } from '@nestjs/common';
import { FilesResolver } from './files.resolver';
@Module({ providers: [FilesResolver] })
export class FilesModule {}
