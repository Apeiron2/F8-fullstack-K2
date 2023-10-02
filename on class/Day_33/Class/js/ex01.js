// //Object literal

// //Function constructor

// //Class

// class User {
//   //Nội dung của class
//   constructor(name, old, email) {
//     this.name = name;
//     this.old = old;
//     this.email = email;
//   }
//   //Định nghĩa các phương thức
//   getName() {
//     return this.name;
//   }
//   getEmail() {
//     return this.email;
//   }
//   getMessage(msg) {
//     return (this.msg = msg);
//   }
// }
// let user = new User("Vũ Đức Tài", 21, "apeironisme@gmail.com");

// //Kế thừa class

// class Authentication extends User {
//   //Toàn quyền sử dụng các phương thức và thuộc tính của Class kế thừa
//   constructor(name, old, email) {
//     super(name, old, email);
//     this.msg = null;
//   }
//   getInfo() {
//     return `
//     - Name: ${this.getName()}
//     - Email: ${this.email}
//     `;
//   }
// }
// const auth = new Authentication("Vũ Đức Tài", 21, "apeironisme@gmail.com");
// console.log(auth.getInfo());
// auth.getMessage("Hello F8");
// console.log(auth.msg);

// //Class Expression
// // expression là phương thức tạo class, hàm mà ko có tên, hàm được gắn vào 1 biến để gọi thông qua tên biến đó.

// const A = class {
//   constructor(name) {
//     this.name = name;
//   }
// };
// const a = new A("Kiếm thánh");
// console.log(a);

customElements.define(
  "hello-world",
  class extends HTMLElement {
    connectedCallback() {
      this.innerHTML = "Xin chào!!!";
    }
  }
);
