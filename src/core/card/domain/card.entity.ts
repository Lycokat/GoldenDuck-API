import { type Balance } from '@/valueObjects/balance/balance.value'
import { type ValidDate } from '@/valueObjects/date/validDate.value'
import { type ID } from '@/valueObjects/id/id.value'

export interface CardEntity {
  id: ID
  idAccount: ID
  number: ID
  cvv: Balance
  expiration: ValidDate
  date: ValidDate
  updatedDate: ValidDate
  deleted: boolean
}