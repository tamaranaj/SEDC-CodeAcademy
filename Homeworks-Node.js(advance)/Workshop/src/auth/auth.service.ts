import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersORMEntity } from './user.entity';
import { Repository } from 'typeorm';
import { RegisterDTO } from './dtos/register.dto';
import { compare, hash } from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(@InjectRepository(UsersORMEntity) private userRepo:Repository<UsersORMEntity>,
    private jwtService: JwtService,){ }

    async register( user: RegisterDTO){

        const checkEmail = await this.userRepo.findOne({where: {email: user.email}})
        if(checkEmail){
            throw new HttpException(`User with email ${user.email} already exist`, 403)
        }

        const hashedPass = await hash(user.password, 8)

        user.password = hashedPass

        const newUser = this.userRepo.create(user)

        await this.userRepo.save(newUser)
        return {message: 'Acc is created' ,id: newUser.id}
    }


    async login( user: RegisterDTO){

        const foundUser = await this.userRepo.findOne({where: {email: user.email}})

        if(!foundUser){
            throw new NotFoundException(`User with email ${user.email} not found.`)
        }

        const checkPass = await compare(user.password, foundUser.password)

        if(!checkPass){

        }

        const token = await this.jwtService.signAsync({email: foundUser.email})

        return {message: `Login success`, accessToken: token}
    }
}
