import { ApiProperty } from '@nestjs/swagger';
import AlunoDto from 'src/core/domain/dto/output/aluno.dto';

export default class Aluno implements AlunoDto {
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
