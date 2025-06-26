import { Injectable } from '@nestjs/common';
import { CreateLugarDto } from './dto/create-lugar.dto';
import { UpdateLugarDto } from './dto/update-lugar.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LugarService {
  
  constructor(private readonly prisma: PrismaService){}

  async create(createLugarDto: CreateLugarDto) {
   return this.prisma.lugar.create({
    data: {
      nome: createLugarDto.nome,
      tipo: createLugarDto.tipo,
      descricao: createLugarDto.descricao,
      localizacao: createLugarDto.localizacao,
      imagemUrl: createLugarDto.imagemUrl
    }
   });
  }

  async findAll() {
    return this.prisma.lugar.findMany();
  }

  async findOne(id: number) {
  return this.prisma.lugar.findUnique({where:{id}})
  }

  async update(id: number, updateLugarDto: UpdateLugarDto) {
    return this.prisma.lugar.update({
  where: {
    // ... provide filter here
    id
  },
  data: updateLugarDto}) }

  async updatePatch(id: number, updateLugarDto: UpdateLugarDto) {

    

    return this.prisma.lugar.update({
      data:updateLugarDto,where:{id}
    })
  }

  async remove(id: number) {
    return this.prisma.lugar.delete({where:{id}});
  }
}


/** 
 * 
 * 
 *   async update(id: number, updateLugarDto: UpdateLugarDto) {
    return this.prisma.lugar.update({
  where: {
    // ... provide filter here
    id
  },
  data: {
    // ... provide data here
      nome: updateLugarDto.nome,
      tipo: updateLugarDto.tipo,
      descricao: updateLugarDto.descricao,
      localizacao: updateLugarDto.localizacao,
      imagemUrl: updateLugarDto.imagemUrl

  }}) }
*/
