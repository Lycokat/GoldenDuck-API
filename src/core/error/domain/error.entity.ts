import { type ErrorPrimitive } from './error.primitive'

export class Error implements ErrorPrimitive {
  id: ErrorPrimitive['id']
  name: ErrorPrimitive['name']
  message: ErrorPrimitive['message']
  stack: ErrorPrimitive['stack']
  updatedAt: ErrorPrimitive['updatedAt']
  createdAt: ErrorPrimitive['createdAt']
  deleted: ErrorPrimitive['deleted']

  constructor (transaction: ErrorPrimitive) {
    this.id = transaction.id
    this.name = transaction.name
    this.message = transaction.message
    this.stack = transaction.stack
    this.updatedAt = transaction.updatedAt
    this.createdAt = transaction.createdAt
    this.deleted = transaction.deleted
  }

  public static create ({
    name,
    message,
    stack
  }: {
    name: ErrorPrimitive['name']
    message: ErrorPrimitive['message']
    stack: ErrorPrimitive['stack']
  }): Error {
    return new Error({
      id: 0,
      name,
      message,
      stack,
      updatedAt: new Date(),
      createdAt: new Date(),
      deleted: false
    })
  }

  public toJSON (): ErrorPrimitive {
    return {
      id: this.id,
      name: this.name,
      message: this.message,
      stack: this.stack,
      updatedAt: this.updatedAt,
      createdAt: this.createdAt,
      deleted: this.deleted
    }
  }
}
