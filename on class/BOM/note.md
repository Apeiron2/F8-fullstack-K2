# BOM

    Brower Object Model

    1.  window.open(): Giúp mở cửa sổ mới

        - link
        - target
        - feature: set kích thước và vị trí của cửa sổ mở ra

    2.  window.close(): Bằng cách đặt 1 biến bên ngoài

        - let website = window.open("https://fullstack.edu.vn", "", "width=400;height=300");
        - website.close() --> Sẽ tắt web vừa bật

    3.  window.location: Lấy được tất cả các thông tin về domain, host,... của website

    4.  new URLSearchParams(): Chuyển xử lý các query param của web

    5.  window.history.pushState(): Thêm path vào sau domain. Giả hành động chuyển trang

## Config Webserver (Nginx, Apache) -> Hỗ trợ Rewrite URL

## Navigator

    Kiểm tra các thông tin trình duyệt như phiên bản, tên trình duyệt, thiết bị truy cập, ngôn ngữ,...
