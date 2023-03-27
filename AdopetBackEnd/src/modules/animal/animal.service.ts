import { Injectable } from '@nestjs/common';

@Injectable()
export class AnimalService {
  create(createAnimalDto) {
    return 'This action adds a new animal';
  }

  findAll() {
    return `This action returns all animal`;
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
