# Flow Request

User Request ==> Middlewares ==> Route ==> Middleware ==> Requests ==> Controller ==> Service ==> Model ==> Tranformer ==>

Rút gọn
Controller ==> Service (Model) ==> Tranformer

Lưu ý: trong service

- Nhận request dữ liệu từ controller
- Không có response
- Trả về dữ liệu

Ngoại lệ, service có thẻ được gọi ở: Middleware, Request

# Repository Pattern

Controller ==> Service ==> Repository ==> Model

- create
- update
- findOne
- findAll
- delete

# Security

## SQL injection

    - Hạn chế sử dụng RAW Query
    - Nếu sử dụng RAW Query --> Thông qua Data Binding của ORM
    -

## Không để lộ tên framework, thư viện

## Upload file

- Giới hạn định dạng cho phép (mime type)
- Giới hạn dung lượng
  ==> Malware, Trojan, Script Shell

## CSRF

- Tấn công giả mạo
- Giải pháp:
  - Khởi tạo token (Lưu ở server) so sánh với token ở Request với token ở trên server có khớp nhau không?
  - Không để bị XSS

# XSS

- Thêm html entites vào tất cả các nội dung được hiển thị (có yếu tố người dùng thay đổi)

# File .env

- Tắt debug mode --> chuyển về mode production
- Phân quyền: Chmod Linux

# HTML Injection

- User sửa html trước khi gửi request
- Giải pháp: Validate tất cả các trường hợp cả ở BackEnd và FrontEnd

# Brute Force

- Kỹ thuật dò password
- Giải pháp:
  - Không thông báo cụ thể là sai email hay password
  - Đặt limit rate: Request nhiều trong 1 thời điểm --> Block
  - Khóa tài khoản nếu nhập password sai nhiều lần
  - Bật captcha (ReCaptcha)

# Xác minh 2 bước (2FA)

- Gửi qua Email hoặc sms

## Bảo vệ trang quản trị bằng Basic Auth

- Cấu hình trên Server: nginx, apache....

# Sử dụng HTTPS

- Cấu hình trên server:
  - Cấu hình chứng chỉ SSL (Let's Encrypt)
  - Thông qua các CDN: Cloudfalre

# Database

- Tắt remote connect database
- Thêm whitelist

# Thói quen

- Mật khẩu quản trị: Đặt phức tạp
- Không xây dựng chức năng lưu mật khẩu ở trang quản trị
- Tài khoản server: Đặt phức tạp, không để port mặc định (SSH, FTP, Database)

# Helmet để chặn 1 vài headers
