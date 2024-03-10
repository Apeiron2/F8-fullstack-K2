const { createClient } = require("redis");
module.exports = createClient({
  password: "1oZhiWYHDs88mx6F3W7jqzIPsYE42Yju",
  socket: {
    host: "redis-17516.c292.ap-southeast-1-1.ec2.cloud.redislabs.com",
    port: 17516,
  },
})
  .on("error", (err) => console.log("Redis client Error", err))
  .connect();
