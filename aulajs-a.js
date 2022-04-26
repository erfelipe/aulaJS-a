let nomes = []; //um array vazio
nomes.push("Unifei");
nomes.push("Ufmg");
let lixo = nomes.pop();

console.log(nomes);
console.log(nomes.length);
console.log(lixo);

let discp = ["Português", "Lógica", "Matemática", 123];

for (let [indice, disc] of discp.entries()) {
  console.log("O conteudo", disc, "está no índice: ", indice);
}

let precos = [300.3, 249, 100.5];
let precosDescontados = precos.map((p) => {
  let desconto = p * 0.1;
  return p - desconto;
});
console.log(precos);
console.log(precosDescontados);

let Pessoa = {
  nome: "Fulano Ribeiro",
  idade: 20,
  telefone: "88 9 7777 5555",
};
console.log(Pessoa);
console.log(Pessoa.nome);
console.log(Pessoa["nome"]);
console.log(Pessoa["telefone"]);
console.log((Pessoa.email = "teste@teste.com"));
console.log(Pessoa);

let aluno = {
  nome: "Rodrigo",
  sobrenome: "Andrade",
  idade: 31,
  endereco: {
    rua: "Alameda exemplo",
    numero: 213,
  },
};

let { nome, sobrenome } = aluno;
let nome2 = aluno.nome;
let {
  endereco: { rua },
} = aluno;
console.log(nome, sobrenome, nome2, rua);

let x = "123" + 10; //retorna “12310”
console.log(typeof x); //retorna ‘string’

let y;
y = "texto" * 1; //retorna NaN (Not a Number)
console.log(y);

console.log(typeof aluno);

//operador ternario
let resultado = 5 > 3 ? "Maior" : "Menor";
console.log(resultado);

let resp = soma(3, 3);
console.log(resp);

function soma(x, y) {
  let resp = x + y;
  return resp;
}

// function mensagens() {

//   setTimeout(function () {
//     console.log("Primeira mensagem");
//   }, 2000);
  
//   setTimeout( () => {
//     console.log("Segunda mensagem");
//   }, 3000);
  
//   setTimeout(function () {
//     console.log("Terceira mensagem");
//   }, 1000);

// }

// mensagens();

function selecionaParagrafos() {
  const textos = document.querySelectorAll("p");
  let listaImpressao = Array.from(textos);
  listaImpressao.map((p) => console.log(p.innerText));
} 

selecionaParagrafos();


console.log(document.getElementsByTagName("h2"));

