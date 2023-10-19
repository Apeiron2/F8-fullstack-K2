const questionContainerHTML = `
      <div class="header">
        <div class="time-container">
          <div class="time"></div>
        </div>
        <div class="score-container">
          <div class="left">
            <div class="question-number">
              <span class="current-question">7</span>/<span
                class="total-question"
                >8</span
              >
            </div>
            <div class="streak">
              <div class="box1"></div>
              <div class="box2"></div>
              <div class="box3"></div>
            </div>
          </div>
          <div class="right">
            <div class="score">Score: <span>0</span></div>
          </div>
        </div>
      </div>
      <div class="question">
        <div class="content">
          <div class="background"></div>
          <p>1 + 1 = ?</p>
        </div>
        <div class="answers">
          <div class="answer">
            <div class="background"></div>
            <p>1</p>
          </div>
          <div class="answer">
            <div class="background"></div>
            <p>2</p>
          </div>
          <div class="answer">
            <div class="background"></div>
            <p>3</p>
          </div>
          <div class="answer">
            <div class="background"></div>
            <p>4</p>
          </div>
        </div>
      </div>
      <div class="footer">
        <p class="result"></p>
      </div>

`;
const start = document.querySelector(".start");
const startBtn = start.querySelector(".btn");

const countToStart = start.querySelector(".count-to-start p");

let timeToStart = +countToStart.innerHTML;
const countDownToStart = () => {
  let countDown = setInterval(() => {
    let timeLeft = timeToStart;
    if (timeLeft <= 0) {
      clearInterval(countDown);
    } else {
      timeLeft--;
      countDownToStart.innerHTML = timeLeft;
    }
  }, 1000);
};
