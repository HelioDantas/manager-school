import { DiaSemana } from '../../enums/dia-semana';

export interface MaterialDidaticoDto {
  nome: string;
  link: string;
}

export interface HorarioDto {
  diaDaSemana: DiaSemana;
  horarioInicio: string;
  horarioTermino: string;
}

export default interface CursoDto {
  readonly id: string;
  readonly nome: string;
  readonly descricao: string;
  readonly professorId: string;
  materialDidatico: MaterialDidaticoDto[];
  horarios: HorarioDto[];
}
