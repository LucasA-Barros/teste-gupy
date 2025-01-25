const readline = require('readline');

/**
 * Questão 1
 */
function question1() {
    const INDICE = 13;
    let soma = 0;
    let k = 0;

    for(k ; k < INDICE; ) {
        k++;
        soma = soma + k;
    }

    console.log('########################################');
    console.log('Question 1: ', `O valor da soma é ${soma}`);
    console.log('########################################');
}
question1();


/**
 * Questão 2
 */
const question2 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

question2.question('Digite um número: ', (my_number) => {
    calculateFibonacci(my_number);
    question2.close();
});

function calculateFibonacci(my_number) {
    let firstValue = 0;
    let secondValue = 1;
    const fibonacci = [];
    const MY_NUMBER = my_number;

    fibonacci.push(firstValue);
    fibonacci.push(secondValue);
    do {
        secondValue = firstValue + secondValue;
        firstValue = secondValue - firstValue;
        fibonacci.push(secondValue);
    } while((firstValue + secondValue) <= MY_NUMBER);

    
    console.log('#############################################################');
    // console.log('Fibonacci: ', fibonacci);
    // console.log('Last result: ', secondValue);
    console.log('Question 2: ', `O número ${MY_NUMBER} ${secondValue < MY_NUMBER ? 'não faz parte da sequencia Fibonacci' : 'faz parte da sequencia Fibonacci'}`);
    console.log('#############################################################');
}
// Usar a chamada abaixo em caso de não possuir o Node instalado
// calculateFibonacci(55);


/**
 * Questão 3
 */
function question3() {
    const faturamento = {
        "_202501": [
            { "dia": "2025-01-02", "valor": 1200.50 },
            { "dia": "2025-01-03", "valor": 1350.75 },
            { "dia": "2025-01-06", "valor": 980.30 },
            { "dia": "2025-01-07", "valor": 1120.90 },
            { "dia": "2025-01-08", "valor": 1450.00 },
            { "dia": "2025-01-09", "valor": 1600.40 },
            { "dia": "2025-01-10", "valor": 1725.60 },
            { "dia": "2025-01-13", "valor": 1100.80 },
            { "dia": "2025-01-14", "valor": 1255.20 },
            { "dia": "2025-01-15", "valor": 1380.95 },
            { "dia": "2025-01-16", "valor": 1489.30 },
            { "dia": "2025-01-17", "valor": 1535.40 },
            { "dia": "2025-01-20", "valor": 1205.70 },
            { "dia": "2025-01-21", "valor": 1320.00 },
            { "dia": "2025-01-22", "valor": 1405.55 },
            { "dia": "2025-01-23", "valor": 1590.20 },
            { "dia": "2025-01-24", "valor": 1625.30 },
            { "dia": "2025-01-27", "valor": 1350.90 },
            { "dia": "2025-01-28", "valor": 1455.75 },
            { "dia": "2025-01-29", "valor": 1550.40 },
            { "dia": "2025-01-30", "valor": 1700.50 },
            { "dia": "2025-01-31", "valor": 1755.80 },
        ]
    };
      
    let values = faturamento._202501.map(obj => obj.valor);

    let highestValue = Math.max(...values);
    let lowestValue = Math.min(...values);
    let totalValue = values.reduce((acc, obj) => acc + obj, 0);
    let averageValue = parseFloat((totalValue/values.length).toFixed(2));
    let aboveAverageValues = values.filter(obj => obj > averageValue);

    
    console.log('#############################################################');
    console.log('Maior faturamento: ', `R$${highestValue}`);
    console.log('Menor faturamento', `R$${lowestValue}`);
    console.log('Média mensal: ', `R$${averageValue}`);
    console.log('Dias com faturamento acima da média mensal: ', aboveAverageValues.length);
    console.log('#############################################################');
}
question3();


/**
 * Questão 4
 */
function question4() {
    const faturamento = {
        SP: 67836.43,
        RJ: 36678.66,
        MG: 29229.88,
        ES: 27165.48,
        Outros: 19849.53
    }

    let totalValue = Object.values(faturamento).reduce((acc, val) => acc + val, 0);

    
    console.log('#############################################################');
    Object.keys(faturamento).forEach(uf => {
        console.log(`${uf} faturou ${faturamento[uf]} e sua representação foi de ${(faturamento[uf]*100/totalValue).toFixed(2)}%.`)
    });
    console.log('#############################################################');
}
question4();

/**
 * Questão 5
 */
const question5 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

question5.question('Digite uma string qualquer: ', (my_string) => {
    customReverse(my_string)
    question5.close();
});

function customReverse(my_string) {
    let str = '';

    for(j=my_string.length-1; j >= 0; j--) {
        str+= my_string[j]
    }

    console.log(str);
}
// Usar a chamada abaixo em caso de não possuir o Node instalado
// customReverse('sua frase);