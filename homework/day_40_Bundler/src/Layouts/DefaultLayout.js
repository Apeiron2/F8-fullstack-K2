import { Header } from "./Header";
import { Footer } from "./Footer";
import { Aside } from "./Aside";
export const DefaultLayout = () => {
  return `
    ${Header()}
    <section>
        ${Aside()}
        <main>{{main}}</main>
    </section>
    ${Footer()}
    `;
};
