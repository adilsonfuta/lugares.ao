import { IsOptional, IsString } from "class-validator";

export class CreateLugarDto {
    @IsString() 
    nome: string;

    @IsString() 
    tipo:string;

    @IsString()
    @IsOptional()
    descricao?: string;

    @IsString() 
    localizacao: string;

    @IsString()
    @IsOptional() 
    imagemUrl?: string;

}
