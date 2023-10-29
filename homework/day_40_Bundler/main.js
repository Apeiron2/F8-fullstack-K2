import { App } from "./src/App";

const root = document.querySelector("#root");

const app = App();
window.navigate = app.navigate;
