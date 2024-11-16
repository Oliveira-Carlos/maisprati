// question02.js
// 2. Verificando Propriedades
// ○ Objetivo: Crie um objeto livro com propriedades titulo, autor,
//     anoPublicacao e genero.Verifique se a propriedade editora existe no
// objeto usando for in.Se não existir, adicione essa propriedade ao objeto. 
const livro = {
    titulo: 'O Hobbit',
    autor: 'J.R.R. Tolkien',
    anoPublicacao: 1937,
    genero: 'Fantasia'
};
function verificarEditora(livro) {
    for (let propriedade in livro) {
        if (propriedade === 'editora') {
            console.log('A propriedade editora já existe no objeto livro.');
        } else {
            livro.editora = 'HarperCollins';
            console.log('A propriedade editora foi adicionada ao objeto livro.');
            return
            // usei return para "matar" a função depois que adiciona a propriedade editora.
        }
    }
}
verificarEditora(livro);
// imprimir objeto livro
console.log(livro);
