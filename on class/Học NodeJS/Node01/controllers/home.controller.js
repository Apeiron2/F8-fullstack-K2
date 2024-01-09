const homeController = {
  index: (req, res) => {
    const title = "<h1>Lỗi rồi!</h1>";
    res.render("home/index", {
      title,
      check: true,
      users: ["f8", "ed2", "apeiron"],
    });
  },
};
export default homeController;
/**
 Controller --> Page hoặc trên module
 Action: Hàm thể hiện 1 chức năng

 Ví dụ: Controller sản phẩm sẽ có các action: thêm, sửa, xóa
 Tên Controller là danh từ
 Action là động từ
 */
