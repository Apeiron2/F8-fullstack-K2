import { client } from "./assets/js/client.js";
client
  .post("/test", {
    time: Date.now(),
  })
  .then(({ response }) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });
