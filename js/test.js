let i = 0;

let wrong = 0;
let correct = 0;

let wrong_element = document.getElementById("wrong-element");
let correct_element = document.getElementById("correct-element");

updateCard();

function flipCard() {
  const card = document.getElementById("flashcard");

  if (card.style.transform === "rotateY(180deg)") {
    card.style.transform = "rotateY(0deg)";
  } else {
    card.style.transform = "rotateY(180deg)";
  }

  const answerElement = document.getElementById("answer-input");
  if (answerElement) {
    const answer = answerElement.value;
    i--;
    const cardData = JSON.parse(localStorage.getItem("Flashcard" + i));
    const correctAnswer = cardData.answer;
    i++;

    if (correctAnswer === answer) {
      correct++;
    } else {
      wrong++;
    }

    wrong_element.innerHTML = "Wrong: " + wrong;
    correct_element.innerHTML = "Correct: " + correct;
    answerElement.value = "";
  }
}

function updateCard() {
  if (localStorage.length < i + 1) {
    localStorage.setItem("wrong", wrong);
    localStorage.setItem("correct", correct);
    window.location.href = "score.html";
    return;
  }
  console.log(localStorage.length - 2);
  console.log(i + 1);
  console.log(wrong);
  const card = document.getElementById("flashcard");

  if (card.style.transform === "rotateY(180deg)") {
    card.style.transform = "rotateY(0deg)";
  }

  const question = document.getElementById("question");
  const answer = document.getElementById("answer");
  const hint = document.getElementById("hint");

  const cardData = JSON.parse(localStorage.getItem("Flashcard" + i));
  question.textContent = cardData.question;
  answer.textContent = cardData.answer;
  hint.textContent = cardData.hint;

  i++;
}
