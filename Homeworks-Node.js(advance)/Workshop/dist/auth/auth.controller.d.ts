import { AuthService } from './auth.service';
import { RegisterDTO } from './dtos/register.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(user: RegisterDTO): Promise<{
        message: string;
        id: number;
    }>;
    login(user: RegisterDTO): Promise<{
        message: string;
        accessToken: string;
    }>;
}
