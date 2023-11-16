import { v4 as uuidv4 } from 'uuid';
import MaterialDidatico from './material-didatico';
import Horario from './horario';
import { DiaSemana } from '../enums/dia-semana';

export default class Curso {
  public constructor(
    public readonly id: string,
    public nome: string,
    public descricao: string,
    public professorId: string,
    public materialDidatico: MaterialDidatico[] = [],
    public horarios: Horario[] = [],
  ) {}

  static create(
    nome: string,
    descricao: string,
    professorId: string,
    materialDidatico: MaterialDidatico[] = [],
    horarios: Horario[] = [],
  ): Curso {
    const id = uuidv4();
    return new Curso(
      id,
      nome,
      descricao,
      professorId,
      materialDidatico,
      horarios,
    );
  }

  addHorario(
    diaDaSemana: DiaSemana,
    horarioInicio: string,
    horarioTermino: string,
  ) {
    this.horarios.push(
      Horario.create(diaDaSemana, horarioInicio, horarioTermino),
    );
  }

  addMaterialDidatico(nome: string, link: string) {
    this.materialDidatico.push(MaterialDidatico.create(nome, link));
  }
}
