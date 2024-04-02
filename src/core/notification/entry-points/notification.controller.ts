import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post } from '@nestjs/common'
import { ApiResponse, ApiTags } from '@nestjs/swagger'
import { CreateNotificationDTO } from '../domain/dto/create-notification'
import { type Notification } from '../domain/notification.entity'
import { type NotificationPrimitive } from '../domain/notification.primitive'
import { NotificationService } from '../domain/service/transaction.service'
import { NotificationResponse } from './notification.response'

@ApiResponse({
  type: NotificationResponse
})
@ApiTags('Notification')
@Controller('notification')
export class NotificationController {
  constructor (private readonly notificationService: NotificationService) {}

  @Get()
  async getAllTransaction (@Body() id: NotificationPrimitive['id']): Promise<Notification[]> {
    const notifications = await this.notificationService.getAll(id)

    if (notifications === null) {
      return []
    }

    return notifications
  }

  @Post()
  async createAccount (@Body() data: CreateNotificationDTO): Promise<Notification> {
    const notification = await this.notificationService.create(data)

    return notification
  }

  @Get('/:id')
  async getTransaction (@Param('id', new ParseIntPipe()) id: NotificationPrimitive['id']): Promise<Notification> {
    const transaction = await this.notificationService.find(id)

    if (transaction === null) {
      throw new NotFoundException()
    }

    return transaction
  }

  @Delete('/:id')
  async deleteTransaction (@Param('id', new ParseIntPipe()) id: NotificationPrimitive['id']): Promise<void> {
    await this.notificationService.delete(id)
  }
}