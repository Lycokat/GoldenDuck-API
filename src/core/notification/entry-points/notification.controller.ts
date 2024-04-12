import { type JwtPayload } from '@/core/authentication/domain/payload.entity'
import { NotificationErrorsMessages } from '@/messages/error/notification'
import {
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Request
} from '@nestjs/common'
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger'
import { type Notification } from '../domain/notification.entity'
import { ReadNotificationService } from '../domain/service/read-notification.service'
import { WriteNotificationService } from '../domain/service/write-notification.service'
import { NotificationResponse } from './notification.response'

@ApiResponse({
  type: NotificationResponse
})
@ApiTags('Notification')
@ApiBearerAuth()
@Controller('notification')
export class NotificationController {
  constructor (
    private readonly writeNotificationService: WriteNotificationService,
    private readonly readNotificationService: ReadNotificationService
  ) {}

  @Get()
  async getAllTransaction (
    @Request() UserData: { user: JwtPayload }
  ): Promise<Notification[]> {
    const notifications = await this.readNotificationService.findAll({ idUser: UserData.user.id })

    return notifications
  }

  @Get('/:index')
  async getTransaction (
    @Request() UserData: { user: JwtPayload },
      @Param('index', new ParseIntPipe()) index: number
  ): Promise<Notification> {
    const notification = await this.readNotificationService.findOne({ idUser: UserData.user.id, index })

    if (notification === null) {
      throw new NotFoundException(NotificationErrorsMessages.NotFound)
    }

    return notification
  }

  @Delete('/:index')
  async deleteTransaction (
    @Request() UserData: { user: JwtPayload },
      @Param('index', new ParseIntPipe()) index: number
  ): Promise<void> {
    await this.writeNotificationService.delete({ idUser: UserData.user.id, index })
  }
}
