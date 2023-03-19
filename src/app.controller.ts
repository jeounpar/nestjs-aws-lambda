import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getTest(): string {
    return this.appService.getTest();
  }

  @Post()
  postTest(): string {
    return this.appService.postTest();
  }

  @Delete()
  deleteTest(): string {
    return this.appService.deleteTest();
  }

  @Put()
  putTest(): string {
    return this.appService.putTest();
  }

  @Patch()
  patchTest(): string {
    return this.appService.patchTest();
  }
}
