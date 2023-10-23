const root = document.querySelector("#root");

const inputDate = root.querySelector(".input-date");

const calender = root.querySelector(".calender");
const monthEL = calender.querySelector(".right .month");
const yearEL = calender.querySelector(".right .year");

const nextMonthBtn = calender.querySelector(".left .next");
const previousMonthBtn = calender.querySelector(".left .previous");

const tbody = calender.querySelector("tbody");
const dateELList = tbody.querySelectorAll("button");

let currentTime = new Date("2023-10-31");
//reset về ngày mùng 1 của tháng
currentTime.setDate(1);

let selectedDate = new Date("2023-10-31");

// Gán hành động khi chọn ngày
Array.from(dateELList).forEach((dateEL) => {
  dateEL.addEventListener("click", (e) => {
    const element = e.target;
    // Tạo string time
    const time = `${element.dataset.year}-${+element.dataset.month + 1}-${
      element.innerText
    }`;
    //Cập nhật ngày đã chọn (Mặc định hôm nay)
    selectedDate = new Date(time);
    selectDate();

    inputDate.value = getTimeDDMMYY(time);
  });
});

// Định dạng giờ DD/MM/YY
const getTimeDDMMYY = (time) => {
  const subTime = new Date(time);
  let day = subTime.getDay();
  const date = subTime.getDate();
  const month = subTime.getMonth() + 1;
  const year = subTime.getFullYear();
  switch (day) {
    case 0:
      day = "Chủ nhật";
      break;
    case 1:
      day = "Thứ hai";
      break;
    case 2:
      day = "Thứ ba";
      break;
    case 3:
      day = "Thứ tư";
      break;
    case 4:
      day = "Thứ năm";
      break;
    case 5:
      day = "Thứ sáu";
      break;
    case 6:
      day = "Thứ bảy";
      break;
    default:
      break;
  }
  return `${day}, ngày ${date < 10 ? `0${date}` : date}/${
    month < 10 ? `0${month}` : month
  }/${year}`;
};
inputDate.value = getTimeDDMMYY(selectedDate);

// Active selected date function
const selectDate = () => {
  const subTime = new Date(selectedDate);
  const index = subTime.getDate() + new Date(subTime.setDate(1)).getDay() - 1;
  tbody.querySelector("button.active")?.classList.remove("active");
  dateELList[index].classList.add("active");
};

// Hàm lấy số ngày trong tháng
const getDaysInMonth = (time) => {
  const subTime = new Date(time);
  subTime.setMonth(subTime.getMonth() + 1);
  subTime.setDate(0);
  return subTime.getDate();
};

//Hàm render DatePicker
const renderCalender = (time) => {
  // Render tháng và năm
  monthEL.innerText = `Tháng ${time.getMonth() + 1}`;
  yearEL.innerText = time.getFullYear();

  // Render ngày

  // Số ngày trong tháng này
  const numberDays = getDaysInMonth(time);
  // Thứ của ngày 1 tháng này
  const day = time.getDay();
  // Ngày đầu tháng này
  let date = 1;
  // Số ngày trong tháng trước <-> Ngày cuối tháng trước
  let subTime = new Date(time);
  subTime.setDate(1);
  subTime.setMonth(subTime.getMonth() - 1);
  let monthPrevious = getDaysInMonth(subTime);
  // Ngày đầu tháng sau
  let monthNext = 1;

  // Hiển thị lịch ngày
  for (i = 0; i < 42; i++) {
    if (i >= day && i <= numberDays - 1 + day) {
      dateELList[i].dataset.month = time.getMonth();
      dateELList[i].dataset.year = time.getFullYear();
      // Hiển thị các ngày trong tháng này
      dateELList[i].innerText = date < 10 ? `0${date}` : date;
      date++;
      dateELList[i].disabled = false;
    } else {
      // Hiển thị thêm tháng trước và sau
      if (i < day) {
        // Hiển thị tháng trước
        dateELList[i].innerText = monthPrevious - day + i + 1;
      } else {
        // Hiển thị tháng sau
        dateELList[i].innerText = monthNext < 10 ? `0${monthNext}` : monthNext;
        monthNext++;
      }
      dateELList[i].disabled = true;
    }
  }

  // Active ngày đã chọn
  if (
    time.getMonth() === selectedDate.getMonth() &&
    time.getFullYear() === selectedDate.getFullYear()
  ) {
    // Nếu đúng tháng đã chọn thì active ngày
    selectDate();
  } else {
    // Các tháng khác thì remove active
    tbody.querySelector("button.active")?.classList.remove("active");
  }
};

// Thay đổi tháng
nextMonthBtn.addEventListener("click", () => {
  currentTime.setMonth(currentTime.getMonth() + 1);
  renderCalender(currentTime);
});
previousMonthBtn.addEventListener("click", () => {
  currentTime.setMonth(currentTime.getMonth() - 1);
  renderCalender(currentTime);
});

renderCalender(currentTime);
