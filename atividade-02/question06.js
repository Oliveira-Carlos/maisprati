// question06.js
// 6. Filtrando Arrays de Objetos
// ○ Objetivo: Crie um array de objetos funcionarios, onde cada objeto
// contém informações como nome, cargo, e salario. Use for of para filtrar
// e exibir apenas os funcionários cujo salário seja maior que um valor
// específico.

function funcionarios() {
    let funcionarios = [
        {
            nome: 'João', cargo: 'Tech Lead', salario: 8500
        },
        {
            nome: 'Maria', cargo: 'Desenvolvedora Full Stack', salario: 7000
        },
        {
            nome: 'Pedro', cargo: 'Estagiário de Suporte', salario: 1500
        },
        {
            nome: 'Ana', cargo: 'DevOps Engineer', salario: 9500
        },
        {
            nome: 'Carlos', cargo: 'CTO', salario: 12000
        },
    ];

    let salarioMinimo = 5000;

    for (let funcionario of funcionarios) {
        if (funcionario.salario > salarioMinimo) {
            console.log(`Funcionário: ${funcionario.nome}, Cargo: ${funcionario.cargo}, Salário: R$ ${funcionario.salario}`);
        }
    }
}

funcionarios();

