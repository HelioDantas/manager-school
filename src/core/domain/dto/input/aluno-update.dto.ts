import AlunoCreateDto from './aluno-create.dto';

export default interface AlunoUpdateDto extends AlunoCreateDto {
  readonly id: string;
}
