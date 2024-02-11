const cron = require("node-cron");
cron.schedule("* * * * *", () => {
  console.log("Mỗi phút chạy một lần");
});
