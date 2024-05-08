import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Budget } from './budget.entity';
import { Repository } from 'typeorm';
import { BudgetCreateDTO } from './dtos/create.dto';
import { BudgetUpdateDTO } from './dtos/update.dto';
import { Expense } from 'src/expenses/expense.entity';
import { Income } from 'src/incomes/income.entity';
import { UsersService } from 'src/users/users.service';
import { BudgetProps } from './budget.props';

@Injectable()
export class BudgetService {

    constructor(@InjectRepository(Budget) private budgetRepository: Repository<Budget>, 
    @InjectRepository(Expense) private expenseRepo: Repository<Expense>, 
    @InjectRepository(Income) private incomeRepo: Repository<Income>,
    private usersService: UsersService){ }

    async getBudget(userID: number){
        const budget =  await this.budgetRepository.findOne({where: {user: {id: userID}}, relations: ["expenses", "incomes", "user"]})
        console.log("first", budget)
        if(!budget){
            throw new NotFoundException('Must create a budget first.')
        }
        return budget
    }

    async findBudget(id: string){
        const budget = await this.budgetRepository.findOne({where: {id: id}, relations: ["expenses","incomes", "user"]})
        if(!budget) {
            throw new HttpException(`Budget with id: ${id} not found`, 404)
        }
        return budget
        
    }

    async createBudget(budget: BudgetCreateDTO, user: number){
        const foundUser = await this.usersService.findUserByID(user)
        if(foundUser.budget){
            return {message: `User ${foundUser.firstName} ${foundUser.lastName} already has budget.`}
        }
        const budgetCreation = new BudgetProps(budget.currency, foundUser, budget.balance)
        const newBudget = this.budgetRepository.create(budgetCreation)
        return await this.budgetRepository.save(newBudget)
    }

    async updateBudget(update: BudgetUpdateDTO, userID : number){
        const budget = await this.getBudget(userID)
        const updateBudget = this.budgetRepository.merge(budget, update)
        return await this.budgetRepository.save(updateBudget)
    }

    async deleteBudget(userID: number){
        const budget = await this.getBudget(userID)     
        await this.expenseRepo.delete({budgetID: budget.id})
        await this.incomeRepo.delete({budgetID: budget.id})
        await this.usersService.deleteBudget(userID)
        await this.budgetRepository.delete(budget.id)   
        return {message: `Budget with id ${budget} is successfully deleted.`,deletedBudget: budget}
    }
}
