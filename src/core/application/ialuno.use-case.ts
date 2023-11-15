import AlunoCreateDto from '../domain/dto/input/aluno-create.dto';
import AlunoUpdateDto from '../domain/dto/input/aluno-update.dto';
import AlunoDto from '../domain/dto/output/aluno.dto';

export default interface IAlunoUseCase {
  createAluno(input: AlunoCreateDto): Promise<AlunoDto>;
  updateAluno(input: AlunoUpdateDto): Promise<AlunoDto>;
  listAlunos(): Promise<AlunoDto[]>;
}

export const IAlunoUseCase = Symbol('IAlunoUseCase');
