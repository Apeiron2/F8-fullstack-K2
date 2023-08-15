var Article = function (title, img, content, link) {
  this.title = title;
  this.img = img;
  this.content = content;
  this.link = link;
};

var Articles = [];
Articles[Articles.length] = new Article(
  "Tổng hợp hình ảnh bình yên, thư thái cho tâm hồn",
  "https://phunugioi.com/wp-content/uploads/2021/11/Hinh-anh-binh-yen-nhat.jpg",
  "Hãy khám phá bộ sưu tập hình ảnh này và mang vẻ đẹp tự nhiên tới cuộc sống của bạn. Trải nghiệm những khoảnh khắc bình yên và thư thái, và để tâm trí bạn được thả lỏng trong không gian tuyệt vời của những hình ảnh chất lượng cao 4K.",
  "https://pgdphurieng.edu.vn/hon-999-hinh-anh-dep-bo-suu-tap-hinh-anh-binh-yen-day-du-chat-luong-cao-4k/"
);
Articles[Articles.length] = new Article(
  "Khám phá với hơn 76 hình ảnh bình yên cuộc sống siêu đỉnh …",
  "https://haycafe.vn/wp-content/uploads/2022/01/hinh-anh-binh-yen-chang-trai-ngoi-thu-gian-giua-thien-nhien.jpg",
  "Hãy khám phá bộ sưu tập hình ảnh này và mang vẻ đẹp tự nhiên tới cuộc sống của bạn. Trải nghiệm những khoảnh khắc bình yên và thư thái, và để tâm trí bạn được thả lỏng trong không gian tuyệt vời của những hình ảnh chất lượng cao 4K.",
  "https://pgdphurieng.edu.vn/hon-999-hinh-anh-dep-bo-suu-tap-hinh-anh-binh-yen-day-du-chat-luong-cao-4k/"
);
Articles[Articles.length] = new Article(
  "Chi tiết 80+ hình ảnh đẹp về sự bình yên không thể bỏ qua …",
  "https://toigingiuvedep.vn/wp-content/uploads/2021/07/hinh-anh-binh-yen-giua-the-gioi.jpg",
  "Hãy khám phá bộ sưu tập hình ảnh này và mang vẻ đẹp tự nhiên tới cuộc sống của bạn. Trải nghiệm những khoảnh khắc bình yên và thư thái, và để tâm trí bạn được thả lỏng trong không gian tuyệt vời của những hình ảnh chất lượng cao 4K.",
  "https://pgdphurieng.edu.vn/hon-999-hinh-anh-dep-bo-suu-tap-hinh-anh-binh-yen-day-du-chat-luong-cao-4k/"
);
var textHTML = Articles.reduce((preV, current) => {
  return (
    preV +
    `<article>
    <a href="${current.link}" target="_blank">
    <img src="${current.img}"></a>
    <div class="article-content">
    <h3>${current.title}</h3>
    <a href="${current.link}" target="_blank">${current.content}</a>
    </div>
    </article>`
  );
}, "");
document.write(textHTML);
