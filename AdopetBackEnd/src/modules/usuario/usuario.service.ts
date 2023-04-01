import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Usuario } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class UsuarioService {
  constructor(private primsa: PrismaService) {}

  async create(data: Usuario) {
    try {
      const usuarioCriado = await this.primsa.usuario.create({ data });
      return usuarioCriado;
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

  findAll() {
    return `This action returns all usuario`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usuario`;
  }

  update(id: number, updateUsuarioDto) {
    return `This action updates a #${id} usuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
