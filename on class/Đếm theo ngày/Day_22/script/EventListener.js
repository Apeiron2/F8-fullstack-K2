var btn = document.querySelector(".btn");
var email = document.querySelector(".email");
var complete = document.querySelector(".compete");
btn.onclick = function () {
  console.log("Bạn vừa bấm");
};
function handleListener() {
  console.log("Gửi email chào mừng");
}
btn.addEventListener("click", handleListener);

// Event trong DOM luôn tồn tại 1 tham số ở listener => Gọi là Event Object

complete.addEventListener("click", function () {
  btn.removeEventListener("click", handleListener);
});

// Cần có cả hàm sự kiện vì một element có thể có nhiều sự kiện và nhiều hàm thực thi
// Đồng nghĩa là khi tạo hàm thực thi sẽ nên đặt tên nếu không sẽ khó xóa (muốn xóa thì chỉ có nước copy cả cái function vào)

var list = document.querySelectorAll("ul li");
list.forEach(function (item) {
  item.addEventListener("click", function () {
    console.log(this);
  });
});

// Trong event còn 1 chuyên đề là Custom Event => Học sau
