import { PrismaService } from './database/prisma.service';
import { Module } from '@nestjs/common';
import { AnimalModule } from './modules/animal/animal.module';
import { TutorModule } from './modules/tutor/tutor.module';
import { UsuarioModule } from './modules/usuario/usuario.module';

@Module({
  imports: [ AnimalModule, TutorModule, UsuarioModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
