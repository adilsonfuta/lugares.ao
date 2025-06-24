import { Module } from '@nestjs/common';
import { LugarService } from './lugar.service';
import { LugarController } from './lugar.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
//import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports:[PrismaModule],
  controllers: [LugarController],
  providers: [LugarService],
  exports:[],
})
export class LugarModule {}
