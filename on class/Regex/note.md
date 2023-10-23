# Biểu thức chính quy

    Các ký hiệu theo 1 ràng buộc nhất định

## Tác dụng

    1. So khớp
    2. Cắt chuỗi
    3. Thay thế

## Cấu trúc

    /regex/modifier
    -  regex: các ký hiệu
    - modifier: Cấu hình cho biểu thức (Phụ thuộc cho các ngôn ngữ lập trình khác nhau)

# Các ký hiệu hay dùng

- String -> Chuỗi cố định
- Khớp đầu chuỗi: ^
- Khớp cuối chuỗi: $
- Khớp theo ký tự đại diện
  - [a-z] -> Chữ thường
  - [A-Z] -> Chữ hoa
  - [0-9] -> Số
  - [charlist] -> Các ký tự muốn khớp
    Các ký tự trong [] sẽ liên kết với nhau bằng điều kiện "hoặc"
- Khớp độ dài
  Mặc định độ dài các biểu thức là 1
  - {value} -> Độ dài cố định
  - {min, max} -> Độ dài từ min đến max
  - {min,} -> Độ dài lớn hơn hoặc bằng min
- Ký tự viết tắt của độ dài
  - {1,vô cùng} -> +
  - {0, vô cùng} -> \* (dấu sao)
  - {0,1} -> ?
- Khi gặp các kí hiệu của biểu thức chính quy mà vẫn muốn kiểm tra, thêm \ phía trước: . / [ ],....
