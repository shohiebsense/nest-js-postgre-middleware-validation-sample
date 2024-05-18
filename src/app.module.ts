import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { ConfigModule } from '@nestjs/config';
import { User } from './entities/user.entity';
import { HttpLoggerMiddleware } from './http-logger.middleware';
import { MongooseModule } from '@nestjs/mongoose';
import { MongodbUserModule } from './mongodbuser/mongodbuser.module';
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(
      {
        type: 'postgres',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT, 10),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        entities: [User],
       // synchronize: true, orm generate table
        synchronize: false,
      }
    ),
    TypeOrmModule.forFeature([User]),
    MongooseModule.forRoot(
      'mongodb://127.0.0.1/nestjs_sample'
    ),
    MongodbUserModule
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(HttpLoggerMiddleware)
      .forRoutes("*")
  }
}
