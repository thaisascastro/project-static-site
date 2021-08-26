import { Injectable } from '@nestjs/common';
import { FormRockInRioDto } from './dtos/form-rock-in-rio.dto';

@Injectable()
export class AppService {
  async formRockInRio(data: FormRockInRioDto): Promise<void> {
    // Aqui vai persistir dado no banco de dados...
    console.log(data);
  }
}
