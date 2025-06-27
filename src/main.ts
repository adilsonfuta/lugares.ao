import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function main() {
  // # config app inicial
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();

// # config app swagger docs api
const config = new DocumentBuilder()
.setTitle('Api de Lugares')
.setDescription('Api com documentacao estilo open api')
.setVersion('1.0')
.build();

const document = SwaggerModule.createDocument(app,config);
SwaggerModule.setup('api',app,document);

  await app.listen(process.env.APP_PORT ?? 3000);
  console.log(`${new AppService().smsLoading} Port ${process.env.APP_PORT}`);
}
main();
