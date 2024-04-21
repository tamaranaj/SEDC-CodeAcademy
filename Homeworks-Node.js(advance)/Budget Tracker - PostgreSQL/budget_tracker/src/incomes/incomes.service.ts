import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Income } from './income.entity';
import { Repository } from 'typeorm';
import { IncomeCreateDTO } from './dtos/income.create.dto';
import { IncomeUpdateDTO } from './dtos/income.update.dto';

@Injectable()
export class IncomesService {

    constructor(@InjectRepository(Income) private incomeRepository: Repository<Income>){ }

    async getIncomes(): Promise<Income[]>{
        return this.incomeRepository.find({relations: ["budget"]})

    }

    async findIncome(id:string):Promise<Income>{
        return this.incomeRepository.findOne({where: {id : id}, relations: ["budget"]})
    }

    async createIncome(income: IncomeCreateDTO):Promise<Income>{

        const newIncome = this.incomeRepository.create(income)
        return this.incomeRepository.save(newIncome)
    }

    async updateIncome(id: string, update: IncomeUpdateDTO): Promise<Income>{
        const income = await this.findIncome(id)
        const updateInc = this.incomeRepository.merge(income, update)

        return this.incomeRepository.save(updateInc)
    }
}
