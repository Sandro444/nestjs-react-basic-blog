import { Controller, Get, Param, Query, Req, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  login(@Query() params:any): any {
    return this.authService.login(params);
  }

  @UseGuards(JwtAuthGuard)
  @Get('protected')
  returnUser(@Request() req:any):any{
    return req.user
  }
}
