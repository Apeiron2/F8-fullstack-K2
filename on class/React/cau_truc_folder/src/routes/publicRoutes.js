import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import ProductDetail from "../pages/Products/ProductDetail";
import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout";
export const publicRoutes = {
  layout: DefaultLayout,
  routes: [
    {
      path: "/",
      element: Home,
    },
    {
      path: "/gioi-thieu",
      element: About,
    },
    {
      path: "/san-pham",
      element: Products,
    },
    {
      path: "/san-pham/:id",
      element: ProductDetail,
    },
  ],
};
