const container = document.querySelector(".container");
const btn = container.querySelector(".btn");
const mess = container.querySelector(".mess");
const notification = container.querySelector(".notification");

btn.addEventListener("click", function () {
  // Kiểm tra xem trình duyệt có hỗ trợ nhận dạng giọng nói không
  if ("webkitSpeechRecognition" in window) {
    const recognition = new webkitSpeechRecognition();

    // Cài đặt các tùy chọn
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "vi-VN";

    recognition.onresult = (event) => {
      openWeb(event.results[0][0].transcript);
    };

    recognition.onend = () => {
      sendMess("Đã nói xong. Hy vọng kết quả như ý bạn", "green");
    };

    // Bắt đầu nhận dạng giọng nói
    recognition.start();
    sendMess("Hãy nói nội dung bạn muốn", "red");
  } else {
    sendMess("Trình duyệt của bạn không hỗ trợ nhận dạng giọng nói.");
  }
});

function openWeb(transcript) {
  let url;
  notification.style.display = "block";
  notification.textContent = `Đang thực hiện: ${transcript}`;
  switch (transcript.toLowerCase()) {
    case "google":
      url = "https://www.google.com.vn/";
      break;
    case "facebook":
      url = "https://www.facebook.com/";
      break;
    case "youtube":
      url = "https://www.youtube.com/";
      break;
    case "google drive":
      url = "https://www.google.com/drive/";
      break;
    case "google maps":
      url = "https://www.google.com/maps/@9.779349,105.6189045,11z?hl=vi-VN";
      break;
    case "bản đồ":
      url = "https://www.google.com/maps/@9.779349,105.6189045,11z?hl=vi-VN";
      break;
    default:
      url = processURL(transcript);
      break;
  }
  setTimeout(() => {
    if (url) {
      window.open(url, "_blank");
      notification.textContent = `Đã thực hiện xong`;
    } else {
      notification.textContent = `Không thực hiện được yêu cầu`;
    }
  }, 2000);
}

function sendMess(text, color) {
  mess.textContent = text;
  if (color) mess.style.color = color;
}

//Hàm phân loại yêu cầu
function classify(transcript) {
  transcript = transcript.toLowerCase();

  // Bộ từ khóa các loại tìm kiếm
  let types = {
    video: ["video", "clip"],
    music: ["bài hát", "mở bài", "mở nhạc"],
    map: [
      "chỉ đường tới",
      "chỉ đường",
      "tới",
      "chỉ đường đến",
      "đến",
      "đường về",
      "về",
    ],
  };

  let type;
  let index = transcript.length;
  let keyWordType;
  Object.keys(types).forEach((key) => {
    let keywords = types[key];
    keywords.forEach((keyword) => {
      let i = transcript.indexOf(keyword);
      if (i >= 0 && i < index) {
        type = key;
        index = i;
        keyWordType = keyword;
      }
    });
  });
  return { type, index, keyWordType };
}

// Tạo URL tìm kiếm
function processURL(params) {
  let type = classify(params).type;
  let index = classify(params).index;
  let key = classify(params).keyWordType;
  let url;
  if (type && index >= 0) {
    let content = params.slice(index + key.length).trim();
    switch (type) {
      case "video":
        url = `https://www.youtube.com/results?search_query=${encodeURIComponent(
          content
        )}`;
        break;
      case "music":
        url = `https://zingmp3.vn/tim-kiem/tat-ca?q=${encodeURIComponent(
          content
        )}`;
        break;
      case "map":
        url = `https://www.google.com/maps/dir/Your Location/${encodeURIComponent(
          content
        )}`;
        break;
      default:
        break;
    }
  } else url = undefined;
  return url;
}
