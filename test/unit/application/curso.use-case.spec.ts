import CreateCursoUseCase from '../../../src/core/application/create-curso.use-case';
import CursoRepository from '../../../src/adapter/driven/repository/curso-memory.repository';

describe('CreateCursoUseCase', () => {
  describe('Deve criar um curso', () => {
    it('criar aluno', async () => {
      const input = {
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
      const usecase = new CreateCursoUseCase(repository);
      const output = await usecase.execute(input);

      expect(output).toMatchObject({
        nome: 'Software architecture',
        descricao:
          'DOMINE NA PRÁTICA OS CONHECIMENTOS DE DESENVOLVIMENTO E ARQUITETURA DE SOFTWARE PARA ATUAR EM PROJETOS COM ALTOS NÍVEIS DE COMPLEXIDADE',
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
      });
      expect(output.id).toBeTruthy();
    });
  });
});
