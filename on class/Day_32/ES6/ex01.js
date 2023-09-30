//Scope
/**
 Phạm vi truy cập của biến (Biến được khai báo và sử dụng ở đâu?)
 1. Phạm vi toàn cục (Global toàn cục)

 2. Phạm vi cục bộ (Local Scope)
    - Phạm vi hàm (Function Scope)
    - Phạm vi khối (Block Scope)
    --> Biến được khai báo trong 1 khố có block code: if, for, while, switch,...
 */

/**
 * let,const: chỉ hoạt động trong Scope mà nó đã khai báo
 * không được phép khai báo nhiều lần trong một 1 scope
 *
 * let--> thay đổi đc
 * const --> không thay đổi đc và bắt buộc phải gán khi khai báo
 */
// for (let i = 1; i <= 5; i++) {
//   let a = 10;
//   if (i === 5) {
//     let a = 20;
//   }
//   console.log(a);
// }
const user = { details: "Tài" };
user.details = "Vũ Đức Tài";
console.log(user);
