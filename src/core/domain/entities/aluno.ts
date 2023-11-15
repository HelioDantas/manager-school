import AlunoUpdateDto from '../dto/input/aluno-update.dto';
import Email from '../valueObject/email';
import { v4 as uuidv4 } from 'uuid';

export default class Aluno {
  public constructor(
    public readonly id: string,
    public nome: string,
    public nascimento: Date,
    public email: Email,
    public telefone: string,
  ) {}

  static create(
    nome: string,
    nascimento: Date,
    email: string,
    telefone: string,
  ): Aluno {
    const userId = uuidv4();
    return new Aluno(userId, nome, nascimento, new Email(email), telefone);
  }

  update(input: AlunoUpdateDto) {
    this.nome = input.nome;
    this.nascimento = input.nascimento;
    this.email = new Email(input.email);
    this.telefone = input.telefone;
  }
}
