const divmanipula = document.getElementById("manipula");


function mudarTamanho() {
    divmanipula.style.fontSize = "30px";
}
function corDaFonte() {
    divmanipula.style.color = "#8B008B";
}
function corDoFundo() {
    divmanipula.style.backgroundColor = "#D8BFD8";
}
function deixarItalico() {
    divmanipula.style.fontStyle = "italic";
}
function fonteNegrito() {
    divmanipula.style.fontWeight = "bold";
}
function adicionarBorda() {
    divmanipula.style.border = " 3px solid #696969";
}
function tirarBorda() {
    divmanipula.style.border = "none";
}
function esconderDiv() {
    divmanipula.style.display = "none";
}
function reaparecerDiv() {
    divmanipula.style.display = "block";
}
function textoHtml() {
  document.getElementsByClassName("chamada")[1].innerHTML = "Nãoooooooooo!"
}
function corParagrafo() {
    divmanipula.getElementsByClassName("paragrafo")[0].style.backgroundColor = "blue";
}
function corBotao() {
    
    document.getElementsByTagName("button")[6].style.backgroundColor = "lightblue";
}
function corTodosBotoes() {
   const divbotoes = document.getElementById("botoes");
   var botoes = divbotoes.getElementsByTagName ("button");
   var  i;
    for ( i = 0; i < botoes.length; i++) {
        botoes[i].style.backgroundColor = "lightgreen";
        
    }
}
function contaClasse(){
    let qtndBotoes = document.getElementById("botoes").getElementsByTagName("button").length;
    divmanipula.innerHTML = qtndBotoes;
    alert(`a quantidade de botoes é ${qtndBotoes}`)
}
function htmlClasse(texto){
    let textoInserido = texto;
    document.querySelector("p.paragrafo").innerHTML = textoInserido;
}
function fundoPagina(){
    document.querySelector("body").style.backgroundColor = "#D8BFD8	"
}
function alterarImagem(){
    document.querySelector("img").src = "./img/alien.jpg";
}
function acionarFuncoes(){
    mudarTamanho();
    corDaFonte();
    corDoFundo();
    deixarItalico();
    fonteNegrito();
    adicionarBorda();
    alterarImagem();
    fundoPagina();
    htmlClasse('Mudar o texto para o botão 19');
}