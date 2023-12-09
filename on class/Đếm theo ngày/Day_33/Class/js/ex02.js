// //Static method property
// // Phương thức tĩnh và thuộc tính tĩnh sẽ không bị phụ thuộc bởi đối tượng. Không bị thay đổi khi khởi tạo lại đối tượng
// class User {
//   constructor() {
//     //Thuộc tính non-static
//     this.name = "Vũ Đức Tài";
//     this.email = "apeironisme@gmail.com";
//   }
//   //Phương thức non-static
//   getName() {
//     console.log(this.constructor.getEmail());
//     return "F8";
//   }
//   // Thuộc tính static
//   static message = "Thuộc tính static";
//   // Phương thức static
//   static getEmail() {
//     const obj = new this();
//     return obj.getName();
//   }
// }

// console.log(User.getEmail());

class Person {
  constructor() {
    this.name = "Vũ Đức Tài";
    this.email = "apeironisme@gmail.com";
  }
  get getName() {
    return this.name;
  }
  set setEmail(value) {
    this.email = value;
  }
  get getEmail() {
    return this.email;
  }
}

const person = new Person();
person.setEmail = "meorung922003@gmail.com";
console.log(person.getEmail);
