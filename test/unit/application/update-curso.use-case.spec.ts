import CreateCursoUseCase from '../../../src/core/application/create-curso.use-case';
import UpdateCursoUseCase from '../../../src/core/application/update-curso.use-case';
import CursoRepository from '../../../src/adapter/driven/repository/curso-memory.repository';

describe('UpdateCursoUseCase', () => {
  describe('Deve editar um curso', () => {
    it('criar aluno', async () => {
      const input1 = {
        nome: 'Software architecture',
        descricao:
          'DOMINE NA PRÁTICA OS CONHECIMENTOS DE DESENVOLVIMENTO E ARQUITETURA DE SOFTWARE PARA ATUAR EM PROJETOS COM ALTOS NÍVEIS DE COMPLEXIDADE',
        professorId: '123',
        materialDidatico: [
          {
            nome: 'pdf',
            link: 'https://www.google.com/',
          },
        ],
        horarios: [
          {
            diaDaSemana: 2,
            horarioInicio: '19:00',
            horarioTermino: '20:00',
          },
        ],
      };
      const repository = new CursoRepository();
      const usecase1 = new CreateCursoUseCase(repository);
      const curso = await usecase1.execute(input1);

      const usecase = new UpdateCursoUseCase(repository);

      const input = {
        id: curso.id,
        nome: 'Software Architecture',
        descricao:
          'DOMINE NA PRÁTICA OS CONHECIMENTOS DE DESENVOLVIMENTO E ARQUITETURA DE SOFTWARE PARA ATUAR EM PROJETOS COM ALTOS NÍVEIS DE COMPLEXIDADE',
        professorId: '123',
        materialDidatico: [
          {
            nome: 'pdf',
            link: 'https://www.google.com/',
          },
          {
            nome: '21pdf',
            link: 'https://www.google.com/',
          },
        ],
        horarios: [
          {
            diaDaSemana: 2,
            horarioInicio: '19:00',
            horarioTermino: '20:00',
          },
          {
            diaDaSemana: 3,
            horarioInicio: '19:00',
            horarioTermino: '20:00',
          },
        ],
      };

      const output = await usecase.execute(input);

      expect(output).toMatchObject({
        nome: 'Software Architecture',
        descricao:
          'DOMINE NA PRÁTICA OS CONHECIMENTOS DE DESENVOLVIMENTO E ARQUITETURA DE SOFTWARE PARA ATUAR EM PROJETOS COM ALTOS NÍVEIS DE COMPLEXIDADE',
        materialDidatico: [
          {
            nome: 'pdf',
            link: 'https://www.google.com/',
          },
          {
            nome: '21pdf',
            link: 'https://www.google.com/',
          },
        ],
        horarios: [
          {
            diaDaSemana: 2,
            horarioInicio: '19:00',
            horarioTermino: '20:00',
          },
          {
            diaDaSemana: 3,
            horarioInicio: '19:00',
            horarioTermino: '20:00',
          },
        ],
      });
      expect(output.id).toBeTruthy();
    });
  });
});
