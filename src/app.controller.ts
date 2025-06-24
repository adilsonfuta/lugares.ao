import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }


  


}


/**
 * 
 * @Get('Nome')
  getVossoNomeController(): string {
    return this.appService.getVossoNome();
  }

  @Get('Idade')
  getidadeController(): number {
    return this.appService.getIdade();
  }
  
  @Get('Lista')
  getListaController(): object{
    return this.appService.getLista();
  }
 */