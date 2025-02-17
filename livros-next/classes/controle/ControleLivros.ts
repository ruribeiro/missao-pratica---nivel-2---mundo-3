import {Livro} from "../modelo/Livro";
import { useState } from "react";


//const [livros, setLivros] = useState<Array<Livro>>([
export const livros:Array<Livro> = [
    livros: Array<Livro> = [
        {
          titulo: 'O Senhor dos Anéis: A Sociedade do Anel',
          resumo: 'Em uma pacata vila do Condado, um hobbit chamado Frodo recebe uma missão importantíssima: destruir o Um Anel, um artefato de poder maligno criado pelo Senhor do Escuro, Sauron. Para cumprir essa missão, Frodo contará com a ajuda de seus amigos hobbits, além de uma diversidade de aliados improváveis, como o mago Gandalf, o elfo Legolas, o anão Gimli e o humano Aragorn. Juntos, eles formarão a Sociedade do Anel e viajarão por terras perigosas, enfrentando criaturas terríveis e as forças de Sauron, que deseja o Anel para dominar a Terra Média.',
          codEditora: 1, // Assumindo que a Editora 1 é a "Martins Fontes"
          codigo: 1,
          autores: ['J.R.R. Tolkien']
        },
        {
          titulo: 'Harry Potter e a Pedra Filosofal',
          resumo: 'No seu aniversário de onze anos, Harry Potter descobre que é um feiticeiro e que foi aceito na Escola de Magia e Bruxaria de Hogwarts. Ele deixa para trás a vida miserável que levava com os tios Dursleys e embarca em uma aventura extraordinária, aprendendo a usar magia, fazendo amigos leais e enfrentando o mal que assombrava o mundo bruxo.',
          codEditora: 2, // Assumindo que a Editora 2 é a "Rocco"
          codigo: 2,
          autores: ['J.K. Rowling']
        },
        {
          titulo: 'O Pequeno Príncipe',
          resumo: 'Um piloto cai com seu avião no deserto do Saara e lá encontra um principezinho que vive em um pequeno planeta. Através de suas conversas, o piloto aprende sobre a importância da amizade, do amor e sobre como ver o mundo com o coração.',
          codEditora: 3, // Assumindo que a Editora 3 é a "Intrínseca"
          codigo: 3,
          autores: ['Antoine de Saint-Exupéry']
        },
        {
          titulo: 'Orgulho e Preconceito',
          resumo: 'Em uma pequena cidade da Inglaterra, no século XIX, a vida de uma família é transformada com a chegada de novos vizinhos ricos. Entre eles, o Sr. Darcy, um homem orgulhoso e de difícil convivência, e a Srta. Elizabeth Bennet, uma mulher inteligente e independente. Apesar das diferenças e dos preconceitos, surge uma paixão que poderá mudar suas vidas para sempre.',
          codEditora: 4, // Assumindo que a Editora 4 é a "Penguin Classics"
          codigo: 4,
          autores: ['Jane Austen']
        },
        {
          titulo: '1984',
          resumo: 'Em um futuro distópico, onde o governo controla todos os aspectos da vida das pessoas, um homem chamado Winston Smith decide se rebelar contra o sistema. Ele começa a questionar a realidade imposta pelo Partido e a buscar a liberdade individual, mesmo que isso signifique arriscar sua própria vida.',
          codEditora: 5, // Assumindo que a Editora 5 é a "Companhia das Letras"
          codigo: 5,
          autores: ['George Orwell']
        }
];

export default class ControleLivro{

    obterLivros = () => {
        return livros
    };

    incluir = (livroObj:Livro) => {
        var codigoNovo = livros.length + 1
        livroObj.codigo = codigoNovo
        livros.push(livroObj)
        console.log(livros)
        //return livros
    };


    excluir = (codigoLivro:number) => {
        
        var indexResult = livros.findIndex((x) => x.codEditora === codigoLivro);
        return livros.splice(indexResult, 1);
    };

}