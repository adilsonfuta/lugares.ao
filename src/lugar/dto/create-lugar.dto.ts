import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsOptional, IsString } from "class-validator";
import { tipoLugares } from "generated/prisma";

export class CreateLugarDto {
    
    @IsString() 
    @ApiProperty({description: 'nome do lugar',example:'Praia das Marquitas'})
    nome: string;

    @IsEnum(tipoLugares) 
    @ApiProperty({description: 'tipo de lugares', example: 'praia' })
    tipo:tipoLugares;
 
    @IsString()
    @IsOptional()
    @ApiProperty({description: 'descricao do lugar',example:'praia exotica com mar lindo e paisagem'})
    descricao?: string;

    @IsString() 
    @ApiProperty({description: 'localizacao do lugar', example:'Namibe'})
    localizacao: string;

    @IsString()
    @IsOptional() 
    @ApiProperty({description: 'imagem do lugar',example: '/path/imagens/marquitas.png'})
    imagemUrl?: string;

    @IsString()
    @IsOptional()
     @ApiProperty({description:' atualizadar mudancas', example:'2025-06-26 16:17:10.001'})
    updatedAt?:string;

}
