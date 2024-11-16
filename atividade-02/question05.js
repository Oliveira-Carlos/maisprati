// question05.js
// 5. Calculando Valores em Arrays de Objetos
// ○ Objetivo: Crie um array de objetos alunos, cada um com propriedades
// nome, nota1, e nota2. Use for of para calcular a média das notas de cada
// aluno e exibir o nome do aluno junto com sua média.

const alunos = [
    { nome: "João", nota1: 8, nota2: 9 },
    { nome: "Maria", nota1: 7, nota2: 8 },
    { nome: "Pedro", nota1: 9, nota2: 7 },
    { nome: "José", nota1: 9, nota2: 10 },
    { nome: "Antonio", nota1: 6, nota2: 9 }
];

for (const aluno of alunos) {
    // Usando o reduce() para somar as notas
    const notas = [aluno.nota1, aluno.nota2];
    const soma = notas.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);

    const media = soma / notas.length;  // Calcula a média dividindo pelo número de notas
    console.log(`${aluno.nome} - Média: ${media.toFixed(1)}`);  // Exibe a média com 1 casa decimal
}

