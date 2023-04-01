import {
  ForbiddenException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { Prisma, Tutor } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class TutorService {
  constructor(private prisma: PrismaService) {}

  async getAll(): Promise<Tutor[] | string> {
    const todosTutores = await this.prisma.tutor.findMany();
    if (todosTutores.length < 1) {
      return 'Sem tutores cadastrados no sistema';
    } else {
      return todosTutores;
    }
  }

  async create(data: Prisma.TutorCreateInput): Promise<Object> {
    if ((data.cidade || data.sobre || data.nome || data.telefone) == '') {
      throw new ForbiddenException(
        'Todos os campos do tutor devem ser preenchidos',
        {
          cause: new Error(),
        },
      );
    }

    try {
      const tutorCriado = await this.prisma.tutor.create({ data });

      return {
        tutorRegistrado: tutorCriado,
        message: 'Tutor criado com sucesso',
      };
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'Não foi possivel criar um tutor',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }

  async update(id: string, data: Prisma.TutorUpdateInput) {
    try {
      const tutorAtualizado = await this.prisma.tutor.update({
        data,
        where: { id },
      });

      return {
        dadosAtualizados: tutorAtualizado,
        message: 'Tutor atualizado com sucesso',
      };
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'Não foi possivel atualizar o tutor',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }

  async delete(id: string): Promise<Object> {
    try {
      const tutor = this.prisma.tutor.delete({
        where: { id },
      });
      return {
        message: 'Tutor deletado com sucesso',
      };
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'Não foi possivel atualizar o tutor',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }

  async getByID(id: string): Promise<Tutor> {
    try {
      const tutorEncontrado = await this.prisma.tutor.findFirst({
        where: { id },
      });

      return tutorEncontrado;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'Não foi possivel enctontrar o tutor',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }
}
