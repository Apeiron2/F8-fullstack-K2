import "./assets/scss/main.scss";
import { router } from "./Utils/router";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Product } from "./Pages/Product";
import { ProductDetail } from "./Pages/ProductDetail";
import { DefaultLayout } from "./Layouts/DefaultLayout";

export const App = () => {
  return router(
    [
      {
        path: "/",
        component: Home,
      },
      {
        path: "/gioi-thieu",
        component: About,
      },
      {
        path: "/san-pham",
        component: Product,
      },
      {
        path: "/san-pham/:id",
        component: ProductDetail,
      },
    ],
    DefaultLayout
  );
};
