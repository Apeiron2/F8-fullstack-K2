/*
- Mỗi model tương ứng với 1 Table
- 1 Controller có thể có nhiều Model

Nếu muốn filter theo Status
*/

const sql = require("../ultis/db");
module.exports = {
  all: (keyword, status) => {
    let filter = sql`WHERE name IS NOT NULL`;
    if (status === "active" || status === "inactive") {
      filter = sql`${filter} AND status=${status === "active"}`;
    }
    if (keyword) {
      filter = sql`${filter} AND LOWER(name) LIKE ${"%" + keyword + "%"}`;
    }
    return sql`SELECT * FROM courses ${filter} ORDER BY id ASC`;
  },
  courseUnique: async (name, id = 0) => {
    const ignore = id > 0 ? sql`AND id!=${id}` : sql``;
    const result =
      await sql`SELECT id FROM courses WHERE name=${name.trim()} ${ignore}`;
    return !result.length;
  },
  get: async (id) => {
    const result = await sql`SELECT * FROM courses WHERE id = ${id}`;
    return result;
  },
  create: async ({ name, price, status }) => {
    const result =
      await sql`INSERT INTO courses(name,price,status) VALUES (${name},${price},${
        status === "active" ? true : false
      })`;
    return result;
  },
  update: ({ name, price, status }, id) => {
    return sql`UPDATE courses SET name=${name},price=${price},status=${status},updated_at=NOW() WHERE id = ${id}`;
  },
  delete: async (id) => {
    const result = await sql`DELETE FROM courses WHERE id=${id}`;
    return result;
  },
};
