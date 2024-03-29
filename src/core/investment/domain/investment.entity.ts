import {
  type AccountEntity,
  type AccountPrimitiveEntity
} from '@/core/account/domain/account.entity'
import { type PrimitiveValidBoolean } from '@/valueObjects/boolean/validBoolean/Boolean.primitive'
import { type ValidBoolean } from '@/valueObjects/boolean/validBoolean/Boolean.value'
import { type PrimitivePastDate } from '@/valueObjects/date/PastDate/PastDate.primitive'
import { type PastDate } from '@/valueObjects/date/PastDate/PastDate.value'
import { type PrimitiveValidDate } from '@/valueObjects/date/ValidDate/ValidDate.primitive'
import { type ValidDate } from '@/valueObjects/date/ValidDate/ValidDate.value'
import { type PrimitiveFloat } from '@/valueObjects/number/Float/Float.primitive'
import { type Float } from '@/valueObjects/number/Float/Float.value'
import { type PrimitiveID } from '@/valueObjects/number/ID/ID.primitive'
import { type ID } from '@/valueObjects/number/ID/ID.value'

export interface InvestmentEntity {
  id: ID
  idAccount: AccountEntity['id']
  amount: AccountEntity['balance']
  interest: Float
  createdAt: PastDate
  dateEnd: ValidDate
  canceled: ValidBoolean
}

export interface InvestmentPrimitiveEntity {
  id: PrimitiveID['id']
  idAccount: AccountPrimitiveEntity['id']
  amount: AccountPrimitiveEntity['balance']
  interest: PrimitiveFloat['float']
  createdAt: PrimitivePastDate['pastDate']
  dateEnd: PrimitiveValidDate['validDate']
  canceled: PrimitiveValidBoolean['boolean']
}
