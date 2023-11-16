import Curso from '../entities/curso';

export default interface ICursoRepository {
  create(input: Curso): Promise<void>;
}

export const ICursoRepository = Symbol('ICursoRepository');
