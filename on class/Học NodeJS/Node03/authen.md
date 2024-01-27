- Session
  Sau khi lấy được thông tin user sẽ lưu vào session

- Token
  Sau khi lấy được thông tin user --> lưu vào token JWT

==> Kiểm tra User có tồn tại trong database hay không?

1. Truy vấn lấy user theo email
2. Lấy được hash password từ database
3. Đưa hash password và plain password vào hàm so sánh

Nhược điểm khi xác thực thủ công!

- Xây dựng lâu
- Không đồng nhất
- Bảo mật không an toàn
- Tích hợp đăng nhập qua mạng xã hội gây mất thời gian và khó cho người mới

Giải pháp: Dùng thư viện chuyên dụng (passport.js)

Bảng provider: Chứa thông tin các hình thức đăng nhập
-id,name, created_at,updated_at

Bảng users:

- id
- name
- email
- password (phải để null nếu đăng ký từ bên ngoài)
- provider_id
- created_at
- updated_at

1. Chức năng đăng ký tài khoản

- Kiểm tra trong bảng provider có name là `email` hay không?

* Không có: Insert Provider mới sau đó lấy về provider_id
* Có: Láy provider_id

2. Chức năng đăng nhập

- Truy vấn thêm provider_id

3. Chức năng đăng nhập thông qua mạng xã hội

- Lấy thông tin mạng xã hội
- Quay về bước 1
