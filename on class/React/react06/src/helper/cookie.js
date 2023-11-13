import config from "./config";
const { EXPIRE_TIME } = config;
export const Cookie = {
  get(key) {
    let name = key + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  },
  set(name, value, extimes = EXPIRE_TIME) {
    const d = new Date();
    d.setTime(d.getTime() + extimes);
    let expires = "expires" + d.toUTCString();
    document.cookie = `${name}=${value};expires=${expires};path=/;`;
  },
};
