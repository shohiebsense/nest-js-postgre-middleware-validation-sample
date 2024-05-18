import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { MongodbUser, MongodbUserSchema } from "src/schema/mongodb_user.schema";
import { MongodbUserService } from "./mongodbuser.service";
import { MongodbUserController } from "./mongodbuser.controller";




@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: MongodbUser.name,
                schema: MongodbUserSchema,
            }
     ])
    ],
    providers: [MongodbUserService],
    controllers: [MongodbUserController],
})
export class MongodbUserModule { }