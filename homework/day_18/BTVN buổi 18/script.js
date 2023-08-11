var content = `Xin thông báo! Bạn vừa mất 10 giây cuộc đời!`;

var words = content.split(" ");

var i = 0;
setInterval(() => {
  var colorWord = `<span>${words[i]}</span>`;
  var temp = words.slice(0, i).concat(colorWord, words.slice(i + 1));
  var subContent = temp.join(" ");
  document.getElementById("karaoke").innerHTML = subContent;
  if (i == words.length - 1) i = 0;
  else i++;
}, 1000);
