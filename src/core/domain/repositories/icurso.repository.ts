import Curso from '../entities/curso';

export default interface ICursoRepository {
  create(input: Curso): Promise<void>;
  findById(id: string): Promise<Curso>;
  save(input: Curso): Promise<void>;
}

export const ICursoRepository = Symbol('ICursoRepository');
