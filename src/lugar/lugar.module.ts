import { Module } from '@nestjs/common';
import { LugarService } from './lugar.service';
import { LugarController } from './lugar.controller';

@Module({
  controllers: [LugarController],
  providers: [LugarService],
})
export class LugarModule {}
