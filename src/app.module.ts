import { Module } from '@nestjs/common'
import { AccountModule } from './core/account/account.module'
import { AuthModule } from './core/authentication/auth.module'
import { InvestmentModule } from './core/investment/investment.module'
import { LoanModule } from './core/loan/loan.module'
import { TransactionModule } from './core/transaction/account.module'
import { UserModule } from './core/user/user.module'

@Module({
  imports: [AuthModule, UserModule, AccountModule, TransactionModule, LoanModule, InvestmentModule]
})
export class AppModule {}
