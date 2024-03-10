var express = require("express");
var router = express.Router();
const redis = require("../utils/redis");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});
router.get("/test-redis", async (req, res) => {
  const client = await redis;
  const usersCache = await client.get("users-cache");
  console.log(typeof usersCache);
  let users;
  if (!usersCache) {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    users = await response.json();
    await client.set("users-cache", JSON.stringify(users), {
      EX: 60 * 60 * 24,
    });
  } else {
    users = JSON.parse(usersCache);
  }

  res.json(users);
});
router.get("/clear-cache", async (req, res) => {
  const client = await redis;
  await client.del("users-cache");
  res.json();
});
module.exports = router;
