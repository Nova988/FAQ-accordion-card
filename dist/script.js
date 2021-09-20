"use strict";

const answer = document.querySelectorAll(".answer");
const question = document.querySelectorAll(".question");
const questionText = document.querySelectorAll(".question-text");
const arrow = document.querySelectorAll(".arrow");

for (let i = 0; i < question.length; i++) {
  question[i].addEventListener("click", function () {
    for (let j = 0; j < answer.length; j++) {
      if (j === i) {
        answer[j].classList.toggle("hide");
        arrow[j].classList.toggle("rotate");
        questionText[j].classList.toggle("active");
      } else {
        answer[j].classList.add("hide");
        arrow[j].classList.remove("rotate");
        questionText[j].classList.remove("active");
      }
    }
  });
}
