import { Injectable } from '@nestjs/common';
import Curso from 'src/core/domain/entities/curso';
import ICursoRepository from 'src/core/domain/repositories/icurso.repository';

@Injectable()
export default class CursoMemoryRepository implements ICursoRepository {
  private cursos: Curso[] = [];

  async create(input: Curso): Promise<void> {
    this.cursos.push(input);
  }

  findById(id: string): Promise<Curso> {
    return Promise.resolve(this.cursos.find((curso) => curso.id === id));
  }

  async save(input: Curso): Promise<void> {
    const index = this.cursos.findIndex((curso) => curso.id === input.id);

    if (index !== -1) {
      this.cursos.splice(index, 1);
    }

    this.create(input);
  }

  async find(): Promise<Curso[]> {
    return this.cursos;
  }
}
