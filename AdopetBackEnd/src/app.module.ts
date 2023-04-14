import { PrismaService } from './database/prisma.service';
import { Module } from '@nestjs/common';
import { TutorModule } from './modules/Tutor/tutor.module';
import { UsuarioModule } from './modules/Usuario/usuario.module';
import { PetsModule } from './modules/Pets/pets.module';

@Module({
  imports: [PetsModule, TutorModule, UsuarioModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
