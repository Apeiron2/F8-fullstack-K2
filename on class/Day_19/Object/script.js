// Khái báo object

var users = [
  {
    name: "Vũ Đức Tài",
    bod: "09-02-2003",
    homeTown: "Hưng Yên",
    email: "Tai.VD212337@sis.hust.edu.vn",
  },
  {
    name: "Vũ Đức Tài",
    bod: "09-02-2003",
    homeTown: "Hưng Yên",
    email: "Tai.VD212337@sis.hust.edu.vn",
  },
  {
    name: "Vũ Đức Tài",
    bod: "09-02-2003",
    homeTown: "Hưng Yên",
    email: "Tai.VD212337@sis.hust.edu.vn",
  },
];
var html = `<table width="100%" border="1">
<tr>
<th>ID</th>
<th>Name</th>
<th>Email</th>
</tr>
${users
  .map((user) => {
    return `
    <tr>
    <td>${user.bod}</td>
    <td>${user.name}</td>
    <td>${user.email}</td>
    </tr>
    `;
  })
  .join("")}
</table>`;
document.write(html);
