## Workshop Back end - Reprograma

#### Exercício Lógica aplicada - Arrays, Objetos e Métodos.

**Professora: Simara Conceição**

**Aluna: Jezielle Cunha**



​	Para fixação do conteúdo apresentado na semana 4, discliplina Lógica Aplicada- Arrays, Objetos e Métodos, foi proposto o seguinte exercício: 

Criar um sistema que armazena informações de livros para que seja possível gerencia:

**1-** _Crie uma pasta que irá conter os arquivos abaixo:_

- _README.md_

- _app.js_

- _database.js_

- _Inicialize o npm :  npm init -y_

- _Crie o script de start:_

- _Crie o script start no package.json: "scripts": { "start": "nodemon app.js" }_

- _Crie o .gitignore (node_modules)_

- _Instale as dependências nodemon e readline-sync: npm i --save readline-sync nodemo_

  

Nesse parte da atividade, a partir do momento da inicialização do npm, os passos foram todos seguindo o que a professora Simara fazia na resolução do exemplo Chefão. Mesmo fazendo exatamente como explicado em aula, meu arquivo deu erro no nodemon, talvez por uma questão de configuração da minha máquina. Contudo, prossegui na construção do meu exercício testando no terminal através do Node.



**2-** _No arquivo database crie e exporte a sua base no formato array de  objetos contendo alguns dos livros que você já leu ou gostaria de ler  com os seguintes campos:_

No arquivo database.js foi construído o array chamado livros  contendo objetos de classe anônima que foram exportado por meio do module.exports = livros:

````
const livros = [
    {
        "nome": 'Lean Inception, como alinhar pessoas e construir o produto certo',
        "categoria": 'ciencia da computacao',
        "paginas": 159,
        "lido": false,
        "recomendado": false
    },
    {
        "nome": 'Código Limpo, habilidades práticas do Agile Software',
        "categoria": 'ciencia da computacao',
        "paginas": 422,
        "lido": false,
        "recomendado": false
    },
    {
        "nome": 'Mindset, A nova psicologia do sucesso',
        "categoria": 'leitura de auto-ajuda',
        "paginas": 310,
        "lido": true,
        "recomendado": false
    },
    {
        "nome": 'Comunicação não violenta, Técnica para aprimorar relacionamentos pessoais e profissionais',
        "categoria": 'leitura de auto-ajuda',
        "paginas": 285,
        "lido": false,
        "recomendado": true
    },
    {
        "nome": 'Capitães da areia',
        "categoria": 'romance',
        "paginas": 256,
        "lido": true,
        "recomendado": false
    },
    {
        "nome": 'Malala, a menina mais corajosa do mundo',
        "categoria": 'biografia',
        "paginas": 190,
        "lido": true,
        "recomendado": true
    },
    {
        "nome": 'Estrutura de dados e algoritmos com JavaScript',
        "categoria": 'ciencia da computacao',
        "paginas": 452,
        "lido": false,
        "recomendado": true

    },
    {
        "nome": 'Os 7 hábitos das pessoas altamente eficazes',
        "categoria": 'leitura de negocios',
        "paginas": 456,
        "lido": true,
        "recomendado": true
    },
    {
        "nome": 'A elite do atraso, da escravidão a Bolsonaro',
        "categoria": 'história do brasil',
        "paginas": 272,
        "lido": true,
        "recomendado": true 
    }
]
module.exports = livros
````



**3-** _No arquivo app.js desenvolva sua lógica para o comportamento abaixo:_

- _deverá ser possível buscar livros pela categoria_
- _Me recomenda livros pra ler? Deverá listar livros que já foram lidos e que são recomendados_
- _Minha lista de desejo: Deverá listar livros que ainda não foram lidos_
- _Caso a pessoa usuária não escolha uma forma de busca, deverá mostrar  todos os livros cadastrados, ordenados de forma crescente por quantidade de páginas._

Para atender os requisitos da 3° questão, no arquivo app.js foram importados os dados do database.js usando o recurso:

````
const livros = require ("./database.js");
````

Por meio do método nativo sort, foi possível ordenar o array utilizando uma função callback onde determinava a apresentação dos livros de forma crescente por quantidade de páginas.

````
livros.sort((a, b) => a.paginas - b.paginas);
````

Para captura uma entrada simulando a ação do usuário foi utilizado o recurso "redline-sync" dentro de um require.

````
const leitorDeEntrada = require("readline-sync");
````

Foi construída uma função chamada menu para auxiliar o usuário a escolher a forma de busca que ele prefere fazer. Sua construção foi deixada no final do código e chamada no começo dele, o que caracteriza um hoisting.

````
function menu() {
  console.log("==============================================================");
  console.log("Digite o número que corresponde a busca que você deseja fazer:")
  console.log();
  console.log(" 1 -Buscar Livros pela categoria;");
  console.log(" 2 -Listar livros recomendados;");
  console.log(" 3 -Lista de desejos;");
  console.log();
  console.log("==============================================================");
}
````

Para questionar o usuário sobre qual alternativa ele prefere, foi utilizado o método question.

````
const opcao = leitorDeEntrada.question("Escolha uma opcao de busca :");
````

Para apresentar a busca segundo a opção desejada pelo usuário, foi construída a estrutura condicional switch/case, onde cada caso recebe uma opção corresponde e executa a busca fazendo uso do método nativo filter que filtra seguindo o que for determinado e forma outro array com os elementos filtrados. No caso de o usuário, ao ser questionado, der uma entrada que não corresponda as alternativas condicionadas, por default, irá apresentar os livros pela ordem crescente de páginas. 

````
switch (opcao) {
  case "1":
    console.log("Você escolheu a opção 1- Buscar Livros pela categoria");
    console.log(" As opções disponíveis de categoria são: ");
    console.log(
      "ciencia da computacao, leitura de auto-ajuda, romance, biografia, leitura de negocios, história do brasil"
    );

    const categoriaEscolhida = leitorDeEntrada.question(
      "Qual categoria voce quer ver? "
    );

    const livrosFiltradosPorCategoria = livros.filter(
      (livro) => livro.categoria == categoriaEscolhida
    );

    console.log(livrosFiltradosPorCategoria);

    break;

  case "2":
    console.log("Você escolheu a opção 2- Listar livros recomendados");

    const livrosRecomendados = livros.filter(
      (livro) => livro.recomendado == true && livro.lido == true);

    console.log(livrosRecomendados);

    break;

  case "3":
    console.log("Você escolheu a opção 3- Lista de desejos");

    const livrosNaoLidos = livros.filter((livro) => livro.lido == false);
    
    console.log(livrosNaoLidos);

    break;

  default:
      console.log("Livros listados pela ordem crescente de número de páginas:")
    console.log(livros);
}
````

 A lógica adotada foi a seguinte: 

Se o usuário preferir realizar a busca pela categoria, irá digitar 1, depois escolher a categoria desejada para que os livros desta categoria sejam apresentados no console. Se preferir buscar os livros recomendados, o usuário digitará 2, e então, os livros lidos e recomendados serão apresentados. Se desejar ver a lista de desejos, o usuário digitará 3 e os livros ainda não lidos serão apresentados. Mas se nenhuma das opções mencionadas  for escolhida, será apresentada a lista de livros ordenada do número menor de páginas para o número maior.