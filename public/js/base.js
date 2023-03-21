const nome = "Marcelo Eltz";
let nome2 = "";

console.log("valor inicial:");
console.log(nome2);

nome2 = "Pedro Silva";

console.log("valor alterado:");
console.log(nome2);

function alterarNome() {
	nome2 = "Maria Silva";
	console.log("valor alterado:");
	console.log(nome2);
}


function recebeEalteraNome(novoNome) {
	nome2 = novoNome;
	console.log("valor alterado recebendo um nome");
	console.log(nome2);
}

recebeEalteraNome("João Silva Pereira");
recebeEalteraNome("Maria Silva");

function imprimirPessoa(pessoa) {
	console.log("nome:");
	console.log(pessoa.nome);

	console.log("idade:");
	console.log(pessoa.idade);

	console.log("trabalho:");
	console.log(pessoa.trabalho);

}

imprimirPessoa();

function adicionarPessoa(pessoa) {
	pessoa.push(pessoa);
}

console.log(pessoa);

function adicionarPessoa({
	nome: "Pedro Silva",
	idade: "28",
	trabalho: "Porteiro"

})