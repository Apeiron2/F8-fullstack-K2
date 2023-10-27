import moment from "moment";

export const app = () => {
  return `<h1>Bây giờ là: ${moment().format("DD/MM/YY HH:mm:ss")}</h1>`;
};
