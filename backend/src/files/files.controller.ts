import {
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FilesService } from './files.service';
import { Express } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';
import { editFileName } from './files.utils';
import { diskStorage } from 'multer';
@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Get('hello')
  getHello(): string {
    return 'hello';
    //return this.filesService.getHello();
  }
  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: editFileName,
      }),
    }),
  )
  async uploadedFile(@UploadedFile() file) {
    const response = {
      originalname: file.originalname,
      filename: file.filename,
      fileId: null,
    };
    const fileId = await this.filesService.saveFile(file.filename);
    response.fileId = fileId;
    return {
      status: HttpStatus.OK,
      message: 'Image uploaded successfully!',
      data: response,
    };
  }
  @Get('getfile/:imgpath')
  seeUploadedFile(@Param('imgpath') image, @Res() res) {
    return res.sendFile(image, { root: './uploads' });
  }
}
