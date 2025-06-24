import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LugarModule } from './lugar/lugar.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [LugarModule, PrismaModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
  exports:[AppService]
})
export class AppModule {}
