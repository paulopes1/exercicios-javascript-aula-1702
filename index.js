//Exercicio 1: Arrow Function com um parâmetro
const dobro = (a) => a * 2;
console.log(dobro(7));

//Exercício 2: Arrow Function com múltiplos parâmetros
const dividir = (a, b) => a / b;
console.log(dividir(10, 2));

//Exercício 3: Arrow Function com múltiplas linhas
const mensagemBoasVindas = (nome) => {
    return `Seja bem vindo, ${nome}!`
}
console.log(mensagemBoasVindas("Carlos"));

//Exercício 4: Higher-Order Function personalizada

function executarOperacao(num1, num2, operacao) {
    return operacao(num1, num2);
}

console.log(executarOperacao(6, 3, (a, b) => a - b)); // 3
console.log(executarOperacao(4, 5, (a, b) => a * b)); // 20
console.log(executarOperacao(10, 2, (a, b) => a + b)); // 12
console.log(executarOperacao(9, 3, (a, b) => a / b)); // 3


//Exercício 5: map() – Transformação de um array
const precos = [100, 200, 300, 400];
const precosComDesconto = precos.map(num => num - ((100 * 10) / 100));
console.log(precosComDesconto); // [90, 180, 270, 360]

//Exercício 6: filter() – Filtrando valores em um array
const idades = [12, 25, 17, 30, 14, 19];
const menoresDeIdade = idades.filter(num => num < 18);
console.log(menoresDeIdade); // [12, 17, 14]

//Exercício 7: reduce() – Somando valores de um array
const numeros = [2, 3, 4, 5];
const produto = numeros.reduce((total, num) => total * num, 1);
console.log(produto); // 120 (pois 2 * 3 * 4 * 5 = 120)