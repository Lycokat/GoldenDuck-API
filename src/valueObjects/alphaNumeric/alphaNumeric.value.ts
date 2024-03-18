import { type PrimitiveAlphaNumeric } from './alphaNumeric.primitive'
import { ValidatedAlphaNumeric } from './alphaNumeric.validation'

export class AlphaNumeric implements PrimitiveAlphaNumeric {
  constructor (readonly alphaNumeric: PrimitiveAlphaNumeric['alphaNumeric']) {
    this.validate(this.alphaNumeric)
  }

  private validate (
    alphaNumeric: PrimitiveAlphaNumeric['alphaNumeric']
  ): PrimitiveAlphaNumeric['alphaNumeric'] {
    return ValidatedAlphaNumeric.parse(alphaNumeric)
  }

  public value (): PrimitiveAlphaNumeric['alphaNumeric'] {
    return this.alphaNumeric
  }
}