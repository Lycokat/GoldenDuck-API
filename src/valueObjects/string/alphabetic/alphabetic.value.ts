import { ValueObject } from '@/valueObjects/valueObjects.prototipe'
import { type PrimitiveAlphabetic } from './alphabetic.primitive'
import { AlphabeticSchema } from './alphabetic.schema'

export class Alphabetic extends ValueObject<PrimitiveAlphabetic['alphabetic']> {
  constructor (alphabetic: PrimitiveAlphabetic['alphabetic'], name?: string) {
    super(alphabetic, AlphabeticSchema(name ?? 'Alphabetic'))
  }
}
