var testa = document.querySelector(".testa");
var tbody = document.querySelector(".tbody");
//Objeto das noticias que serão colocadas quando o site carregar
var conteudo = {
  conteudos: [
    {
      tag: "Water",
      idNoticia: "/noticia/?id=TITULO1",
      titulo: "O que é crise Hidrica",
      autor: "/assets/gustavoImg.svg",
      nome_autor: "Gustavo",
      data_lançamento: "nov,05 2022",
      background: "bg-[url(/assets/imagemConteudoTorneira.svg)]",
    },
    {
      tag: "Nature",
      idNoticia: "/noticia/?id=TITULO2",
      titulo: "Qual a importância da natureza?",
      autor: "/assets/viniImg.svg",
      nome_autor: "Vinicius",
      data_lançamento: "nov,05 2022",
      background: "bg-[url(/assets/imagemConteudoTerra.svg)]",
    },
    {
      tag: "Nature",
      idNoticia: "/noticia/?id=TITULO3",
      titulo: "Porque a amazônia é importante?",
      autor: "/assets/gustavoImg.svg",
      nome_autor: "Gustavo",
      data_lançamento: "nov,05 2022",
      background: "bg-[url(/assets/amazonia.webp)]",
    },
    {
      tag: "Water",
      idNoticia: "/noticia/?id=TITULO4",
      titulo: "Como é o cenario brasileiro diante das crises hidricas?",
      autor: "/assets/veigaImg.svg",
      nome_autor: "Guilherme",
      data_lançamento: "nov,05 2022",
      background: "bg-[url(/assets/crisehidrica.webp)]",
    },
  ],
};
//Adiciona as noticias no site
window.onload = function criaMaisConteudos() {
  for (let i = 0; i < 4; i++) {
    var conteudinho =
      '<p class="Bg__frase frase__conteudo dentro__conteudo ' +
      conteudo.conteudos[i].tag +
      '">' +
      conteudo.conteudos[i].tag +
      "</p>";

    conteudinho +=
      '<h2 class="titulo__conteudo dentro__conteudo  mais__conteudoP">' +
      conteudo.conteudos[i].titulo +
      "</h2>";
    conteudinho +=
      '<div class="flex autorCompleto  items-center gap-x-1"><img src = "' +
      conteudo.conteudos[i].autor +
      '" alt class="autor__conteudo dentro__conteudo  ml-0 ">' +
      "</img>";

    conteudinho +=
      '<p class="nome_autor_conteudo">' +
      conteudo.conteudos[i].nome_autor +
      "</p></div>";
    conteudinho +=
      '<div class="flex relogio ">' +
      '<img src="/assets/img__relogio.svg" alt="" class="relogio__conteudo  relogio__teste ">' +
      '<p class="data__hora__conteudo ">' +
      conteudo.conteudos[i].data_lançamento +
      "</div>";
    conteudoCompleto =
      '<a href="' +
      conteudo.conteudos[i].idNoticia +
      '"class="imagem__conteudo ' +
      conteudo.conteudos[i].background +
      '">' +
      conteudinho +
      "</a>";
    $(".testa").append(conteudoCompleto);

    //Faz o evento de scrollar a aba dos conteudos em destaque
    var scroll = document.querySelector(".noticiasDestaque");
    scroll.scroll(0, 0);
    setTimeout(() => {
      for (let index = 0; index < 150; index++) {
        setTimeout(() => {
          scroll.scroll(index, 0);
        }, 100);
      }
    }, 0);
    setTimeout(() => {
      for (let index = 100; index > 0; index--) {
        setTimeout(() => {
          scroll.scroll(index, 0);
        }, 50);
      }
    }, 1000);
  }
};
