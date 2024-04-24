import { env } from '@/constants/env'
import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { UserModule } from '../user/user.module'
import { AuthService } from './domain/service/auth.service'
import { JwtStrategy } from './domain/service/jwt.strategy'
import { LocalStrategy } from './domain/service/local.strategy'
import { AuthController } from './entry-points/auth.controller'
import { AuthResolver } from './entry-points/auth.resolver'
import { SessionModule } from '../session/session.module'

@Module({
  imports: [
    UserModule,
    SessionModule,
    PassportModule,
    JwtModule.register({
      secret: env.JWT_SECRET,
      signOptions: {
        expiresIn: env.JWT_EXPIRATION_TIME
      }
    })
  ],
  controllers: [AuthController],
  providers: [AuthResolver, AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService, JwtModule]
})
export class AuthModule {}
