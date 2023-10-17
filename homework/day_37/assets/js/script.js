import { client } from "./client.js";

//Khai báo
const container = document.querySelector(".container");

const totalQuestionsEL = container.querySelector(".total-question");
const currentQuestionEL = container.querySelector(".current-question");
const question = container.querySelector(".question");
const questionContent = question.querySelector(".content p");
const questionAnswer = question.querySelectorAll(".answer p");
const streakEL = container.querySelector(".streak");
const scoreEL = container.querySelector(".score span");
//
//Đếm thời gian

//

//Tạo thứ tự bộ câu hỏi ngẫu nhiên từ 1 đến 10
function getRandomArray(length) {
  const randomArray = [];
  while (randomArray.length < length) {
    const randomNum = Math.ceil(Math.random() * length);
    if (!randomArray.includes(randomNum)) {
      randomArray.push(randomNum);
    }
  }
  return randomArray;
}
const totalQuestions = 10;
totalQuestionsEL.innerText = totalQuestions;

const listQuestions = getRandomArray(totalQuestions);

// Hiện câu hỏi
let currentQuestion;
let currentCorrectAnswer;
let isLoading = false;
const getQuestion = async (id) => {
  // loading...
  isLoading = true;

  // Nhận câu hỏi
  await client
    .get(`/questions/${id}`)
    .then(({ data }) => {
      questionContent.innerText = data.question;
      Array.from(questionAnswer).forEach((answer, index) => {
        //reset giao diện
        let background = answer.previousElementSibling;
        background.style.backgroundColor = "black";
        background.style.opacity = 0.5;
        // đếm câu
        currentQuestionEL.innerText = totalQuestions - listQuestions.length;
        answer.innerText = data.options[index];

        // Lưu đáp án
        currentCorrectAnswer = data.correctOption;
      });
    })
    .catch((err) => {
      console.log(err);
    });
  // Done
  isLoading = false;
};

const handleCurrentQuestion = () => {
  currentQuestion = listQuestions.shift();
};
handleCurrentQuestion();
getQuestion(currentQuestion);
//

// Check đáp án
Array.from(questionAnswer).forEach((answer, index) => {
  answer.addEventListener("click", (e) => {
    const background = e.target.previousElementSibling;
    if (!isLoading) {
      if (index == currentCorrectAnswer) {
        background.style.backgroundColor = "green";
        background.style.opacity = 1;
        // Tính điểm
        handleScore();
        streak++;
        handleStreakEL();
      } else {
        background.style.backgroundColor = "red";
        background.style.opacity = 1;
        // Tính điểm
        streak = 0;
        handleStreakEL();
      }
      handleCurrentQuestion();
      getQuestion(currentQuestion);
    }
  });
});
//

//Tính streak
let streak = 0;
const handleStreakEL = () => {
  Array.from(streakEL.children).forEach((item, index) => {
    if (index + 1 <= streak) {
      item.style.backgroundColor = "orange";
    }
  });
};
//

// Tính điểm
let score = 0;
let handleScore = () => {
  score += 100 + streak * 100;
  scoreEL.innerText = score;
};
//
