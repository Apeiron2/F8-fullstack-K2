import Navigo from "navigo";
import { Error } from "../Error";
const render = (component, layout, params) => {
  let div = document.createElement("div");
  if (layout) {
    div.innerHTML = component(params);
  } else {
    // Nếu không có layout là Error
    div.innerHTML = component();
  }
  root.querySelector("main").append(div);
};

const router = (list, layout) => {
  const route = new Navigo("/", { linksSelector: "a" });
  list.forEach(({ path, component }) => {
    route.on(path, (params) => {
      render(component, layout, params);
    });
  });
  route.notFound(() => {
    render(Error);
  });
  route.resolve();
  return route;
};
export { router };
