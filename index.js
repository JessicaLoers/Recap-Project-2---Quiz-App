const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');
const answerButton = document.querySelector('[data-js="answer-button"]');
const answer = document.querySelector('[data-js="answer"]');

console.log("TextContent", answerButton.textContent);
console.log("InnerText", answerButton.innerText);
console.log("InnerHTML", answerButton.innerHTML);

bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("bookmark--active");
});

answerButton.addEventListener("click", () => {
  answer.classList.toggle("card__answer--active");
  console.log(answerButton.innerText.length);

  if (answerButton.innerText === "Show answer") {
    answerButton.innerText = "Hide Answer";
  } else {
    answerButton.innerText = "Show answer";
  }
});
