var content =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure maxime possimus quaerat. Voluptate cupiditate debitis similique nisi ab enim laudantium vel placeat nihil laboriosam assumenda animi, dignissimos neque architecto perferendis autem culpa, hic perspiciatis voluptatem officiis! Id iste debitis sit inventore ab commodi quam cumque sed architecto. Consequatur, maxime sit doloribus corrupti impedit reiciendis sunt, illo adipisci, enim veniam eum eligendi optio accusamus doloremque? Ducimus fugit, quod eveniet debitis porro dolore totam. Deleniti temporibus suscipit nemo repellat optio provident aliquid sequi mollitia veritatis quae reprehenderit, voluptate, ratione amet doloremque quia dolore nulla commodi exercitationem? Qui, quis illo. Aliquam, quod. Corrupti?";

//97->122
var subContent = content.toLowerCase();
for (var i = 0; i < subContent.length; i++) {
  if (
    (subContent.charCodeAt(i) > 122 || subContent.charCodeAt(i) < 97) &&
    subContent[i] !== " "
  ) {
    subContent = subContent.slice(0, i) + subContent.slice(i + 1);
  }
}

var words = subContent.split(" ");
var WordsCount = {};
for (var i = 0; i < words.length; i++) {
  if (!WordsCount[words[i]]) {
    WordsCount[words[i]] = 1;
    continue;
  }
  WordsCount[words[i]]++;
}

console.log(WordsCount);
