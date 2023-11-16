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

export default interface CreateCursoDto {
  nome: string;
  descricao: string;
  professorId: string;
  materialDidatico: MaterialDidaticoDto[];
  horarios: HorarioDto[];
}
