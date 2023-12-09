//Storage -> Bộ nhớ trình duyệt

/**
 * Localstorage -> Lưu trữ vĩnh viễn
 * SessionStorage -> Lưu trữ theo phiên của trình duyệt
 * Cookie -> Lưu trữ theo thời gian xác định (Có thời gian sống hoặc thiết lập như Session -> tắt là xóa. Cookie sẽ tự động đính kèm vào HTTP request nếu dùng trình duyệt)
 */
// localStorage.setItem("email", "apeironisme@gmail.com");
// const email = localStorage.getItem("email");
// sessionStorage.setItem("userID", 3);
// console.log(email);
// console.log([Storage]);
const expires = new Date("2023-10-18 09:33:00").toUTCString();

document.cookie = `email=apeironisme@gmai.com;expires=${expires};path=/`;
document.cookie = `email=meorung@gmai.com;expires=${expires};path=/`;

// document.cookie = `email=apeironisme@gmai.com;expires=${new Date().toUTCString()};path=/`;
console.log(document.cookie);
