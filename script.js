const answerForm = document.querySelector("#answer-form");
const answerInput = document.querySelector("#answer");
const feedback = document.querySelector("#feedback");
const correctAnswer = 17 * 8;

answerForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const enteredAnswer = Number(answerInput.value.trim());

  if (enteredAnswer === correctAnswer) {
    feedback.textContent = "Correct.";
  } else {
    feedback.textContent = "Try again.";
  }

  answerInput.focus();
});
