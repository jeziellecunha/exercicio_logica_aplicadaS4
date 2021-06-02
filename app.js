const livros = require("./database.js");

livros.sort((a, b) => a.paginas - b.paginas);

const leitorDeEntrada = require("readline-sync");
menu();
const opcao = leitorDeEntrada.question("Escolha uma opcao de busca :");

switch (opcao) {
  case "1":
    console.log(" As opções disponíveis de categoria são: ");
    console.log(
      "Ciência da computação, Leitura de Auto-Ajuda, Romance, Biografia, Leitura de negócios"
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
    const livrosRecomendados = livros.filter(
      (livro) => livro.recomendado == true && livro.lido == true
    );
    console.log(livrosRecomendados);

    break;

  case "3":
    const livrosNaoLidos = livros.filter((livro) => livro.lido == false);
    console.log(livrosNaoLidos);

    break;

  default:
    console.log(livros);
}

function menu() {
  console.log("===========================================================");
  console.log();
  console.log(" 1 -Buscar Livros pela categoria");
  console.log(" 2 -Listar recomendaçôes");
  console.log(" 3 -Lista de desejos");
  console.log();
  console.log("===========================================================");
}
