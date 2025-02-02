
import Livro from "../modelo/Livro";

let livros: Livro[] = [
  { codigo: 1, codEditora: 1, titulo: "Livro 1", resumo: "Resumo do livro 1", autores: ["Autor 1", "Autor 2"] },
  { codigo: 2, codEditora: 2, titulo: "Livro 2", resumo: "Resumo do livro 2", autores: ["Autor 3"] },
  { codigo: 3, codEditora: 1, titulo: "Livro 3", resumo: "Resumo do livro 3", autores: ["Autor 4", "Autor 5", "Autor 6"] },
];

class ControleLivro {
  obterLivros(): Livro[] {
    return livros;
  }

  incluir(livro: Livro): void {
    const novoCodigo = livros.length > 0 ? Math.max(...livros.map(l => l.codigo)) + 1 : 1;
    livro.codigo = novoCodigo;
    livros.push(livro);
  }

  excluir(codigo: number): void {
    const indice = livros.findIndex(l => l.codigo === codigo);
    if (indice !== -1) {
      livros.splice(indice, 1);
    }
  }
}

export default ControleLivro;