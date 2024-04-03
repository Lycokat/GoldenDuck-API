import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Put
} from '@nestjs/common'
import { ApiResponse, ApiTags } from '@nestjs/swagger'
import { CreateMessageDTO } from '../domain/dto/create-transaction'
import { type Message } from '../domain/messages.entity'
import { type MessagePrimitive } from '../domain/messages.primitive'
import { MessageService } from '../domain/service/messages.service'
import { MessageResponse } from './messages.response'

@ApiResponse({
  type: MessageResponse
})
@ApiTags('Message')
@Controller('message')
export class MessageController {
  constructor (private readonly messageService: MessageService) {}

  @Get()
  async getAllTransaction (
    @Body() id: MessagePrimitive['id']
  ): Promise<Message[]> {
    const messages = await this.messageService.getAll(id)

    if (messages === null) {
      return []
    }

    return messages
  }

  @Post()
  async createAccount (@Body() data: CreateMessageDTO): Promise<Message> {
    const message = await this.messageService.create(data)

    return message
  }

  @Get('/:id')
  async getTransaction (
    @Param('id', new ParseIntPipe()) id: MessagePrimitive['id']
  ): Promise<Message> {
    const message = await this.messageService.find(id)

    if (message === null) {
      throw new NotFoundException()
    }

    return message
  }

  @Put('/:id')
  async updateTransaction (
    @Param('id', new ParseIntPipe()) id: MessagePrimitive['id'],
      @Body() data: MessagePrimitive
  ): Promise<Message> {
    const message = await this.messageService.update(id, data)

    if (message === null) {
      throw new NotFoundException()
    }

    return message
  }

  @Delete('/:id')
  async deleteTransaction (
    @Param('id', new ParseIntPipe()) id: MessagePrimitive['id']
  ): Promise<void> {
    await this.messageService.delete(id)
  }
}
