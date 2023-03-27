import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AnimalService } from './animal.service';

@Controller('api/v1/animal')
export class AnimalController {
  constructor(private readonly animalService: AnimalService) {}

  @Get()
  findAll() {
    return this.animalService.findAll();
  }



  @Post()
  create(@Body() createAnimalDto) {
    return this.animalService.create(createAnimalDto);
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.animalService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAnimalDto) {
    return this.animalService.update(+id, updateAnimalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.animalService.remove(+id);
  }
}
