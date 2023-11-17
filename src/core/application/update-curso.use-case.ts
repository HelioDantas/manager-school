import { Inject } from '@nestjs/common';
import UpdateCursoDto from '../domain/dto/input/update-curso.dto';
import ICursoRepository, {
  ICursoRepository as ICursoRepositorySymbol,
} from '../domain/repositories/icurso.repository';
import IUpdateCursoUseCase from './iupdate-curso.use-case';
import CursoDto from '../domain/dto/output/curso.dto';

export default class UpdateCursoUseCase implements IUpdateCursoUseCase {
  constructor(
    @Inject(ICursoRepositorySymbol)
    private readonly repository: ICursoRepository,
  ) {}

  async execute(input: UpdateCursoDto): Promise<CursoDto> {
    const curso = await this.repository.findById(input.id);

    curso.nome = input.nome;
    curso.descricao = input.descricao;
    curso.professorId = input.professorId;

    // TODO: como substituir um horario caso já existe ou devo sempre sobrescrever?
    // TODO: Os ids devem está na entidade?
    curso.clearHorarios();
    input.horarios.map((horario) =>
      curso.addHorario(
        horario.diaDaSemana,
        horario.horarioInicio,
        horario.horarioTermino,
      ),
    );
    curso.clearMaterialDidaticos();

    input.materialDidatico.map((horario) =>
      curso.addMaterialDidatico(horario.nome, horario.link),
    );

    await this.repository.save(curso);

    return curso;
  }
}
