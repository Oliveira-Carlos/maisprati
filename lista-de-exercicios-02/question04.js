// question04.js
// 4. Iterando Sobre Arrays de Objetos
// ○ Objetivo: Crie um array de objetos pessoas, onde cada objeto representa
// uma pessoa com nome, idade, e cidade. Use for of para exibir as
// informações de cada pessoa no console.
const pessoas = [
    {
        nome: 'Jose', idade: 45, cidade: 'São Paulo'
    },
    {
        nome: 'Maria', idade: 38, cidade: 'Rio de Janeiro'
    },
    {
        nome: 'Pedro', idade: 23, cidade: 'Fortaleza'
    },
];
// Usando for of para iterar sobre o array de objetos
for (const pessoa of pessoas) {
    console.log(pessoa);
}
