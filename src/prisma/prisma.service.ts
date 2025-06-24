import { INestApplication, Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit,OnModuleDestroy{

   async onModuleInit() {
      await this.$connect();
   }

   async onModuleDestroy() {
      await this.$disconnect();
   }
}

   /**
    * @param app 
    * async enableHook(app: INestApplication){
         process.on('beforeExit', async () => {
         await app.close();
    })
   }
    */