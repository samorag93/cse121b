const TRIVIA_API_URL = 'https://raw.githubusercontent.com/samorag93/cse121b/main/scripts/question.json';

let currentQuestionIndex = 0;
let triviaData = [];

const questionText = document.getElementById("question-text");
const optionsList = document.getElementById("options-list");
const nextButton = document.getElementById("next-button");

async function getTriviaData() {
    try {
        const response = await fetch(TRIVIA_API_URL);
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error("Error al obtener los datos de trivia: " + error);
    }
}

async function loadTriviaData() {
    try {
        triviaData = await getTriviaData();
        displayQuestion();
    } catch (error) {
        console.error("Error fetching trivia data: ", error);
    }
}

function displayQuestion() {
    const currentQuestion = triviaData[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    optionsList.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {
        const li = document.createElement("li");
        li.textContent = option;
        li.addEventListener("click", () => {
            checkAnswer(index); // Verifica la respuesta del usuario al hacer clic en una opción
        });
        optionsList.appendChild(li);
    });
}

function checkAnswer(selectedOption) {
    const currentQuestion = triviaData[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        // La respuesta es correcta
        alert("¡Respuesta correcta!");
    } else {
        // La respuesta es incorrecta
        alert("Respuesta incorrecta. La respuesta correcta es: " + currentQuestion.options[currentQuestion.answer]);
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
