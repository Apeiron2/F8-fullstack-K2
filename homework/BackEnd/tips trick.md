Khi login thì tạo 1 token lưu vào databse đồng thời lưu 1 cookie
--> Cách nhận biết là cookie và token trên db giống nhau.

Database

1.Users (id,name, email, pass)
2.Device (id,user_id,token, type ,status,last_login,last_activity)

Luồng

## Kiểm tra login

    - submit --> validate --> kiểm tra email có tồn tại
    - lấy hash password
    - verify hash password với plain password
    - Thành công

## Khởi tạo thiết bị

    - Tạo token
    - Lưu token vào cookie (expire 1 năm)
    - Kiểm tra token và user_id có tồn tại hay không?
        + Nếu có: Cập nhật (status, last_login, last_activity, updated_at)
        + Nếu không: Thêm token vào bảng login_token (device) với tất cả các thông tin

## Middleware

    - Auth Middleware: kiểm tra session có tồn tại hay không?
    - Lấy user_id từ session, từ user_id lấy status
    - Truy vấn tới login_token. Không tồn tại thì redirect về login, tồn tại thì lấy status nếu trạng thái là true thì next(), nếu status false thì redirect về login

## Đăng xuất

    - Lấy login token và user_id, update lại status
