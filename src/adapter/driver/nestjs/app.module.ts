import { Module } from '@nestjs/common';
import { AlunosModule } from './alunos/alunos.module';
import { CursosModule } from './cursos/cursos.module';

@Module({
  imports: [AlunosModule, CursosModule],
})
export class AppModule {}
