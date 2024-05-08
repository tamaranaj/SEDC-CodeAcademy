import { Controller, Get, UseGuards } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminGuard } from 'src/admin/admin.guard';
import { ApiBearerAuth } from '@nestjs/swagger';


@UseGuards(AdminGuard)
@ApiBearerAuth()
@Controller('admin')
export class AdminController {

    constructor(private readonly adminService: AdminService){ }

    @Get('getUsers')
    async getAllUsers(){
        return await this.adminService.getUsers()
    }


    @Get('getAdmins')
    async getAllAdmins(){
        return await this.adminService.getAdmins()
    }

    @Get('getBudgets')
    async getBudgets(){
        return await this.adminService.getBudgets()
    }

    @Get('logs')
    async getLogs(){
        const log = await this.adminService.getLogs()
        return log
    }

}
