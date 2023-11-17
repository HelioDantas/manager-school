import UpdateCursoDto from '../domain/dto/input/update-curso.dto';
import CursoDto from '../domain/dto/output/curso.dto';

export default interface IUpdateCursoUseCase {
  execute(input: UpdateCursoDto): Promise<CursoDto>;
}

export const IUpdateCursoUseCase = Symbol('IUpdateCursoUseCase');
