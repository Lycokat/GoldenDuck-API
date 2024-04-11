import { type JwtPayload } from '@/core/authentication/domain/payload.entity'
import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Request
} from '@nestjs/common'
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger'
import { CreateTransactionDTO } from '../domain/dto/create-transaction'
import { TransactionService } from '../domain/service/transaction.service'
import { type Transaction } from '../domain/transaction.entity'
import { type TransactionPrimitive } from '../domain/transaction.primitive'
import { TransactionResponse } from './transaction.response'

@ApiResponse({
  type: TransactionResponse
})
@ApiTags('Transaction')
@ApiBearerAuth()
@Controller('transaction')
export class TransactionController {
  constructor (private readonly transactionService: TransactionService) {}

  @Get()
  async getAllTransaction (@Body() id: TransactionPrimitive['id']): Promise<Transaction[]> {
    const transactions = await this.transactionService.findAll(id)

    if (transactions === null) {
      return []
    }

    return transactions
  }

  @Post()
  async createAccount (
    @Request() UserData: { user: JwtPayload },
      @Body() data: CreateTransactionDTO): Promise<Transaction> {
    const transaction = await this.transactionService.create(UserData.user.id, data)

    return transaction
  }

  @Get('/:id')
  async getTransaction (
    @Param('id', new ParseIntPipe()) id: TransactionPrimitive['id']
  ): Promise<Transaction> {
    const transaction = await this.transactionService.findOne(id)

    if (transaction === null) {
      throw new NotFoundException()
    }

    return transaction
  }

  @Delete('/:id')
  async deleteTransaction (
    @Param('id', new ParseIntPipe()) id: TransactionPrimitive['id']
  ): Promise<void> {
    await this.transactionService.delete(id)
  }
}
