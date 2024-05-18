import { IsAlphanumeric, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateMongodbUserDto {
    @IsNotEmpty()
    @IsString()
    username: string;

    @IsString()
    @IsOptional()
    displayName?: string;
}