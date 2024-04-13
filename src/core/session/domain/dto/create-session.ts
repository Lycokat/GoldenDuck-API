import { IntersectionType, PartialType, PickType } from '@nestjs/swagger'
import { SessionDTO } from '../session.dto'

export class CreateSessionDTO extends IntersectionType(
  PickType(SessionDTO, ['idUser', 'token']),
  PartialType(PickType(SessionDTO, ['ip', 'userAgent', 'location', 'deviceType']))
) {}
