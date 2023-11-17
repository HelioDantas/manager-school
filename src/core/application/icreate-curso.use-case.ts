import CreateCursoDto from '../domain/dto/input/create-curso.dto';
import CursoDto from '../domain/dto/output/curso.dto';

export default interface ICreateCursoUseCase {
  execute(input: CreateCursoDto): Promise<CursoDto>;
}

export const ICreateCursoUseCase = Symbol('ICreateCursoUseCase');
