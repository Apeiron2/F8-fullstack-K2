Kết nối SCSS --> CSS: sass --watch scss:css

// Toán tử trong SCSS
// 1. Toán tử số học: + - \* / %
// 2. Toán tử so sánh:
// 3. Toán tử lý luận: and, or, not
// 4. Toán tử gán (:)
// Nối chuỗi trong SCSS: Dùng đấu +

EXTEND SCSS (placeholder)
%Name{
property
}
a{
@extend %Name
}
--> Đưa các thuộc tính trong Name vào trong a nhưng không tạo ra Name trong CSS

sm:576 md:768 lg:992 xl:1200 xxl:1400
