import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  smsLoading: string = 'app loading :)!'
  getHello(): string {
    return this.smsLoading;
  }


}



  /**
   * 
   * @returns 
   * getVossoNome():string {
    return "Adilson Futa";
  }

  getIdade(): number{
    return 34;
  }

  getLista(): object{
    return {
       nome: "Adilson Futa",
       idade: 34,
       telefone:{
        tel1: 923001133,
        tel2: 993001122
       }
    }
  }
   * 
   * 
   * 
   */
  