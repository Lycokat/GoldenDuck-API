import { type Request, type Response } from 'express'
import { type AuthUseCase } from '../../application/authUseCase'
import { Password } from '@/valueObjects/password/password.value'
import { DNI } from '@/valueObjects/dni/dni.value'

export class AuthController {
  constructor (private readonly authUseCase: AuthUseCase) {}

  public login = async (
    request: Request,
    response: Response
  ): Promise<Response> => {
    const { dni, password } = request.body

    const token = await this.authUseCase.login({
      dni: new DNI(Number(dni)),
      password: new Password(String(password))
    })

    return response.status(200).header('Authorization', token.key).send()
  }

  public checkAuthentication = async (
    request: Request,
    response: Response
  ): Promise<Response> => {
    const token = request.headers.authorization

    const isAuthorized = await this.authUseCase.checkAuthentication(String(token))

    return response.status(200).send({ authorized: isAuthorized })
  }
}
