import { Module } from '@nestjs/common'
import { AuthModule } from './core/authentication/auth.module'
import { UserModule } from './core/user/user.module'

@Module({
  imports: [UserModule, AuthModule]
})
export class AppModule {}