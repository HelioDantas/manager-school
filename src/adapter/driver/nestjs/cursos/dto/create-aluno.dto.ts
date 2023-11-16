import { ApiProperty } from '@nestjs/swagger';
import Dto, {
  HorarioDto,
  MaterialDidaticoDto,
} from 'src/core/domain/dto/input/create-curso.dto';

export default class CreateCursoDto implements Dto {
  @ApiProperty({
    example: 'Direito',
    description: 'Nome',
    type: String,
  })
  readonly nome: string;

  @ApiProperty({
    example: 'Ssdsds',
    description: 'Descrição',
    type: String,
  })
  descricao: string;

  @ApiProperty({
    example: 'f1453a0d-4b53-4ff9-8b17-709e089ca805',
    description: 'Nome do Aluno',
    type: String,
  })
  professorId: string;

  @ApiProperty({
    example: [
      {
        nome: 'Material principal',
        link: 'https://github.com/HelioDantas',
      },
    ],
    description: 'Materias',
    type: [],
  })
  materialDidatico: MaterialDidaticoDto[];

  @ApiProperty({
    example: [
      {
        diaDaSemana: 1,
        horarioInicio: '19:00',
        horarioTermino: '20:00',
      },
    ],
    description: 'Horarios',
    type: [],
  })
  horarios: HorarioDto[];
}
