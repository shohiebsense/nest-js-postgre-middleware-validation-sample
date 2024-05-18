import { Body, Controller, Get, Post } from "@nestjs/common";
import { MongodbUserService } from "./mongodbuser.service";
import { CreateMongodbUserDto } from "./dto/mongodbuser.dto";



@Controller('mongodb_user')
export class MongodbUserController {

    constructor(private mongodbUserService: MongodbUserService) { }

    @Post()
    createUser(@Body() createMongodbUserDto: CreateMongodbUserDto) { 
        console.error(createMongodbUserDto)
        return this.mongodbUserService.createUser(createMongodbUserDto)
    }

    @Get('get_all')
    getMongodbUsers() {
        return this.mongodbUserService.getMongodbUsers()
    }

}