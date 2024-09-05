prompt = require("prompt-sync")()

// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
// utilizando uma estrutura de controle if.
// let evenOrOdd = prompt("digite um número para saber se ele é par ou impar")
// if (evenOrOdd % 2 == 0) {
//     console.log(`${evenOrOdd} é par`)
// } else {
//     console.log(`${evenOrOdd} é impar`)
// }

// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
// adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
// controle if-else.
// let userAge = prompt("digite sua idade para saber qual a sua faixa etária")
// if (userAge >= 0 && userAge <= 12) {
//     console.log("Você é uma criança")
// } else if (userAge >= 13 && userAge <= 17) {
//     console.log("Você é um adolescente")
// } else if (userAge >= 18 && userAge <= 59) {
//     console.log("Você é um adulto")
// } else if (userAge >= 60) {
//     console.log("Você é um idoso")
// } else {
//     console.log("idade invalida")
// }

// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.
// let grade = prompt("digite sua nota para saber se está aprovado ou reprovado")
// if (grade >= 7) {
//     console.log("Aprovado")
// } else if (grade >= 4) {
//     console.log("Recuperação")
// } else {
//     console.log("Reprovado")
// }

// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.
// const options = {
//     "1": "pizza",
//     "2": "lasanha",
//     "3": "bolo de chocolate"
// };

// const userOption = prompt(`Escolha uma opção:
//     1 - ${options["1"]}
//     2 - ${options["2"]}
//     3 - ${options["3"]}`);

// const userChoice = options[userOption];

// switch (userOption) {
//     case "1":
//         console.log(`Você escolheu ${userChoice}`)
//         break;
//     case "2":
//         console.log(`Você escolheu ${userChoice}`)
//         break;
//     case "3":
//         console.log(`Você escolheu ${userChoice}`)
//         break;
//     default:
//         console.log("Opção inválida")
// }

// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.
// // Request the weight and height from the user
// let weightUser = prompt("Enter the weight (kg):");
// let heightUser = prompt("Enter the height (m):");

// // Replace comma with dot in the height input
// heightUser = parseFloat(heightUser.replace(',', '.'));
// weightUser = parseFloat(weightUser.replace(',', '.'));

// // Check if the input values are valid
// if (isNaN(weightUser) || weightUser <= 0 || isNaN(heightUser) || heightUser <= 0) {
//     console.log("Invalid input. Please enter positive numbers for weight and height.");
// } else {
//     // Calculate the BMI
//     let bmi = weightUser / (heightUser * heightUser);

//     // Classify the BMI and display the result
//     if (bmi < 18.5) {
//         console.log("BMI: " + bmi.toFixed(2) + " - Category: Underweight");
//     } else if (bmi >= 18.5 && bmi <= 24.9) {
//         console.log("BMI: " + bmi.toFixed(2) + " - Category: Normal weight");
//     } else if (bmi >= 25 && bmi <= 29.9) {
//         console.log("BMI: " + bmi.toFixed(2) + " - Category: Overweight");
//     } else if (bmi >= 30 && bmi <= 34.9) {
//         console.log("BMI: " + bmi.toFixed(2) + " - Category: Obesity grade I");
//     } else if (bmi >= 35 && bmi <= 39.9) {
//         console.log("BMI: " + bmi.toFixed(2) + " - Category: Obesity grade II");
//     } else if (bmi >= 40) {
//         console.log("BMI: " + bmi.toFixed(2) + " - Category: Obesity grade III");
//     }
// }


// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.
// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)
// let sideA = prompt("Enter the first side (A):");
// let sideB = prompt("Enter the second side (B):");
// let sideC = prompt("Enter the third side (C):");
// sideA = parseFloat(sideA.replace(',', '.'));
// sideB = parseFloat(sideB.replace(',', '.'));
// sideC = parseFloat(sideC.replace(',', '.'));
// // Check if the input values are valid
// if (isNaN(sideA) || sideA <= 0 || isNaN(sideB) || sideB
//     <= 0 || isNaN(sideC) || sideC <= 0) {
//     console.log("Invalid input. Please enter positive numbers for the sides.");
// } else {
//     // Check if the sides form a triangle
//     if (sideA < sideB + sideC && sideB < sideA + sideC
//         && sideC < sideA + sideB) {
//         // Check the type of triangle
//         if (sideA === sideB && sideB === sideC) {
//             console.log("The triangle is equilateral.");
//         } else if (sideA === sideB || sideA === sideC || sideB ===
//             sideC) {
//             console.log("The triangle is isosceles.");
//         } else if (sideA !== sideB && sideB !== sideC) {
//             console.log("The triangle is scalene.");
//         }
//     } else {
//         console.log("The sides do not form a triangle.");
//     }
// }

// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.
// let purchasedApples = prompt("Enter the number of apples purchased:")
// purchasedApples = Number(purchasedApples)
// let pricePerApple = 0.3
// let totalPrice = null
// if (purchasedApples >= 12) {
//     pricePerApple = 0.25
//     totalPrice = purchasedApples * pricePerApple
// } else {
//     totalPrice = purchasedApples * pricePerApple
// }
// console.log(`the total price of the apples is ${totalPrice}`);


// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.
// let num1 = prompt("Enter the first number:")
// let num2 = prompt("Enter the second number:")
// num1 = parseFloat(num1.replace(',', '.'))
// num2 = parseFloat(num2.replace(',', '.'))
// if (num1 < num2) {
//     console.log(num1, num2)
// } else {
//     console.log(num2, num1)
// }

// 9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console
// utilizando um loop for.
// for (let i = 10; i >= 1; i--) {
//     console.log(i);
// }

// 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
// let number = prompt("Enter a number:")
// number = parseInt(number)
// for (let i = 0; i < 10; i++) {
//     console.log(number)
// }


// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.
// let numbers = []
// for (let i = 0; i < 5; i++) {
//     let number = prompt(`Enter the ${i + 1} number: `)
//     number = parseFloat(number.replace(',', '.'))
//     numbers.push(number)
// }
// let sum = numbers.reduce((a, b) => a + b, 0)
// console.log(sum)

// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
// 10) utilizando um loop for.
// let number = prompt("Enter a number:")
// number = parseInt(number)
// for (let i = 1; i <= 10; i++) {
//     console.log(`${number} x ${i} = ${number * i}`)
// }


// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.
// let numbers = []
// let sum = 0
// while (true) {
//     let number = prompt("Enter a number (0 to stop): ")
//     number = parseFloat(number.replace(',', '.'))
//     if (number === 0) {
//         break
//     }
//     numbers.push(number)
//     sum += number
// }
// let average = sum / numbers.length
// console.log(average)

// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.
// let numberUser = Number(prompt("enter a number to find out its factorial"))
// let factorial = 1
// let i = 1
// while (i <= numberUser) {
//     factorial *= i
//     i++
//     }
//     console.log(factorial)

// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for.
// let sequence = [0, 1]
// for (let i = 2; i < 10; i++) {
//     sequence.push(sequence[i - 1] + sequence[i - 2])
//     }
//     console.log(sequence) 
