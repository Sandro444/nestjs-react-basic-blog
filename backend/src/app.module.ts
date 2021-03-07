import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogsModule } from './blogs/blogs.module';
import { FilesModule } from './files/files.module';
@Module({
  imports: [
    GraphQLModule.forRoot({
      include: [AuthModule, UsersModule, BlogsModule, FilesModule],
      playground: true,
      autoSchemaFile: 'schema.gql',
      uploads: {
        maxFileSize: 30000000,
        maxFiles: 6,
      },
    }),
    AuthModule,
    UsersModule,
    BlogsModule,
    TypeOrmModule.forRoot({
      name: 'default',
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'blog-example-db',
      synchronize: true,
      entities: ['dist/**/*.entity{.ts,.js}'],
      subscribers: ['src/**.module/*-subscriber.ts'],
      migrations: ['src/migrations/*.ts'],

      migrationsTableName: 'migration',

      cli: {
        migrationsDir: 'src/migration',
      },
    }),
    FilesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
