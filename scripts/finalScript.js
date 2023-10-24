const TRIVIA_API_URL = 'https://raw.githubusercontent.com/samorag93/cse121b/main/scripts/question.json';

let currentQuestionIndex = 0;
let triviaData = [];

const questionText = document.getElementById("question-text");
const optionsList = document.getElementById("options-list");
const nextButton = document.getElementById("next-button");
const prevButton = document.getElementById("prev-button");
let lastQuestion= -1;


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

const scoreLabel = document.getElementById("score");
const hintLabel = document.querySelector(".hint");

let score = 0;

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
        li.addEventListener("mouseover", () => {
            li.style.cursor = "pointer";
        })
        optionsList.appendChild(li);
    });
    updateScore();
    const resultLabel = document.getElementById("result-label");
    const hintLabel = document.querySelector(".hint");
    resultLabel.style.display = "none";
    hintLabel.style.display = "none";
}

let answered = false;


let lastIncorrectQuestion = -1; 
let lastAnsweredQuestion = -1;

function checkAnswer(selectedOption) {
    const currentQuestion = triviaData[currentQuestionIndex];
    const resultLabel = document.querySelector("#result-label");
    const hintLabel = document.querySelector(".hint");
    
    if (currentQuestionIndex !== lastAnsweredQuestion) {
        if (selectedOption === currentQuestion.answer) {
            resultLabel.textContent = "Correct Answer!";
            resultLabel.style.display = "block";
            hintLabel.style.display = "none";
            score++;
        } else {
            resultLabel.textContent = `Wrong answer, the correct answer is: ${currentQuestion.options[currentQuestion.answer]}`;
            resultLabel.style.display = "block";
            hintLabel.textContent = `Track: ${currentQuestion.track}`;
            hintLabel.style.display = "block";
            lastIncorrectQuestion = currentQuestionIndex; 
        }
        answered = true;
        updateScore();
    } else {
        resultLabel.textContent = "You already answered this question";
        resultLabel.style.display = "block";
        hintLabel.style.display = "none";
    }
    lastAnsweredQuestion = currentQuestionIndex; 
}


function nextQuestion() {
    answered = false;
    currentQuestionIndex++;
    if (currentQuestionIndex < triviaData.length) {
        displayQuestion();
    } else {
        displayEndMessage();
    }
}


function updateScore() {
    const scoreLabel = document.querySelector("#score");
    scoreLabel.textContent = `${score}`;
}

prevButton.addEventListener("click", () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
        const resultLabel = document.getElementById("result-label");
        resultLabel.style.display = "none"; 
    }
});

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < triviaData.length) {
        displayQuestion();
    } else {
        if (score < 5) {
            alert("Your score is too low try again");
        }else {
            alert("You have finished the Game, well done!");
        // Aquí puedes reiniciar el juego o realizar alguna otra acción
        }
    }
});




loadTriviaData();
