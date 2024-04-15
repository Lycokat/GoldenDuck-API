import { EventsMap } from '@/constants/events'
import { SessionErrorsMessages } from '@/messages/error/session'
import { Inject, Injectable, NotFoundException } from '@nestjs/common'
import { EventEmitter2, OnEvent } from '@nestjs/event-emitter'
import { type CreateSessionDTO } from '../dto/create-session'
import { Session } from '../session.entity'
import { type SessionPrimitive } from '../session.primitive'
import { SessionRepository } from '../session.repository'

@Injectable()
export class WriteSessionService {
  constructor (
    @Inject('SessionRepository')
    private readonly sessionRepository: SessionRepository,
    private readonly eventEmitter: EventEmitter2
  ) {}

  /* ---------- create ---------- */ // MARK: create
  @OnEvent(EventsMap.CREATE_SESSION)
  public async create (data: CreateSessionDTO): Promise<Session> {
    const session = Session.create(data)

    this.eventEmitter.emit(EventsMap.SESSION_CREATED, session.toJSON())

    return await this.sessionRepository.create(session)
  }

  /* ---------- delete ---------- */ // MARK: delete
  public async delete ({
    idUser,
    index
  }: {
    idUser: SessionPrimitive['idUser']
    index: number
  }): Promise<void> {
    const session = await this.sessionRepository.findOne({ idUser, index })

    if (session === null) {
      throw new NotFoundException(SessionErrorsMessages.NotFound)
    }

    await this.sessionRepository.delete(session)
  }
}
