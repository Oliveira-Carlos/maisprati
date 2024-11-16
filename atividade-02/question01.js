// question01.js
// 1. Acessando Propriedades de Objetos
// ○ Objetivo: Crie um objeto carro com propriedades como marca, modelo,
// ano, e cor. Use for in para iterar sobre as propriedades e exibir seus
// valores no console. 
const carro = {
    marca: 'Fiat',
    modelo: 'Uno',
    ano: 2000,
    cor: 'branco',
};
for (let propriedade in carro) {
    console.log(propriedade, carro[propriedade]);
}
