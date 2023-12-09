/**
  try catch dùng để xử lý những lỗi ngoại lệ

  try{
    chứa đoạn code muốn bắt lỗi
  } catch {
    chứa thông tin lỗi
  }
  Nếu try có lỗi thì catch sẽ hoạt động
 */
let a = 10;
try {
  console.log("Hello F8");
  if (a) throw new Error("Lỗi nặng quá!");
} catch (exception) {
  console.log(exception.message);
} finally {
  console.log(213);
}
console.log("Hoàng An");
