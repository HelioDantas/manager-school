import CreateCursoDto from './create-curso.dto';

export default interface UpdateCursoDto extends CreateCursoDto {
  id: string;
}
