import { type PrimitivePastDate } from './pastDate.primitive'
import { ValidatedPastDate } from './pastDate.validation'

export class PastDate implements PrimitivePastDate {
  constructor (readonly pastDate: PrimitivePastDate['pastDate']) {
    this.validate(this.pastDate)
  }

  private validate (
    pastDate: PrimitivePastDate['pastDate']
  ): PrimitivePastDate['pastDate'] {
    return ValidatedPastDate.parse(pastDate)
  }

  public value (): PrimitivePastDate['pastDate'] {
    return this.pastDate
  }
}