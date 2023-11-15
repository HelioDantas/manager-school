import { ApiProperty } from '@nestjs/swagger';
import AlunoCreateDto from 'src/core/domain/dto/input/aluno-create.dto';

export default class CreateAlunoDto implements AlunoCreateDto {
  @ApiProperty({
    example: 'Maine Coon',
    description: 'Nome do Aluno',
    type: String,
  })
  readonly nome: string;

  @ApiProperty({
    example: '1996-02-15',
    description: 'Data de Nascimento',
    type: Date,
  })
  readonly nascimento: Date;

  @ApiProperty({
    example: 'test@test.com',
    description: 'Email',
    type: String,
  })
  readonly email: string;

  @ApiProperty({
    example: '2199999998',
    description: 'Telefone',
    type: String,
  })
  readonly telefone: string;
}
