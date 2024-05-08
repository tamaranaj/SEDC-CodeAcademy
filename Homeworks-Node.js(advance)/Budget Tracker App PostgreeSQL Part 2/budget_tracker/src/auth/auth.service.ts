import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { SignUpDTO } from './dtos/signUp.dto';
import { compare, hash } from 'bcryptjs'
import { SignInDTO } from './dtos/signIn.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { LogORMEntity } from './log.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {

    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
        @InjectRepository(LogORMEntity) private logService: Repository<LogORMEntity>
    ){}


    async registerUser( user: SignUpDTO){
        
        const foundUser = await this.usersService.findUserByEmail(user.email)
        const foundAdmin = await this.usersService.findAdminByEmail(user.email)
        
        if(foundUser || foundAdmin){
            throw new BadRequestException(`User with email: ${user.email} already exist.`)
        }
        
        const hashedPass = await hash(user.password, 10)
        user.password = hashedPass
        const createdUser = await this.usersService.createUser(user)
        return createdUser
    }

    async login(user: SignInDTO){
        const{email, password} = user
        const foundUser = await this.usersService.findUserByEmail(email)
        const foundAdmin = await this.usersService.findAdminByEmail(email)
        if(!foundUser && !foundAdmin){
            throw new NotFoundException(`User with ${email} does not exist.`)
        }
        if(foundUser){
            const isPassValid = await compare(password, foundUser.password)
            if(!isPassValid){
                throw new UnauthorizedException('Invalid password.')
            }
            const token = await this.jwtService.signAsync({userID: foundUser.id, email: foundUser.email})
            await this.logger(email)
            return token
        }

        if(foundAdmin){
            const isPassValid = await compare(password, foundAdmin.password)
            if(!isPassValid){
                throw new UnauthorizedException('Invalid password.')
            }
            const token = await this.jwtService.signAsync({role: foundAdmin.role, email: foundAdmin.email})
            await this.logger(email)
            return token
        }
        
        
        
    }

    async logger(email:string){
        const loggedInUser = this.logService.create({userEmail: email})
        await this.logService.save(loggedInUser)
    }
}
