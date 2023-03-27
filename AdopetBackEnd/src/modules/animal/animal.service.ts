import { Injectable } from '@nestjs/common';
import { Animal } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class AnimalService {
  constructor(private prisma: PrismaService){}
  
  findAll(): Promise<Animal[]> {
    return this.prisma.animal.findMany({ include: {Tutor: true} })
  }


  async create(data: Animal) {
    try {    
      const animalCriado = await this.prisma.animal.create({data})
      return animalCriado
    } catch (e) { console.log(e) }
  }



  findOne(id: number) {
    return `This action returns a #${id} animal`;
  }

  update(id: number, updateAnimalDto) {
    return `This action updates a #${id} animal`;
  }

  remove(id: number) {
    return `This action removes a #${id} animal`;
  }
}
