import { IsString, IsInt } from 'class-validator';

export class AddDocumentDto {
    @IsString()
    readonly name: string;

    @IsString()
    readonly author: string;
}
