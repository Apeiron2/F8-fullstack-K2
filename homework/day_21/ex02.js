function createCustomers(customers) {
  var customerList = [];
  customers.forEach((customer) => {
    customerList.push(
      new Customer(customer.name, customer.age, customer.address)
    );
  });
  return customerList.sort((a, b) => {
    return a.age - b.age;
  });
}

function Customer(name, age, address) {
  this.name = name;
  this.age = age;
  this.address = address;
  this.shortName = name.split(" ").slice(-1).join("");
}

const customers = [
  { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
  { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
  { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
];

console.log(createCustomers(customers));
