A.String
    I. là hàm tạo để định nghĩa các phương thức và thuộc tính xử lý chuỗi
        String là 1 hàm tạo nên có thể truy cập vào các prototype như 1 object
    II. Thuộc tính
        1. length: lấy độ dài của chuỗi
        2. charAt(index): trả về ký tự theo index
        3. charCodeAt(index): trả về mã ASCII theo index
        4. concat(string2,string3,...): nối thêm các chuỗi string2, string3
        5. indexOf(subString): tìm vị trí đầu tiên của subString trong chuỗi. Nếu có trả về index đầu tiên, nếu không trả về -1
        6. lastIndexOf(subString): tương tự nhưng tìm cuối cùng
        7. include(subString): tìm chuỗi nhưng trả về true/false
        8. slide(start,end): cắt string từ (start) cho đến (end - 1) (theo index)
        9. replace(search, with): tìm và thay thế (Chỉ thay thế vị trí đầu tiên)
            Lưu ý: Việc tìm kiếm trong hàm này có hỗ trợ cả biểu thức chính quy (Regex)
                    console.log(fullName.replace(/F/g, "f")); --> Thay thế toàn bộ chữ F thành f 
        10. replaceAll(search, with): thay thế tất cả 
        11. split(): tách chuỗi thành mảng
        12. match(pattern): cắt chuỗi dựa vào biểu thức chính quy
            Ví dụ: Bài toán lấy số điện thoại trong đoạn văn
                var pattern=/0\d{9}/g
                console.log(content.match(pattern))
                --> log ra được các số điện thoại bắt đầu bằng 0 và sau đó là 9 chữ số.
        13. toLowerCase(): chuyển thành chữ thường
        14. toUpperCase(): chuyển thành chữ in
        15. trim(): loại bỏ khoảng trắng đầu và cuối chuỗi 
        16. trimStart(): loại bỏ khoảng trắng đầu chuỗi
        16. trimEnd(): loại bỏ khoảng trắng cuối chuỗi

