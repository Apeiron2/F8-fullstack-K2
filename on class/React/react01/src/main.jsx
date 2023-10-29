import App from "./App";
import ReactDOM from "react-dom/client";
import React from "react";
const rootEL = document.querySelector("#root");
const root = ReactDOM.createRoot(rootEL);

//Tạo react Element

// const h1=React.createElement("h1",{},"Học React không khó =)))")
// const h2=React.createElement("h2",{},"Học JS không khó =)))")
// const h3=[...Array(50).keys()].map((index)=>{
//   return React.createElement("h3",{},`Item ${index+1}`)
// })
// const button=React.createElement("button",{className:"btn", onClick:(e)=>{console.log("Á");}},"Nhấp vào em!")

// const div=React.createElement("div",{
//   id:"content",
//   className:"Lớp",
//   "data-index":0
// },"Hello F8",h1,h2,...h3,button)
// const div = (
//   <div className="content">
//     <h1>Học lập trình khó vl</h1>
//     <h2>Không gì là đơn giản</h2>
//     <h3>item 1</h3>
//     <h3>item 2</h3>
//     <h3>item 3</h3>
//     <h3>item 4</h3>
//     <h3>item 5</h3>
//     <h3>item 6</h3>
//     <h3>item 7</h3>
//     <h3>item 8</h3>
//     <h3>item 9</h3>
//     <h3>item 10</h3>
//     <button
//       className="btn"
//       onClick={() => {
//         console.log("Hello F8");
//       }}
//     >
//       Nhấp zô!
//     </button>
//   </div>
// );

// Component
/**
 * Là 1 hàm hoặc class viết hoa ký tự đầu tiên
 */
const Product = () => {
  return <h1>Danh sách sản phẩm</h1>;
};

root.render(App());
