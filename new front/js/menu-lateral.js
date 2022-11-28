//Pega o botão e o menu lateral
var botaoMenu = document.querySelector(".menu");
var botaoExcluir = document.querySelector(".fechar");

//Adiciona os eventos de mostrar o menu-lateral
botaoMenu.addEventListener("click", () => {
  var menu_lateral = document.querySelector(".menu-lateral");
  menu_lateral.classList.add("menu-lateral-ativo");
});

//Adiciona o evento de esconder o menu-lateral
botaoExcluir.addEventListener("click", () => {
  var menu_lateral = document.querySelector(".menu-lateral");
  menu_lateral.classList.remove("menu-lateral-ativo");
});
