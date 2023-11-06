# React Hook

Functional Component -> Chỉ có props
=> React Hook Làm việc với các thành phần không có sẵn trong Functional

- Function đặc biệt do React Build sẵn hoặc do lập trình viên tự tạo
- Chỉ được phá sử dụng ở cấp đầu tiên trong functional component
- Bắt đầu bằng use

1. useState()

Giúp làm việc với State trong functional Component

2. useEffect()

Mô phỏng vòng đời Component trong functional
Sử dụng các công việc Side Effect
Side Effect là những công việc bên cạnh, chạy sau công việc chính

useEffect(callback,dependiencies) --> không có giá trị trả về

- Các trường hợp xảy ra:

  - dependiencies -> null | undefinded -> component re-render -> callback chạy
  - dependiencies -> [] -> callback chỉ chạy 1 lần khi component re-render
  - dependiencies -> [a,b,c] -> callback chỉ chạy khi 1 trong các biến được khai báo thay đổi
  - cleanup -> callback trả về 1 function -> unmount hay còn gọi là cleanup -> cleanup chỉ chạy từ lần 2 trở đi

- Thứ tự hoạt động:
  1. State thay đổi
  2. Re-render
  3. Cleanup (nhưng là của lần trước)
  4. Callback
