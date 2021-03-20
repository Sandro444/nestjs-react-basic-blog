import { UseGuards } from '@nestjs/common';
import {
  Args,
  ArgsType,
  Mutation,
  Resolver,
  Query,
  Int,
} from '@nestjs/graphql';
import { GqlAuthGuard } from 'src/auth/gql-auth.guard';
import { GraphQLUpload } from 'apollo-server-express';
import { FileUpload } from 'graphql-upload';
import { createWriteStream } from 'fs';
import { File } from './file.entity';
import { FilesService } from './files.service';
@Resolver()
export class FilesResolver {
  constructor(private readonly filesService: FilesService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Int)
  async uploadFile(
    @Args({ name: 'file', type: () => GraphQLUpload })
    { createReadStream, filename }: FileUpload,
  ): Promise<boolean> {
    const promise = new Promise(async (resolve, reject) =>
      createReadStream()
        .pipe(createWriteStream(`./uploads/${filename}`))
        .on('finish', () => resolve(true))
        .on('error', () => reject(false)),
    );

    try {
      await promise;
      return await this.filesService.saveFile(filename);
    } catch (e) {
      console.log(e, 'error');
      return false;
    }
  }
}
