import Aluno from '../entities/aluno';

export default interface IAlunoRepository {
  create(input: Aluno): Promise<void>;
  findById(id: string): Promise<Aluno | undefined>;
  save(input: Aluno): Promise<void>;
}
