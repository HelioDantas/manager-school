import { Module } from '@nestjs/common';
import { CursosController } from './cursos.controller';
import { ICursoRepository } from 'src/core/domain/repositories/icurso.repository';
import { ICreateCursoUseCase } from 'src/core/application/icreate-curso.use-case';
import CreateCursoUseCase from 'src/core/application/create-curso.use-case';
import CursoMemoryRepository from 'src/adapter/driven/repository/curso-memory.repository';

@Module({
  controllers: [CursosController],
  providers: [
    {
      provide: ICreateCursoUseCase,
      useClass: CreateCursoUseCase,
    },

    {
      provide: ICursoRepository,
      useClass: CursoMemoryRepository,
    },
  ],
})
export class CursosModule {}
