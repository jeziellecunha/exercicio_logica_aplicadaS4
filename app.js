const livros = require("./database.js");

livros.sort((a, b) => a.paginas - b.paginas);

const leitorDeEntrada = require("readline-sync");
menu();
const opcao = leitorDeEntrada.question("Escolha uma opcao de busca :");

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
    console.log("Você escolheu a opção 3- Lista de desejos")
    const livrosNaoLidos = livros.filter((livro) => livro.lido == false);
    console.log(livrosNaoLidos);

    break;

  default:
      console.log("Livros listados pela ordem crescente de número de páginas:")
    console.log(livros);
}

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
