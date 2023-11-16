import { v4 as uuidv4 } from 'uuid';

export default class MaterialDidatico {
  public constructor(
    public readonly id: string,
    public nome: string,
    public link: string,
  ) {}

  static create(nome: string, link: string): MaterialDidatico {
    const id = uuidv4();
    return new MaterialDidatico(id, nome, link);
  }
}
