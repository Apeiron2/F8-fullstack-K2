export const ProductDetail = ({ data }) => {
  const { id } = data;
  return `
    <div class="product-detail">
    <h1>Chi tiết sản phẩm <span class="id-product">${id}</span></h1>
    <button onclick="navigate('/san-pham')">Back</button>
    </div>
    `;
};
