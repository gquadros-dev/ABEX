export class Produto {
  id: number;
  fotoPath: string;
  nome: string;
  descricao: string;
  preco: string;
  categoria: string;
  disponibilidade: string;
  estoque: number;

  constructor(
    id: number,
    fotoPath: string,
    nome: string,
    descricao: string,
    preco: string,
    categoria: string,
    disponibilidade: string,
    estoque: number
  ) {
    this.id = id;
    this.fotoPath = fotoPath;
    this.nome = nome;
    this.descricao = descricao;
    this.preco = preco;
    this.categoria = categoria;
    this.disponibilidade = disponibilidade;
    this.estoque = estoque;
  }
}
