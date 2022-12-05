import { Controller, Get, Post, UseGuards, Request, Body } from '@nestjs/common';
import { ApiResponse, ApiBody } from '@nestjs/swagger';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { LoginDto } from './auth/dto/login.dto';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard'


@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private authService: AuthService) {}
  
  //@UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Body() createClientDto: LoginDto) {
    return this.authService.login(createClientDto);
  }

  @Get('healthcheck')
  healthCheck(): string {
    return "success";
  }
}
