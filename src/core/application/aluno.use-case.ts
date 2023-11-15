import { Inject } from '@nestjs/common';
import AlunoCreateDto from '../domain/dto/input/aluno-create.dto';
import AlunoUpdateDto from '../domain/dto/input/aluno-update.dto';
import AlunoDto from '../domain/dto/output/aluno.dto';
import Aluno from '../domain/entities/aluno';
import IAlunoRepository, {
  IAlunoRepository as IAlunoRepositorySymbol,
} from '../domain/repositories/ialuno.repository';
import IAlunoUseCase from './ialuno.use-case';

export default class AlunoUseCase implements IAlunoUseCase {
  constructor(
    @Inject(IAlunoRepositorySymbol)
    private readonly repository: IAlunoRepository,
  ) {}
  async createAluno(input: AlunoCreateDto): Promise<AlunoDto> {
    const aluno = Aluno.create(
      input.nome,
      input.nascimento,
      input.email,
      input.telefone,
    );

    await this.repository.create(aluno);
    return {
      ...aluno,
      email: aluno.email.toString(),
    };
  }

  async updateAluno(input: AlunoUpdateDto): Promise<AlunoDto | undefined> {
    const aluno = await this.repository.findById(input.id);

    if (!aluno) {
      return undefined;
    }

    aluno.update(input);

    await this.repository.save(aluno);

    return {
      ...aluno,
      email: aluno.email.toString(),
    };
  }

  async listAlunos(): Promise<AlunoDto[]> {
    console.log(this.repository);
    const alunos = await this.repository.find();

    return alunos.map((aluno) => {
      return {
        ...aluno,
        email: aluno.email.toString(),
      };
    });
  }
}
