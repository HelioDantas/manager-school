import { Module } from '@nestjs/common';
import { AlunosController } from './alunos.controller';
import { IAlunoUseCase } from 'src/core/application/ialuno.use-case';
import AlunoUseCase from 'src/core/application/aluno.use-case';
import { IAlunoRepository } from 'src/core/domain/repositories/ialuno.repository';
import AlunoMemoryRepository from 'src/adapter/driven/repository/aluno-memory.repositry';

@Module({
  controllers: [AlunosController],
  providers: [
    {
      provide: IAlunoUseCase,
      useClass: AlunoUseCase,
    },

    {
      provide: IAlunoRepository,
      useClass: AlunoMemoryRepository,
    },
  ],
})
export class AlunosModule {}
