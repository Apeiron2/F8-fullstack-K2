var content =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolorem, ea voluptate iusto accusantium illum alias error harum fugiat vitae? Repellat commodi dolorum quam similique beatae vero atque maiores, nulla accusamus quaerat labore veritatis quos at in culpa ipsum nemo omnis ex. Autem repellendus animi minus natus quibusdam dolorum cumque nihil nobis, tenetur ut cupiditate numquam ipsa optio qui fugiat officiis labore ipsam minima aliquid facere? Inventore amet veritatis obcaecati architecto ea nihil accusantium neque dolor delectus expedita. Beatae nisi porro dolores libero optio maiores ea corporis, incidunt nemo aspernatur voluptates maxime nihil nam corrupti, repudiandae exercitationem, qui debitis necessitatibus eum dicta? Saepe necessitatibus numquam iure earum possimus corporis corrupti quod qui? Accusantium perferendis repudiandae exercitationem eligendi ut adipisci blanditiis perspiciatis enim fuga tempora maiores rem et, maxime ab molestias distinctio dolorem iste tempore laudantium? Alias asperiores enim ab assumenda praesentium itaque optio. Nemo voluptatum ducimus cumque dicta quae maxime nisi, voluptatem consectetur laborum iusto obcaecati perspiciatis voluptates quidem sequi molestiae ipsam doloremque. Quod impedit itaque ratione. Saepe totam enim harum libero commodi consequatur eum, vero, amet voluptatum corrupti voluptate maxime error, quia quibusdam vel non. Sequi nesciunt at dolores velit necessitatibus corporis qui. Cupiditate optio consequuntur ipsa distinctio cumque?";
var keyword = "lorem";
var title = `<p>Tìm kiếm với từ khóa <b>${keyword}</b></p>`;
var result = `<p>Đã tìm thấy <b>${0}</b> kết quả với từ <b>${keyword}</b> khóa</p>`;

var result = "";
var i = content.toLowerCase().indexOf(keyword.toLowerCase());
var tag = "span";
while (i !== -1) {
  content =
    content.slice(0, i) +
    `<${tag}>${content.slice(i, i + keyword.length)}</${tag}>` +
    content.slice(i + keyword.length);
  console.log(content);
  result += content.slice(0, content.toLowerCase().indexOf(tag.toLowerCase()));
  content = content.slice(i + keyword.length);
  i = content.toLowerCase().indexOf(keyword.toLowerCase());
}
result += content;

// document.write(title + content + result);
