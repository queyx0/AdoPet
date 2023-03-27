import { Module } from '@nestjs/common';
import { ModuleModule } from './modules/animal/module/module.module';
import { AnimalModule } from './modules/animal/animal.module';
import { TutorModule } from './modules/tutor/tutor.module';
import { UsuarioModule } from './modules/usuario/usuario.module';

@Module({
  imports: [ModuleModule, AnimalModule, TutorModule, UsuarioModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
