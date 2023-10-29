import "../assets/scss/Layouts/Aside.scss";
export const Aside = () => {
  return `
  <aside>
      <h2>Menu</h2>
      <ul>
          <li><a href="/" data-route>Trang chủ</a></li>
          <li><a href="/gioi-thieu" data-route>Giới thiệu</a></li>
          <li><a href="/san-pham" data-route>Sản phẩm</a></li>
      </ul>
  </aside>
    `;
};
