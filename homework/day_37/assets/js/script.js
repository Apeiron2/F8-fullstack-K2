import { client } from "./client.js";

//Khai báo
const container = document.querySelector(".container");

const totalQuestionsEL = container.querySelector(".total-question");
const currentQuestionEL = container.querySelector(".current-question");
const question = container.querySelector(".question");
const questionContent = question.querySelector(".content p");
const questionAnswer = question.querySelectorAll(".answer p");

const timeCounter = container.querySelector(".time-container");
const timeInner = timeCounter.querySelector(".time");

const streakEL = container.querySelector(".streak");
const scoreEL = container.querySelector(".score span");
//
//Đếm thời gian
const time = 30 * 1000;
let countDown;

let startCountDown = (duration) => {
  let timeLeft = duration;
  countDown = setInterval(() => {
    if (timeLeft <= 0) {
      // Bỏ qua, hết thời gian -> tính là sai
      clearInterval(countDown);
      streak = 0;
      getQuestion();
    } else {
      timeLeft -= 10;
    }
    timeInner.style.width = `${(timeLeft / duration) * 100}%`;
  }, 10);
};
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
const getQuestion = async () => {
  currentQuestion = listQuestions.shift();
  // loading...
  isLoading = true;

  // Nhận câu hỏi
  await client
    .get(`/questions/${currentQuestion}`)
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
      console.log(`Lỗi getQuestion: ${err}`);
    });
  // Done

  startCountDown(time);
  isLoading = false;
};

getQuestion();
//

// Check đáp án
Array.from(questionAnswer).forEach((answer, index) => {
  answer.addEventListener("click", (e) => {
    if (!isLoading) {
      let results = index == currentCorrectAnswer;
      // Dừng tính giờ
      if (countDown) clearInterval(countDown);

      const background = e.target.previousElementSibling;
      background.style.backgroundColor = results ? "green" : "red";
      background.style.opacity = 1;
      if (results) handleScore();

      // Tính điểm xong mới tính streak cho câu sau
      streak = results ? streak + 1 : 0;
      handleStreakEL();
      getQuestion();
    }
  });
});

//

//Tính streak
let streak = 0;
const handleStreakEL = () => {
  Array.from(streakEL.children).forEach((item, index) => {
    item.style.backgroundColor = index + 1 <= streak ? "orange" : "black";
  });
};
//

// Tính điểm
let scoreTime;
let score = 0;
let handleScore = () => {
  // Điểm thời gian tính theo %, còn 100% time thì được 1000 điểm
  scoreTime = Math.floor(timeInner.style.width.slice(0, -1) * 10);

  score += scoreTime + (streak > 3 ? 3 : streak) * 100;

  scoreEL.innerText = score;
};
//
