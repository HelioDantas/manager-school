import { ApiProperty } from '@nestjs/swagger';
import CursoDto, {
  HorarioDto,
  MaterialDidaticoDto,
} from 'src/core/domain/dto/output/curso.dto';

export default class Curso implements CursoDto {
  @ApiProperty({
    example: 'f1453a0d-4b53-4ff9-8b17-709e089ca805',
    description: 'ID',
    type: String,
  })
  readonly id: string;

  @ApiProperty({
    example: 'Maine Coon',
    description: 'Nome do Aluno',
    type: String,
  })
  readonly nome: string;

  @ApiProperty({
    example: 'Maine Coon',
    description: 'Nome do Aluno',
    type: String,
  })
  readonly descricao: string;

  @ApiProperty({
    example: 'test@test.com',
    description: 'id do professor',
    type: String,
  })
  readonly professorId: string;

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
