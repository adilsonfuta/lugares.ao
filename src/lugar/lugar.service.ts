import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLugarDto } from './dto/create-lugar.dto';
import { UpdateLugarDto } from './dto/update-lugar.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';

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

  async ExistId(id:number){
    const busca= await this.prisma.lugar.findUnique({where:{id}});
    if(!busca){
       throw new NotFoundException(`O usuario ${id} nao existe`);
       console.log(` status: ${id} fail 🎉`);
    }}

  async update(id: number, updateLugarDto: UpdateLugarDto) {
    await this.ExistId(id);
    return this.prisma.lugar.update({
    where: {id },
    data: updateLugarDto}) 
}

  async updatePatch(id: number, updateLugarDto: UpdateLugarDto) {

    const novoLugar:any = {};
    if(updateLugarDto.nome){ novoLugar.nome=updateLugarDto.nome; }
    if(updateLugarDto.tipo){ novoLugar.tipo=updateLugarDto.tipo; }
    if(updateLugarDto.descricao){ novoLugar.descricao=updateLugarDto.descricao; }
    if(updateLugarDto.localizacao){ novoLugar.localizacao=updateLugarDto.localizacao; }
    if(updateLugarDto.imagemUrl){ novoLugar.imagemUrl=updateLugarDto.imagemUrl; }
    
    await this.ExistId(id);
    return this.prisma.lugar.update({
      data:novoLugar,where:{id}
    })
  }

  async remove(id: number) {
    await this.ExistId(id);
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
