import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { TestDto } from './test.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  getHello(@Body()test: TestDto): string {
    return this.appService.getHello();
  }
}
