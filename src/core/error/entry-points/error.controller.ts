import { Public } from '@/decorators/public.decorator'
import { ErrorErrorsMessages } from '@/messages/error/error'
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post
} from '@nestjs/common'
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger'
import { CreateErrorDTO } from '../domain/dto/create-error'
import { type Error } from '../domain/error.entity'
import { type ErrorPrimitive } from '../domain/error.primitive'
import { ErrorService } from '../domain/service/error.service'
import { ErrorResponse } from './error.response'

@ApiResponse({
  type: ErrorResponse
})
@ApiTags('Error')
@Controller('error')
export class ErrorController {
  constructor (private readonly errorService: ErrorService) {}

  @ApiBearerAuth()
  @Get()
  async getAllError (): Promise<Error[]> {
    const errors = await this.errorService.findAll()

    return errors
  }

  @Public()
  @Post()
  async createError (@Body() data: CreateErrorDTO): Promise<Error> {
    const error = await this.errorService.create(data)

    return error
  }

  @ApiBearerAuth()
  @Get('/:id')
  async getError (@Param('id', new ParseIntPipe()) id: ErrorPrimitive['id']): Promise<Error> {
    const error = await this.errorService.findOne({ id })

    if (error === null) {
      throw new NotFoundException(ErrorErrorsMessages.NotFound)
    }

    return error
  }

  @ApiBearerAuth()
  @HttpCode(204)
  @Delete('/:id')
  async deleteError (@Param('id', new ParseIntPipe()) id: ErrorPrimitive['id']): Promise<void> {
    await this.errorService.delete({ id })
  }
}
