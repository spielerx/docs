import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  private cats: string[] = [];

  @Get()
  getCats(): string[] {
    return this.cats;
  }

  @Post()
  createCat(@Body() cat: string): string[] {
    this.cats.push(cat);
    return this.cats;
  }
}
