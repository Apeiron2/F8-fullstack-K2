// Tìm kiếm danh sách khách hàng theo từ khóa
var customers = [
  "Nguyễn Đại Thế",
  "Nguyễn Dương",
  "Tạ Hoàng An",
  "Vũ Đức Tài",
  "Đặng Ngọc Sơn",
  "Trần Công Lực",
  "Nguyễn Hoàng An",
];

var key = "hoàng";
var findCustomer = customers.filter((customer) => {
  return customer.toLowerCase().includes(key.toLowerCase());
});
console.log(findCustomer);
