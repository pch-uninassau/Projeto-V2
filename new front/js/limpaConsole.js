//Quando a pagina carrega chama a função limpa console
window.onload(limpaConsole());

//faz uma função para limpar o console 1 segundo apos ser carregada 
function limpaConsole() {
  setTimeout(() => {
    console.clear();
  }, 3000);
}
