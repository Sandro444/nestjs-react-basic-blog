import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    GraphQLModule.forRoot({
      include: [],
      playground: true,
      autoSchemaFile: 'schema.gql',
    }),
    AuthModule,
    UsersModule,
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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
