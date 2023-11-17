import AlunoDto from '../dto/output/aluno.dto';
import Aluno from '../entities/aluno';

export default class AlunoMapper {
  static toAlunoDto(aluno: Aluno): AlunoDto {
    return {
      ...aluno,
      email: aluno.email.toString(),
    };
  }
}
