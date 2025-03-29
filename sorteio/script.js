const generateBtn = document.querySelector(".generate-button");

function generateRandomNumber() {
    let resultElement = document.getElementById("result");
    let countdownElement = document.getElementById("countdown"); // Adicione um ID no HTML para exibir o contador

    const minValue = parseInt(document.querySelector(".min-value").value);
    const maxValue = parseInt(document.querySelector(".max-value").value);

    // Validações
    if (isNaN(minValue) || isNaN(maxValue)) {
        alert("Please enter valid numerical values.");
        return;
    }

    if (minValue >= maxValue) {
        alert("The minimum value must be smaller than the maximum value.");
        return;
    }

    // Inicia a contagem regressiva
    let timeLeft = 5;
    countdownElement.innerHTML = `Sorteando em: ${timeLeft}s`;

    let countdownInterval = setInterval(() => {
        timeLeft--;
        countdownElement.innerHTML = `Sorteando em: ${timeLeft}s`;

        if (timeLeft === 0) {
            clearInterval(countdownInterval);
        }
    }, 1000);

    // Executa o sorteio após 5 segundos
    setTimeout(() => {
        const randomNum = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
        resultElement.innerHTML = `Número Sorteado: <strong>${randomNum}</strong>`;
        countdownElement.innerHTML = ""; // Remove o contador após o sorteio
    }, 5000);
}

generateBtn.addEventListener("click", generateRandomNumber);
