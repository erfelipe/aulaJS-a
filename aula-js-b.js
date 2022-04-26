let nomes = ["Eduardo", "Antônio", "Marta", "José", "Helena"];

for (let n of nomes) {
	console.log("Nome cadastrado: ", n);
}

//--------------
nomes.forEach( (item) => console.log(item) );
//--------------

for (let i = 0; i < nomes.length; i++) {
	console.log(nomes[i].toLowerCase());
}

let produtos = ["lapis", "borracha", "caneta" ];
console.log(produtos[-1]);