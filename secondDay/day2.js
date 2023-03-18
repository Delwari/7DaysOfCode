const nome = prompt("Qual é o seu nome?");
const age = prompt("Quantos anos você tem?");
const language = prompt("Qual linguagem de programação você está estudando?");

alert(`Olá ${nome} você tem ${age} anos e já está aprendendo ${language}!`);

const respost = prompt(`Você gosta de estudar ${language} \nResponda com o número 1 para SIM ou 2 para NÃO.`);

if (respost == "1") {
    alert("Muito bom! Continue estudando e você terá muito sucesso.");
} else if (respost == "2") {
    alert("Ahh que pena... Já tentou aprender outras linguagens?");
} else {
    alert("Você colocou uma resposta invalida");
};