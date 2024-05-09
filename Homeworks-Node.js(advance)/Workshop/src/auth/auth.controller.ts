import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDTO } from './dtos/register.dto';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService){ }

    @Post('register')
    async register(@Body() user: RegisterDTO ){
        return await this.authService.register(user)        
    }

    @Post('login')
    async login(@Body() user: RegisterDTO){
        return await this.authService.login(user)
    }
}
