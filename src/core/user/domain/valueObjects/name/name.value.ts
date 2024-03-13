import { type UserPrimitiveEntity } from '../../user.entity'
import { NameValidation } from './name.validation'

export class UserName {
  constructor (private readonly name: UserPrimitiveEntity['name']) {
    this.validate(this.name)
  }

  private validate (name: UserPrimitiveEntity['name']): UserPrimitiveEntity['name'] {
    const validatedName = NameValidation.parse(name)

    return validatedName
  }

  public value (): UserPrimitiveEntity['name'] {
    return this.name
  }
}
