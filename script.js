function clearDisplay() {
    document.getElementById('display').value = '';
} //Define uma função que limpa o display ao definir seu valor (value) como uma string vazia

function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0,-1);
} //Define uma função que apaga o último caractere do display. slice(0, -1) remove o último caractere da string no display.

function clearIfError() {
    const display = document.getElementById('display');
    if (display.value === 'Error') {
        display.value = '';
    }
}

function appendToDisplay(value) {
    clearIfError(); // Verifica e limpa a mensagem de erro antes de adicionar um novo valor
    document.getElementById('display').value += value;
} //Define uma função que adiciona um valor (número ou operador) ao final do valor atual no display.


function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value); //Define uma função que calcula a expressão no display usando a função eval()
    } catch {
        display.value = 'Error';
    }
} //try e catch é usado para capturar e lidar com erros na expressão (como 2++2), mostrando Error no display se a expressão for inválida.