var fullName = "vũ đức tài hưng yên";
var correctName = "";

//Chuyển thành tên dạng chuyển
for (var i = 0; i < fullName.length; i++) {
  var char = fullName.charAt(i);
  var charPre = fullName.charAt(i - 1);
  if (charPre === " " || i === 0) {
    correctName += char.toUpperCase();
    continue;
  }
  correctName += char;
}
console.log(correctName);
