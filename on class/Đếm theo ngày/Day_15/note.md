#Quy tắc đặt tên

## camelCase

Ví dụ: customerUser
--> Đặt tên biến, tên hàm

## PascalCase

Ví dụ: CustomerUser
--> Đặt tên class trong lập trình

## underscore

Ví dụ: customer_user
--> Tên hằng số, trả về key API, tên field trong Database

Tìm hiểu thêm: Clean Code, convention,...

#Toán tử

## Toán tử số học

+,-,\*,/,%,\*\*
++,-- => Phép tăng, phép giảm

Ép kiểu: +b là cách ép kiểu nhanh cho b thành dạng số

## Toán tử logic

> ,<,>=,<=,==,===,!=,!==

## Toán tử kết hợp

&&, ||, !

## Toán tử 3 ngôi

Cú pháp: điều kiện ? giá trị đúng : giá trị sai
/nếu ko có ngoặc tròn thì biểu thức điều kiện, giá trị đúng, giá trị sai sẽ được tính gộp vào với nhau
var a = 1;
var total = 1 + 2 + 3 + a >= 10 ? 5 : 10 + 4 + 5;
tương đương (6+a) >= 10 ? 5 : 19;

## Toán tử nullish (??)

var b = a ?? c
nếu a = null, undefinded thì gán b = c

## Truthy, Falsy

Falsy: 0, "", false, undefinded, null, NaN
True: Các trường hợp còn lại

## Toán tử &&

var a = 10;
var b = a && "F8";
console.log(b) --> "F8"

nếu a là falsy thì lấy giá trị trước &&, nếu a là truthy thì lấy giá trị sau &&

## Toán tử ||

ngược lại với &&
