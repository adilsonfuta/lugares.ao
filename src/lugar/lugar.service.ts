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
   // return `This action returns a #${id} lugar`;
  }

  async update(id: number, updateLugarDto: UpdateLugarDto) {
    return `This action updates a #${id} lugar`;
  }

  async updatePatch(id: number, updateLugarDto: UpdateLugarDto) {
    return `This action updates a #${id} lugar`;
  }

  async remove(id: number) {
    return this.prisma.lugar.delete({where:{id}});
  }
}
