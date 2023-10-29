import Navigo from "navigo";
import { Error } from "../Error";
const render = (component, layout, params) => {
  let content;
  if (layout) {
    content = layout().replace(/{{main}}/, component(params));
  } else {
    // Nếu không có layout là Error
    content = component();
  }
  root.innerHTML = content;
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
