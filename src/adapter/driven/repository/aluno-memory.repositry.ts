import { Injectable } from '@nestjs/common';
import Aluno from 'src/core/domain/entities/aluno';
import IAlunoRepository from 'src/core/domain/repositories/ialuno.repository';

@Injectable()
export default class AlunoMemoryRepository implements IAlunoRepository {
  private alunos: Aluno[] = [];
  async create(input: Aluno): Promise<void> {
    this.alunos.push(input);
  }

  findById(id: string): Promise<Aluno> {
    return Promise.resolve(this.alunos.find((aluno) => aluno.id === id));
  }

  async save(input: Aluno): Promise<void> {
    const index = this.alunos.findIndex((aluno) => aluno.id === input.id);

    if (index !== -1) {
      this.alunos.splice(index, 1);
    }

    this.create(input);
  }

  async find(): Promise<Aluno[]> {
    return this.alunos;
  }
}
