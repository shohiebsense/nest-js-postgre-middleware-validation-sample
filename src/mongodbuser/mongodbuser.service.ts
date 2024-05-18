import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MongodbUser } from 'src/schema/mongodb_user.schema';
import { CreateMongodbUserDto } from './dto/mongodbuser.dto';



@Injectable()
export class MongodbUserService {
    constructor(
        @InjectModel(MongodbUser.name)
        private mongodbUserModel: Model<MongodbUser>
    ) { }

    createUser(createUserDto: CreateMongodbUserDto) {
        const newMongodbUser = new this.mongodbUserModel(createUserDto)
        return newMongodbUser.save()

    }

    getMongodbUsers() {
        return this.mongodbUserModel.find()
    }
    

}
