// var contador = 0;
// const ligar = () => {
//   let btnEnviar = document.getElementById("btnEnviar");
//   let lampada = document.getElementById("div-lampada");

//   if (contador == 0) {
//     lampada.innerHTML = ` <img id="lampada" src="img/acesa.jpg" alt="Lâmpada"></img>`;

//     btnEnviar.innerHTML = "Apagar";
//     contador++;
//   } else {
//     lampada.innerHTML = ` <img id="lampada" src="img/apagada.jpg" alt="Lâmpada">`;
//     btnEnviar.innerHTML = "Acender";
//     contador--;
//   }
// };

let led = "ligar";

const ligar = () => {
  let btnEnviar = document.getElementById("btnEnviar");
  let imgLampada = document.getElementById("lampada");

  if (led == "ligar") {
    // lampada.innerHTML = `<img id="lampada" src="img/acesa.jpg" alt="Lâmpada">`;
    imgLampada.src = "./img/acesa.jpg"; // src = SOURCE = CAMINHO = LOCAL DO ARQUIVO
    imgLampada.alt = "Lampada acesa.";

    btnEnviar.innerHTML = "Apagar";
    led = "apagar";
  } else {
    // lampada.innerHTML = `<img id="lampada" src="img/apagada.jpg" alt="Lâmpada">`;
    imgLampada.src = "./img/apagada.jpg"; // src = SOURCE = CAMINHO = LOCAL DO ARQUIVO
    imgLampada.alt = "Lampada apagada.";

    btnEnviar.innerHTML = "Acender";
    led = "ligar";
  }
};

// const lampada = () => {

// };

// var quantImg = document.getElementById("inQtdImg").value;
// var canvas = document.getElementById("canvas");
// const gerarImagem = () => {
//   while (document.getElementById("canvas") == quantImg) {
//     canvas.innerHTML = "";
//     quantImg +=
//       canvas.innerHTML += `<img class="imagens" src="https://media.istockphoto.com/id/1067770436/photo/winter-background.jpg?s=612x612&w=0&k=20&c=eqkQwhi8D3W8beJyslc2mkhgzKPGGd-wctB3flKOPN8=" alt="">`;
//   }
// };

const gerarImagem = () => {
  let qtdImagem = document.getElementById("inQtdImg").value;
  let canvas = document.getElementById("canvas");
  canvas.innerHTML = "";

  for (let i = 0; i <= qtdImagem; i++) {
    canvas.innerHTML += `<img class="imagens" src="https://media.istockphoto.com/id/1067770436/photo/winter-background.jpg?s=612x612&w=0&k=20&c=eqkQwhi8D3W8beJyslc2mkhgzKPGGd-wctB3flKOPN8=">`;
  }
};



const validaForm = () => {
  //Dados coletados
  let inData = document.getElementById("inData").value;
  let inCli = document.getElementById("inCli").value;
  let inFone = document.getElementById("inFone").value;
  let inMail = document.getElementById("inMail").value;
  let inProd = document.getElementById("inProd").value;
  let inQtd = document.getElementById("inQtd").value;
  let inVal = document.getElementById("inVal").value;
  let msgErro = document.getElementById("mensagem-erro");

  msgErro.innerText = "";

  //Validando dados
  inData == "" && (msgErro.innerHTML += "Data inválida! <br>");
  inCli == "" && (msgErro.innerHTML += "Nome inválido!<br>");
  inCli.length < 3 && (msgErro.innerHTML += "Nome inválido!<br>");
  inFone == "" && (msgErro.innerHTML += "Telefone inválido! <br>");
  inMail == "" && (msgErro.innerHTML += "Email inválido! <br>");
  inMail < 6 && (msgErro.innerHTML += "Email inválido! <br>");
  inProd == "" && (msgErro.innerHTML += "Produto inválido! <br>");
  inProd < 6 && (msgErro.innerHTML += "Produto inválido! <br>");
  inQtd == "" && (msgErro.innerHTML += "Quantidade inválida! <br>");
  inQtd <= 0 && (msgErro.innerHTML += "Quantidade inválida! <br>");
  inVal == "" && (msgErro.innerHTML += "Valor inválido! <br>");
  inVal <= 0 && (msgErro.innerHTML += "Valor inválido! <br>");

  // mostrar | ocultar erro
  msgErro.innerText == ""
    ? ((msgErro.style.display = "none"), (msgErro.innerText = "enviado!"))
    : (msgErro.style.display = "block"),
    msgErro.classList.remove("verde");

  msgErro.innerText == "enviado!" &&
    ((msgErro.style.display = "block"),
    (msgErro.innerText = "Formulário enviado com sucesso!"),
    msgErro.classList.add("verde"));
};

// document.getElementById("mensagem-erro").style.display = "none";

// const validaForm = () => {
//   let data = document.getElementById("inData").value;
//   let cliente = document.getElementById("InCli").value;
//   let telefone = document.getElementById("inFone").value;
//   let email = document.getElementById("inMail").value;
//   let produto = document.getElementById("inProd").value;
//   let quantidade = document.getElementById("inQtd").value;
//   let valor = document.getElementById("inVal").value;
//   let erroMsg = document.getElementById("mensagem-erro");

//   //falta colocar a mensagem de erro como block (dps eu faço :D)
//   erroMsg.innerText = "";
// }

//   if (data == "") {
//     erroMsg.innerHTML += `<h2>Por favor, preencha todas as lacunas da Data. </h2> <br>`;
//   } else if (cliente == "") {
//     //&& cliente.length < 5) {
//     erroMsg.innerHTML += `<h2>Por favor, insira o nome do cliente que efetuará a compra. </h2> <br>`;
//   } else if (telefone == "") {
//     erroMsg.innerHTML += `<h2> Preencha o número de telefone corretamente<h2>.<br>`;
//   } else if (email == "") {
//     erroMsg.innerHTML += `<h2> Insira um email válido. </h2> <br>`;
//   } else if (produto == "") {
//     // && cliente.length < 5) {
//     erroMsg.innerHTML += `<h2>Insira o nome do produto corretamente.</h2> <br>`;
//   } else if (quantidade == "" && quantidade < 0) {
//     erroMsg.innerHTML += `<h2>Insira a quantidade do produto corretamente.</h2> <br>`;
//   } else if (valor == "") {
//     //&& valor < 0) {
//     erroMsg.innerHTML += `<h2>Insira o valor do produto corretamente.</h2> <br>`;
//   }
//   if (erroMsg.innerText == "") {
//     erroMsg.style.display = "none";
//   } else {
//     erroMsg.style.display = "block";
//   }
// };
const calcular = () => {
  let valPedido = document.getElementById("inValorPedido").value;
  let inPercDesc = document.getElementById("inPercDesc");
  let valorFinal = document.getElementById("inValFinal");
  let valDesc = document.getElementById("InValDesc");

  if (valPedido >= 2000) {
    inPercDesc.value = 1.5;
    valDesc.value = (valPedido * inPercDesc.value) / 100;
    valorFinal = valPedido - valDesc.value
  }
   else if (valPedido >= 1500) {
    inPercDesc.value = 1;
    valDesc.value = (valPedido * inPercDesc.value) / 100;
    valorFinal = valPedido - valDesc.value
  }
   else if (valPedido >= 1000) {
    inPercDesc.value = 0.8;
    valDesc.value = (valPedido * inPercDesc.value) / 100;
    valorFinal = valPedido - valDesc.value
  }
   else if (valPedido >= 500) {
    inPercDesc.value = 0.5;
    valDesc.value = (valPedido * inPercDesc.value) / 100;
    valorFinal = valPedido - valDesc.value
  }
};
