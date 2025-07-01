//import { PartialType } from '@nestjs/mapped-types';
import { CreateLugarDto } from './create-lugar.dto';
import { ApiProperty } from '@nestjs/swagger';
import { PartialType } from '@nestjs/swagger';

export class UpdateLugarDto extends PartialType(CreateLugarDto) {
    
    @ApiProperty({
    description: 'Status do lugar',
    example: 'ativo',
    required: false,
  })
  status?: string;

}
