- Giao diện (views) chỉ gọi vào GET
- Xử lý logic --> viết ở các method khác POST, PUT, PATCH, DELETE --> Chuyển hướng về GET để show ra giao diện
  Ví dụ: Xây dựng chức năng đăng nhập
- TH1: Đăng nhập failed --> Redirect quay lại form đăng nhập
- TH2: Đăng nhập success --> Redirect về trang chủ

# Cách gửi thông báo giữa các req

    - Cách 1: Dùng query string
    - Cách 2: Dùng flash session (flash data)
