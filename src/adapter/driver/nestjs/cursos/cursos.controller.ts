import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags, ApiBody } from '@nestjs/swagger';
import ICreateCursoUseCase, {
  ICreateCursoUseCase as ICreateCursoUseCaseSymbol,
} from 'src/core/application/icreate-curso.use-case';
import Curso from './dto/curso';
import CreateAlunoDto from './dto/create-aluno.dto';

@Controller('cursos')
@ApiTags('cursos')
export class CursosController {
  constructor(
    @Inject(ICreateCursoUseCaseSymbol)
    private readonly useCase: ICreateCursoUseCase,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create aluno' })
  @ApiBody({
    type: CreateAlunoDto,
  })
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: Curso,
  })
  create(@Body() input: CreateAlunoDto) {
    return this.useCase.execute(input);
  }
}
