import { ValueObject } from '@/valueObjects/valueObjects.prototipe'
import { type PrimitivePositiveBigInt } from './PositiveBigInt.primitive'
import { PositiveBigIntSchema } from './PositiveBigInt.schema'

export class PositiveBigInt extends ValueObject<
PrimitivePositiveBigInt['bigint']
> {
  constructor (bigint: PrimitivePositiveBigInt['bigint'], name?: string) {
    super(bigint, PositiveBigIntSchema(name ?? 'PositiveBigInt'))
  }
}
