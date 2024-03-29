import { ID } from '@/valueObjects/number/ID/ID.value'
import {
  type AccountPrimitiveEntity,
  type AccountEntity
} from './account.entity'
import { PastDate } from '@/valueObjects/date/PastDate/PastDate.value'
import { URL } from '@/valueObjects/string/url/url.value'
import { ValidBoolean } from '@/valueObjects/boolean/validBoolean/Boolean.value'
import { ValidBigInt } from '@/valueObjects/number/BigInt/BigInt.value'

const ObjectName = 'Account'

export class Account implements AccountEntity {
  public id: AccountEntity['id']
  public idUser: AccountEntity['idUser']
  public balance: AccountEntity['balance']
  public imgUrl: AccountEntity['imgUrl']
  public updatedAt: AccountEntity['updatedAt']
  public createdAt: AccountEntity['createdAt']
  public deleted: AccountEntity['deleted']

  constructor (account: AccountPrimitiveEntity) {
    this.id = new ID(account.id, `${ObjectName} -> ID`)
    this.idUser = new ID(account.idUser, `${ObjectName} -> IDUser`)
    this.balance = new ValidBigInt(account.balance, `${ObjectName} -> Balance`)
    this.imgUrl =
      account.imgUrl === null || account.imgUrl === undefined
        ? null
        : new URL(account.imgUrl, `${ObjectName} -> ImgUrl`)
    this.updatedAt = new PastDate(
      account.updatedAt,
      `${ObjectName} -> UpdatedAt`
    )
    this.createdAt = new PastDate(
      account.createdAt,
      `${ObjectName} -> CreatedAt`
    )
    this.deleted = new ValidBoolean(account.deleted, `${ObjectName} -> Deleted`)
  }

  public toJSON (): AccountPrimitiveEntity {
    return {
      id: this.id.value,
      idUser: this.idUser.value,
      balance: this.balance.value,
      imgUrl: this.imgUrl?.value,
      updatedAt: this.updatedAt.value,
      createdAt: this.createdAt.value,
      deleted: this.deleted.value
    }
  }
}
