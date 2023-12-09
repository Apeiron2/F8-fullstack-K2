var time = 60;
function startCounter() {
  let count = 0;

  function updateCounter() {
    time--;

    count++;
    // Hiển thị giá trị count ở đây, ví dụ: console.log(count);

    // Kiểm tra điều kiện dừng bộ đếm, ví dụ: dừng sau 100 lần
    if (count < 1000) {
      // Gọi lại hàm updateCounter trong requestAnimationFrame
      requestAnimationFrame(updateCounter);
    } else {
      // Kết thúc bộ đếm
      console.log(time);
    }
  }

  // Bắt đầu bộ đếm bằng cách gọi lần đầu tiên
  updateCounter();
}

// Gọi hàm startCounter để khởi đầu bộ đếm
startCounter();
