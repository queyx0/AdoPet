import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TutorService } from './tutor.service';
import { Prisma } from '@prisma/client';

@Controller('api/v1/tutor')
export class TutorController {
  constructor(private readonly tutorService: TutorService) {}

  @Get()
  async index() {
    return this.tutorService.getAll();
  }

  @Get('/:id')
  async getById(@Param('id') id: string) {
    const tutorEncontrado = await this.tutorService.getByID(id);
    return tutorEncontrado;
  }

  @Post('create')
  async create(@Body() data: Prisma.TutorCreateInput) {
    const tutorCriado = await this.tutorService.create(data);
    return tutorCriado;
  }

  @Put('/:id')
  async update(@Param('id') id: string, @Body() data: Prisma.TutorUpdateInput) {
    const tutorAtualizado = await this.tutorService.update(id, data);
    return tutorAtualizado;
  }

  @Delete('/:id')
  async delete(@Param('id') id: string) {
    const tutorDeletado = await this.tutorService.delete(id);
    return tutorDeletado;
  }
}
