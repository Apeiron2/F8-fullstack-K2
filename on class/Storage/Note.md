# Session Storage, Local Storage

- Dung lượng lưu trữ lớn: 4-5MB
- Không share được giữa các subdomain
- Có thể dùng JS để thao tác
  --> Dễ bị tấn công XSS

# Cookie

- Bảo mật hơn --> HttpOnly
- Dung lượng lưu trữ thấp
- Share giữa các subdomain
- Phân biệt theo path

# Nên lưu trữ AccessToken, RefreshToken ở đâu?

-> Lưu ở Cookie để được bảo vệ với HttpOnly
