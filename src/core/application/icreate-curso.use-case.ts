import CreateCursoDto from '../domain/dto/input/create-curso.dto';

export default interface ICreateCursoUseCase {
  execute(input: CreateCursoDto): Promise<any>;
}

export const ICreateCursoUseCase = Symbol('ICreateCursoUseCase');
