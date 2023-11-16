import { v4 as uuidv4 } from 'uuid';
import { DiaSemana } from '../enums/dia-semana';

export default class Horario {
  public constructor(
    public readonly id: string,
    public diaDaSemana: DiaSemana,
    public horarioInicio: string,
    public horarioTermino: string,
  ) {}

  static create(
    diaDaSemana: DiaSemana,
    horarioInicio: string,
    horarioTermino: string,
  ): Horario {
    const id = uuidv4();
    return new Horario(id, diaDaSemana, horarioInicio, horarioTermino);
  }
}
