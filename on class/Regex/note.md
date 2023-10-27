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

# Các ký hiệu thay thế

- \d -> Từ 0 đến 9
- \D -> Ngược lại của \d
- \s -> Khoảng trắng
- \S -> Ngược lại của \s
- \w -> Chữ thường, chữ hoa, số và dấu gạch dưới
- \W -> ngược lại của \w
- \b -> The \b metacharacter matches at the beginning or end of a word.

Search for the pattern LO at the beginning of a word like this:
\bLO

Search for the pattern LO at the end of a word like this:
LO\b

- Phủ định: ^ (Thêm trong biểu thức)
- Hoặc: | (Nên bọc vào cặp ngoặc tròn)

# Ký tự đại diện cho tất cả các ký tự

. là đại diện cho tất cả các ký tự

# Cắt chuỗi

Dùng match

const content = `It is a long established fact that https://fullstack-nodejs.fullstack.edu.vn/?id=a7c6eb6f-6fec-4fed-adac-68d1e0e7c780 a
reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum
is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making
https://chat.openai.com/ it look like readable English. Many desktop publishing packages and web page editors now use
Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their
infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and
the like).`;

const patten =
/(http|https):\/\/[\w\-\.]\*[\w\-\.]+\.[a-z]{2,}(:\d{2,})?(\/?||\/[\w\-?=&#\.]+)/g; -> g để match tất cả
const list = content.match(patten);
console.log(list);

# Capturing Group

Kỹ thuật gom nhóm để lấy 1 phần của biểu thức chính quy (Dùng cặp ngoặc tròn)
Muốn lấy cái nào thì sử dụng đóng ngoặc tròn () vào regex đoạn đó nó sẽ được xuất ra cùng kết quả
Nếu muốn ko bị xuất ra capturing (kiểu do nhóm hoặc thì dùng chứ ko phải muốn lấy giá trị :v) thì dùng (?:[Biểu thức])

# Greedy, lazy

trường hợp hay xảy ra khi dùng dấu .
"(.+)" -> Nó sẽ lấy đến " cuối cùng vì các dấu " đều thỏa mãn .
-> Cách xử lý "(.+?)" thì sẽ dừng ở dấu " đầu tiên.

Lưu ý là ? này ở sau độ dài. Còn ? ở sau điều kiện có nghĩa khác

# Thay thế

capturing 1 -> $1
capturing 2 -> $2
capturing n -> $n
