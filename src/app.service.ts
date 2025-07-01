import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  smsLoading: string = ' Running successful 🎉'

  getHello(): string {
    return this.smsLoading;
  }
}
