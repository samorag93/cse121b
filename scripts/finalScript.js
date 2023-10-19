import { getTriviaData } from './api.js';

let currentQuestionIndex = 0;
let triviaData = [];

const questionText = document.getElementById("question-text");
const optionsList = document.getElementById("options-list");
const nextButton = document.getElementById("next-button");

function displayQuestion() {
    const currentQuestion = triviaData[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    optionsList.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {
        const li = document.createElement("li");
        li.textContent = option;
        li.addEventListener("click", () => checkAnswer(index));
        optionsList.appendChild(li);
    });
}

async function loadTriviaData() {
    try {
        triviaData = await getTriviaData();
        displayQuestion();
    } catch (error) {
        console.error("Error fetching trivia data: ", error);
    }
}

function checkAnswer(selectedOption) {
    const currentQuestion = triviaData[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        // La respuesta es correcta
        alert("¡Respuesta correcta!");
    } else {
        // La respuesta es incorrecta
        alert("Respuesta incorrecta. Inténtalo de nuevo.");
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < triviaData.length) {
        displayQuestion();
    } else {
        alert("Has respondido todas las preguntas. ¡Juego terminado!");
        // Aquí puedes reiniciar el juego o realizar alguna otra acción
    }
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < triviaData.length) {
        displayQuestion();
    } else {
        alert("Has respondido todas las preguntas. ¡Juego terminado!");
        // Aquí puedes reiniciar el juego o realizar alguna otra acción
    }
});

loadTriviaData();
