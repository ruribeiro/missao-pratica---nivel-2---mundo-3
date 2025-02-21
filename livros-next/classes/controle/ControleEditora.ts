import  {Editora}  from "../modelo/Editora";

const editoras: Array<Editora> = [
    {codEditora:1, nome:'Letras e Artes'},
    {codEditora:2, nome:'Record'},
    {codEditora:3, nome:'Flecha'},
    { codEditora:4, nome:'Irradiação'},
    {codEditora:5, nome:'Fluentess'},
];

export default class ControleEditora {
    getNomeEditora = (codEditora:number) => {
          const nomeEditora = editoras.filter(e => (e.codEditora === codEditora));
          return nomeEditora[0].nome
          //return 'ok'
	}

    getEditoras =() => {
        return editoras
            
	}
};

