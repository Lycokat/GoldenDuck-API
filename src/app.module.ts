import { ApolloDriver, type ApolloDriverConfig } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { APP_GUARD } from '@nestjs/core'
import { EventEmitterModule } from '@nestjs/event-emitter'
import { GraphQLModule } from '@nestjs/graphql'
import { ScheduleModule } from '@nestjs/schedule'
import { join } from 'path'
import { AccountModule } from './core/account/account.module'
import { AuthModule } from './core/auth/auth.module'
import { CardModule } from './core/card/card.module'
import { CategoryModule } from './core/category/category.module'
import { ErrorModule } from './core/error/error.module'
import { InvestmentModule } from './core/investment/investment.module'
import { LoanModule } from './core/loan/loan.module'
import { MessageModule } from './core/message/messages.module'
import { NotificationModule } from './core/notification/notification.module'
import { SessionModule } from './core/session/session.module'
import { TransactionModule } from './core/transaction/transactions.module'
import { UserModule } from './core/user/user.module'
import { JwtAuthGuard } from './guard/jwt.guard'

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/graphql/schema.gql'),
      playground: true
    }),
    EventEmitterModule.forRoot(),
    ScheduleModule.forRoot(),
    AuthModule,
    UserModule,
    SessionModule,
    AccountModule,
    CardModule,
    MessageModule,
    NotificationModule,
    TransactionModule,
    LoanModule,
    InvestmentModule,
    CategoryModule,
    ErrorModule
  ],
  providers: [
    {
      provide: APP_GUARD,
      useValue: JwtAuthGuard
    }
  ]
})
export class AppModule {}
