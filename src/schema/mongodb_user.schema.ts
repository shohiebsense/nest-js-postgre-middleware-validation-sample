import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class MongodbUser {
    @Prop({ unique: true, required: true })
    username: string;

    @Prop({ required: true })
    displayName: string;

    @Prop({required: false})
    avatarUrl?: string;
}

export const MongodbUserSchema = SchemaFactory.createForClass(MongodbUser);