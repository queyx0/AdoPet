import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PetsService } from './pets.service';

@Controller('api/v1/pets')
export class PetsController {
  constructor(private readonly animalService: PetsService) {}

  @Get()
  findAll() {
    return this.animalService.findAll();
  }

  @Post('create')
  create(@Body() createAnimalDto) {
    return this.animalService.create(createAnimalDto);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.animalService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateAnimalDto) {
  //   return this.animalService.update(+id, updateAnimalDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.animalService.remove(+id);
  // }
}
