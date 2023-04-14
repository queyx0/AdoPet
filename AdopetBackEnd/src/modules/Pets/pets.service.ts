import { Injectable } from '@nestjs/common';
import { Pets } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class PetsService {
  constructor(private prisma: PrismaService) {}

  findAll(): Promise<Pets[]> {
    return this.prisma.pets.findMany({ where: { adotado: false } });
  }

  async create(data: Pets) {
    try {
      const animalCriado = await this.prisma.pets.create({ data });
      return animalCriado;
    } catch (e) {
      console.log(e);
    }
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} animal`;
  // }

  // update(id: number, updateAnimalDto) {
  //   return `This action updates a #${id} animal`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} animal`;
  // }
}
