let displayValue = ''; // Inicializa a variável 'displayValue' com uma string vazia; será usada para armazenar o valor atual do display da calculadora

function DigitarNoDisplay(value) { // Função chamada ao digitar um número ou operador no display
    displayValue += value; // Adiciona o valor digitado ao 'displayValue'
    updateDisplay(); // Atualiza o display da calculadora com o novo valor
} 

function LimpaDisplay() { // Função para limpar o display da calculadora
    displayValue = ''; // Reseta 'displayValue' para uma string vazia
    updateDisplay(); // Atualiza o display para refletir o valor limpo
} 

function Resultado() { // Função para calcular e exibir o resultado da expressão matemática
    try { // Tenta executar a operação matemática
        const result = eval(displayValue); // Avalia a expressão contida em 'displayValue' e armazena o resultado
        displayValue = result.toString(); // Converte o resultado para string e atualiza 'displayValue'
        updateDisplay(); // Atualiza o display com o resultado
    } catch (error) { // Captura erros, caso a expressão seja inválida
        displayValue = 'Error'; // Define 'displayValue' como 'Error' se houver um erro
        updateDisplay(); // Atualiza o display para mostrar o erro
    }
} 

function updateDisplay() { // Função para atualizar o valor exibido no display da calculadora
    const Display = document.getElementById('Display'); // Obtém o elemento de entrada com o id 'Display'
    Display.value = displayValue; // Define o valor do display como o valor atual de 'displayValue'
}
