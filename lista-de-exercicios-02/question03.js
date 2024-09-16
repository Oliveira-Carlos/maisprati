// question03.js
// 3. Filtrando Propriedades de Objetos
// ○ Objetivo: Dado um objeto produto com várias propriedades, crie uma
// função que retorna um novo objeto contendo apenas as propriedades cujo
// valor seja maior que um valor específico. Use for in para filtrar as
// propriedades.

const produto = {
    nome: 'O Hobbit',
    editora: 'HarperCollins',
    capa: 'capa dura',
    preco: 30.0
};
function produtoFiltrado(produto, valor) {
    let novoProduto = {};
    for (let propriedade in produto) {
        if (produto[propriedade] > valor) {
            novoProduto[propriedade] = produto[propriedade];
        }
    }
    return novoProduto;
}
// filtar valor maior que 10.0
console.log(produtoFiltrado(produto, 10.0));

