import { IsEnum, IsOptional, IsString } from "class-validator";
import { tipoLugares } from "generated/prisma";

export class CreateLugarDto {
    @IsString() 
    nome: string;

    @IsEnum(tipoLugares) 
    tipo:tipoLugares;

    @IsString()
    @IsOptional()
    descricao?: string;

    @IsString() 
    localizacao: string;

    @IsString()
    @IsOptional() 
    imagemUrl?: string;

}
