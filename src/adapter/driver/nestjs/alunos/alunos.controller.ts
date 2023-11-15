import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags, ApiBody } from '@nestjs/swagger';
import IAlunoUseCase, {
  IAlunoUseCase as Itest,
} from 'src/core/application/ialuno.use-case';
import Aluno from './dto/aluno.';
import CreateAlunoDto from './dto/create-aluno.dto';

@Controller('alunos')
@ApiTags('alunos')
export class AlunosController {
  constructor(@Inject(Itest) private readonly alunoUseCase: IAlunoUseCase) {}

  @Get()
  list() {
    return this.alunoUseCase.listAlunos();
  }

  @Post()
  @ApiOperation({ summary: 'Create aluno' })
  @ApiBody({
    type: CreateAlunoDto,
  })
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: Aluno,
  })
  create(@Body() input: CreateAlunoDto) {
    return this.alunoUseCase.createAluno(input);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update aluno' })
  @ApiBody({
    type: CreateAlunoDto,
  })
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: Aluno,
  })
  update(@Param('id') id: string, @Body() input: CreateAlunoDto) {
    return this.alunoUseCase.updateAluno({ ...input, id });
  }
}
