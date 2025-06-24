import { Injectable } from '@nestjs/common';
import { CreateLugarDto } from './dto/create-lugar.dto';
import { UpdateLugarDto } from './dto/update-lugar.dto';

@Injectable()
export class LugarService {
  create(createLugarDto: CreateLugarDto) {
    return 'This action adds a new lugar';
  }

  findAll() {
    return `This action returns all lugar`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lugar`;
  }

  update(id: number, updateLugarDto: UpdateLugarDto) {
    return `This action updates a #${id} lugar`;
  }

  remove(id: number) {
    return `This action removes a #${id} lugar`;
  }
}
