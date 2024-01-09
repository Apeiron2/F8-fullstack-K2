const userController = {
  index: (req, res) => {
    const { state, id } = req.query;
    req.session.message = "f8";
    res.send(`<h1>Danh sách người dùng</h1>
    <h2>${state}</h2>
    <h2>${id}</h2>`);
  },
  add: (req, res) => {
    console.log(req.session.message);
    res.send("<h1>Thêm người dùng</h1>");
  },
  active: (req, res) => {
    res.send(`
    <h1>Kích hoạt người dùng ${req.params.id}</h1>`);
  },
};
export default userController;
