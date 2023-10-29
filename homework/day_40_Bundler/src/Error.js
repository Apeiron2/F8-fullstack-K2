import "./assets/scss/Error.scss";
export const Error = () => {
  return `
        <div class="error">
        <h1>404</h1>
        <p>Trang này không tồn tại!</p>
        <button onclick="navigate('/')">Return Home</button>
        </div>
    `;
};
