import { Controller, Get } from "npm:@nestjs/common@10";

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return "Hello world";
  }
}
