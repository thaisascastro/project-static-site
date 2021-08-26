import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { FormRockInRioDto } from './dtos/form-rock-in-rio.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  formRockInRio(@Body() data: FormRockInRioDto) {
    return this.appService.formRockInRio(data);
  }
}
