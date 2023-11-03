var testForm = document.getElementById("test-form");
const questions = document.getElementsByClassName("question");
const answers = document.getElementsByClassName("answer");
const hints = document.getElementsByClassName("hint");

function AddContainer() {
  testForm.innerHTML += `
    <div class="container">
        <div class="question-holder">
          <label>Question:</label>
          <input type="text" class="question" placeholder="Enter question" maxlength="100"/>
        </div>

        <div class="answer-holder">
          <label>Answer:</label>
          <input type="text" class="answer" placeholder="Enter answer" maxlength="150"/>
        </div>

        <div class="hint-holder">
          <label>Hint:</label>
          <input type="text" class="hint" placeholder="Enter hint" maxlength="150"/>
        </div>
      </div>`;
}

function Submit() {
  for (let i = 0; i < questions.length; i++) {
    const questionText = questions[i].value;
    const answerText = answers[i].value;
    const hintText = hints[i].value;

    localStorage.setItem(
      "Flashcard" + i,
      JSON.stringify({
        question: questionText,
        answer: answerText,
        hint: hintText,
      })
    );
  }
}
