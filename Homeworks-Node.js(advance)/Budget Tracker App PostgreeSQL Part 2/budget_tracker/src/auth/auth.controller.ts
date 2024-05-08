import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDTO } from './dtos/signUp.dto';
import { SignInDTO } from './dtos/signIn.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService:AuthService){ }

    @Post('register')
    async signUp(@Body() signUpDTO: SignUpDTO){
        const user = await this.authService.registerUser(signUpDTO)
        return user
    }

    @Post('login')
    async signIn(@Body() signInDTO: SignInDTO){
        const accessToken = await this.authService.login(signInDTO)
        return {message: `Login success`, token: accessToken}
    }

    
}
