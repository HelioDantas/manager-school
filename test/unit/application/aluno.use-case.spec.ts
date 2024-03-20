import AlunoMemoryRepository from '../../../src/adapter/driven/repository/aluno-memory.repository';
import AlunoUseCase from '../../../src/core/application/aluno.use-case';

describe('AlunoUseCase', () => {
  describe('createAluno', () => {
    it('criar aluno', async () => {
      const input = {
        nome: 'teste',
        nascimento: new Date(1996, 1, 15),
        email: 'test@test.com',
        telefone: '21999999999',
      };

      const usecase = new AlunoUseCase(new AlunoMemoryRepository());
      const output = await usecase.createAluno(input);

      expect(output).toMatchObject({
        nome: 'teste',
        nascimento: new Date(1996, 1, 15),
        email: 'test@test.com',
        telefone: '21999999999',
      });
      expect(output.id).toBeTruthy();
    });
  });

  describe('updateAluno', () => {
    it('Deve atualizar aluno', async () => {
      const input1 = {
        nome: 'teste',
        nascimento: new Date(1996, 1, 15),
        email: 'test@test.com',
        telefone: '21999999999',
      };

      const repository = new AlunoMemoryRepository();
      const usecase = new AlunoUseCase(repository);
      const aluno = await usecase.createAluno(input1);

      const input = {
        id: aluno.id,
        nome: 'teste',
        nascimento: new Date(1998, 1, 15),
        email: 'test@test.com',
        telefone: '21999999999',
      };

      const output = await usecase.updateAluno(input);

      expect(output).toMatchObject({
        nome: 'teste',
        nascimento: new Date(1998, 1, 15),
        email: 'test@test.com',
        telefone: '21999999999',
      });
      expect(output.id).toBeTruthy();
    });

    it('Deve retornar vazio quando aluno não existe', async () => {
      const input = {
        id: '1asdsadasd',
        nome: 'teste',
        nascimento: new Date(1998, 1, 15),
        email: 'test@test.com',
        telefone: '21999999999',
      };

      const repository = new AlunoMemoryRepository();
      const usecase = new AlunoUseCase(repository);

      const output = await usecase.updateAluno(input);

      expect(output).toBeUndefined();
    });
  });
});
