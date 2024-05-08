import { AuthService } from './auth.service';
import { SignUpDTO } from './dtos/signUp.dto';
import { SignInDTO } from './dtos/signIn.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signUp(signUpDTO: SignUpDTO): Promise<{
        message: string;
    }>;
    signIn(signInDTO: SignInDTO): Promise<{
        message: string;
        token: string;
    }>;
}
