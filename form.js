const cardForm = document.querySelector('[data-js="card-form"]');
const cardsContainer = document.querySelector('[data-js="card-container"]');

const questionInput = document.querySelector('[data-js="question-input"]');
const maxLengthQuestion = questionInput.getAttribute("maxlength");
const questionCharLeft = document.querySelector(
  '[data-js="question-amounts-left"]'
);
const answerInput = document.querySelector('[data-js="answer-input"]');
const maxLengthAnswer = answerInput.getAttribute("maxlength");
const answerCharLeft = document.querySelector(
  '[data-js="answer-amounts-left"]'
);

function updateAmountLeft(input, element, maxLength) {
  input.addEventListener("input", () => {
    const remainingChars = maxLength - input.value.length;
    element.innerText = remainingChars;
  });
}

updateAmountLeft(questionInput, questionCharLeft, maxLengthQuestion);
updateAmountLeft(answerInput, answerCharLeft, maxLengthAnswer);

function createNewCard(data) {
  const cardItem = document.createElement("li");
  cardItem.classList.add("card-list__item");

  const card = document.createElement("article");
  card.classList.add("card");

  const question = document.createElement("h2");
  question.textContent = data.question;
  question.classList.add("card__question");

  const button = document.createElement("button");
  button.textContent = "Show Answer";
  button.setAttribute("type", "button");
  button.classList.add("card__button-answer");

  const answer = document.createElement("p");
  answer.textContent = data.answer;
  answer.classList.add("card__answer");

  const bookmark = createNewBookmark();

  console.log(bookmark);

  const tagList = document.createElement("ul");
  tagList.classList.add("card__tag-list");
  const tags = data.tags.split(", ");

  tags.forEach((tagText) => {
    const tag = document.createElement("li");
    tag.classList.add("card__tag-list-item");
    tag.textContent = tagText;
    tagList.append(tag);
  });

  card.append(question, bookmark, button, answer, tagList);
  cardItem.append(card);
  cardsContainer.append(cardItem);
}

function createNewBookmark() {
  const bookmarkContainer = document.createElement("div");
  bookmarkContainer.classList.add("card__button-bookmark");

  const bookmarkButton = document.createElement("button");
  bookmarkButton.classList.add("bookmark");
  bookmarkButton.setAttribute("type", "button");
  bookmarkButton.innerHTML = `<svg class="bookmark__icon" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24">
                                <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z" />
                              </svg>`;
  bookmarkContainer.append(bookmarkButton);
  return bookmarkContainer;
}

cardForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  createNewCard(data);
  event.target.reset();
});
