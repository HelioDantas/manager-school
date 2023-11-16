import { Inject } from '@nestjs/common';
import CreateCursoDto from '../domain/dto/input/create-curso.dto';
import Curso from '../domain/entities/curso';
import ICursoRepository, {
  ICursoRepository as ICursoRepositorySymbol,
} from '../domain/repositories/icurso.repository';
import ICreateCursoUseCase from './icreate-curso.use-case';

export default class CreateCursoUseCase implements ICreateCursoUseCase {
  constructor(
    @Inject(ICursoRepositorySymbol)
    private readonly repository: ICursoRepository,
  ) {}
  async execute(input: CreateCursoDto): Promise<any> {
    const curso = Curso.create(input.nome, input.descricao, input.professorId);

    input.horarios.map((horario) =>
      curso.addHorario(
        horario.diaDaSemana,
        horario.horarioInicio,
        horario.horarioTermino,
      ),
    );

    input.materialDidatico.map((horario) =>
      curso.addMaterialDidatico(horario.nome, horario.link),
    );

    await this.repository.create(curso);

    return curso;
  }
}
