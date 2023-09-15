var progressBar = document.querySelector(".progress-bar");
var progress = progressBar.querySelector(".progress");
var progressSpan = progress.querySelector("span");

var sentences = [
  {
    words: [
      { startTime: 24829, endTime: 25219, data: "Đã" },
      { startTime: 25219, endTime: 25489, data: "lỡ" },
      { startTime: 25489, endTime: 25689, data: "yêu" },
      { startTime: 25689, endTime: 25979, data: "em" },
      { startTime: 25979, endTime: 26339, data: "nhiều" },
      { startTime: 26349, endTime: 26529, data: "rồi" },
      { startTime: 26529, endTime: 26549, data: "thì" },
    ],
  },
  {
    words: [
      { startTime: 26739, endTime: 27089, data: "Anh" },
      { startTime: 27089, endTime: 27500, data: "chỉ" },
      { startTime: 27500, endTime: 27740, data: "biết" },
      { startTime: 27860, endTime: 28250, data: "ngắm" },
      { startTime: 28260, endTime: 28670, data: "mưa" },
    ],
  },
  {
    words: [
      { startTime: 29479, endTime: 29690, data: "Nhìn" },
      { startTime: 29699, endTime: 30160, data: "qua" },
      { startTime: 30160, endTime: 30290, data: "hàng" },
      { startTime: 30300, endTime: 30729, data: "cây" },
    ],
  },
  {
    words: [
      { startTime: 30690, endTime: 30909, data: "Được" },
      { startTime: 30909, endTime: 31239, data: "bao" },
      { startTime: 31239, endTime: 31500, data: "nhiêu" },
      { startTime: 31500, endTime: 31860, data: "hạt" },
      { startTime: 31870, endTime: 32209, data: "mưa" },
    ],
  },
  {
    words: [
      { startTime: 32679, endTime: 32919, data: "Là" },
      { startTime: 32919, endTime: 33399, data: "trong" },
      { startTime: 33409, endTime: 33629, data: "anh" },
    ],
  },
  {
    words: [
      { startTime: 33689, endTime: 33899, data: "Được" },
      { startTime: 33899, endTime: 34239, data: "bấy" },
      { startTime: 34239, endTime: 34569, data: "nhiêu" },
      { startTime: 34569, endTime: 34839, data: "nỗi" },
      { startTime: 34869, endTime: 35239, data: "nhớ" },
      { startTime: 35509, endTime: 36219, data: "em" },
    ],
  },
  {
    words: [
      { startTime: 36809, endTime: 37229, data: "Đã" },
      { startTime: 37229, endTime: 37409, data: "lỡ" },
      { startTime: 37549, endTime: 37679, data: "yêu" },
      { startTime: 37679, endTime: 37989, data: "em" },
      { startTime: 37989, endTime: 38329, data: "nhiều" },
      { startTime: 38339, endTime: 38509, data: "rồi" },
      { startTime: 38509, endTime: 38529, data: "thì" },
    ],
  },
  {
    words: [
      { startTime: 38690, endTime: 39060, data: "Anh" },
      { startTime: 39069, endTime: 39489, data: "chỉ" },
      { startTime: 39489, endTime: 39819, data: "biết" },
      { startTime: 39819, endTime: 40140, data: "đếm" },
      { startTime: 40150, endTime: 40680, data: "sao" },
    ],
  },
  {
    words: [
      { startTime: 41509, endTime: 41759, data: "Nhìn" },
      { startTime: 41769, endTime: 42049, data: "lên" },
      { startTime: 42079, endTime: 42249, data: "trời" },
      { startTime: 42279, endTime: 42379, data: "cao" },
    ],
  },
  {
    words: [
      { startTime: 42680, endTime: 42879, data: "Được" },
      { startTime: 42879, endTime: 43209, data: "bao" },
      { startTime: 43209, endTime: 43480, data: "nhiêu" },
      { startTime: 43480, endTime: 43720, data: "vì" },
      { startTime: 43720, endTime: 44280, data: "sao" },
    ],
  },
  {
    words: [
      { startTime: 44539, endTime: 44659, data: "Là" },
      { startTime: 44669, endTime: 45089, data: "trong" },
      { startTime: 45089, endTime: 45370, data: "lòng" },
      { startTime: 45370, endTime: 45480, data: "anh" },
    ],
  },
  {
    words: [
      { startTime: 45669, endTime: 45909, data: "Còn" },
      { startTime: 45909, endTime: 46269, data: "bấy" },
      { startTime: 46269, endTime: 46609, data: "nhiêu" },
      { startTime: 46619, endTime: 46899, data: "những" },
      { startTime: 46899, endTime: 47439, data: "nỗi" },
      { startTime: 47439, endTime: 47689, data: "lo" },
    ],
  },
  {
    words: [
      { startTime: 47689, endTime: 47969, data: "Sợ" },
      { startTime: 47969, endTime: 48199, data: "mình" },
      { startTime: 48199, endTime: 48489, data: "đánh" },
      { startTime: 48489, endTime: 48890, data: "mất" },
      { startTime: 48910, endTime: 49219, data: "em" },
      { startTime: 49219, endTime: 49309, data: "khi" },
    ],
  },
  {
    words: [
      { startTime: 49550, endTime: 49879, data: "Thu" },
      { startTime: 49879, endTime: 49970, data: "vừa" },
      { startTime: 49980, endTime: 50360, data: "sang," },
      { startTime: 50360, endTime: 50660, data: "lá" },
      { startTime: 50660, endTime: 51120, data: "xanh" },
      { startTime: 51120, endTime: 51470, data: "bỗng" },
      { startTime: 51610, endTime: 52180, data: "úa" },
      { startTime: 52259, endTime: 52679, data: "vàng" },
    ],
  },
  {
    words: [
      { startTime: 53419, endTime: 53729, data: "Khi" },
      { startTime: 53729, endTime: 54069, data: "mưa" },
      { startTime: 54069, endTime: 54290, data: "còn" },
      { startTime: 54290, endTime: 54440, data: "chưa" },
      { startTime: 54440, endTime: 54920, data: "tới," },
    ],
  },
  {
    words: [
      { startTime: 56419, endTime: 56699, data: "Em" },
      { startTime: 56699, endTime: 57119, data: "thay" },
      { startTime: 57119, endTime: 57349, data: "người" },
      { startTime: 57349, endTime: 57509, data: "yêu" },
      { startTime: 57509, endTime: 58070, data: "mới," },
      { startTime: 58640, endTime: 58670, data: "oh" },
      { startTime: 58670, endTime: 58959, data: "no" },
      { startTime: 58969, endTime: 59509, data: "no" },
    ],
  },
  {
    words: [
      { startTime: 59610, endTime: 59909, data: "Sợ" },
      { startTime: 59909, endTime: 60079, data: "mình" },
      { startTime: 60079, endTime: 60460, data: "sẽ" },
      { startTime: 60460, endTime: 60910, data: "khiến" },
      { startTime: 60930, endTime: 61220, data: "em" },
      { startTime: 61230, endTime: 61600, data: "yêu" },
      { startTime: 61600, endTime: 61889, data: "phai" },
      { startTime: 61889, endTime: 62039, data: "nhạt" },
      { startTime: 62039, endTime: 62169, data: "hơn" },
    ],
  },
  {
    words: [
      { startTime: 62289, endTime: 62729, data: "Giữa" },
      { startTime: 62729, endTime: 63139, data: "mênh" },
      { startTime: 63139, endTime: 63539, data: "mông" },
      { startTime: 63539, endTime: 64269, data: "bộn" },
      { startTime: 64279, endTime: 64789, data: "bề." },
    ],
  },
  {
    words: [
      { startTime: 65539, endTime: 65699, data: "Em" },
      { startTime: 65769, endTime: 66079, data: "ơi" },
      { startTime: 66089, endTime: 66309, data: "chờ" },
      { startTime: 66309, endTime: 66510, data: "anh" },
      { startTime: 66510, endTime: 66670, data: "với" },
    ],
  },
  {
    words: [
      { startTime: 68270, endTime: 68639, data: "Chỉ" },
      { startTime: 68639, endTime: 68669, data: "biết" },
      { startTime: 68749, endTime: 68989, data: "nói" },
      { startTime: 68989, endTime: 69139, data: "cho" },
      { startTime: 69139, endTime: 69349, data: "em" },
      { startTime: 69359, endTime: 69899, data: "nghe" },
      { startTime: 69899, endTime: 70129, data: "vậy" },
      { startTime: 70139, endTime: 70679, data: "thôi." },
    ],
  },
  {
    words: [
      { startTime: 70879, endTime: 71419, data: "Vì" },
      { startTime: 71419, endTime: 71720, data: "đã" },
      { startTime: 71720, endTime: 71950, data: "lỡ" },
      { startTime: 72150, endTime: 72509, data: "yêu" },
      { startTime: 72509, endTime: 73029, data: "em" },
      { startTime: 73059, endTime: 73649, data: "rồi," },
    ],
  },
  {
    words: [
      { startTime: 73919, endTime: 74330, data: "Chẳng" },
      { startTime: 74330, endTime: 74729, data: "dám" },
      { startTime: 74729, endTime: 74820, data: "hứa" },
      { startTime: 75030, endTime: 75400, data: "xa" },
      { startTime: 75400, endTime: 75680, data: "xôi" },
    ],
  },
  {
    words: [
      { startTime: 76959, endTime: 77359, data: "Cứ" },
      { startTime: 77359, endTime: 77739, data: "nhắm" },
      { startTime: 77739, endTime: 77889, data: "mắt" },
      { startTime: 77889, endTime: 78089, data: "em" },
      { startTime: 78089, endTime: 78269, data: "lại" },
      { startTime: 78269, endTime: 78289, data: "và" },
    ],
  },
  {
    words: [
      { startTime: 78439, endTime: 78999, data: "Feel" },
      { startTime: 79450, endTime: 79830, data: "my" },
      { startTime: 79960, endTime: 80670, data: "love" },
    ],
  },
  {
    words: [
      { startTime: 81099, endTime: 81260, data: "Dù" },
      { startTime: 81270, endTime: 81559, data: "nắng" },
      { startTime: 81719, endTime: 82009, data: "mưa" },
      { startTime: 82009, endTime: 82419, data: "bao" },
      { startTime: 82419, endTime: 82759, data: "mùa" },
    ],
  },
  {
    words: [
      { startTime: 82750, endTime: 83359, data: "Thì" },
      { startTime: 83359, endTime: 83419, data: "tình" },
      { startTime: 83439, endTime: 83719, data: "anh" },
      { startTime: 83719, endTime: 83899, data: "vẫn" },
      { startTime: 84089, endTime: 84479, data: "luôn" },
      { startTime: 84479, endTime: 85209, data: "đây" },
      { startTime: 85209, endTime: 85229, data: "mà" },
    ],
  },
  {
    words: [
      { startTime: 85919, endTime: 86369, data: "Chẳng" },
      { startTime: 86369, endTime: 86710, data: "phải" },
      { startTime: 86710, endTime: 86960, data: "kiếm" },
      { startTime: 87070, endTime: 87390, data: "đâu" },
      { startTime: 87400, endTime: 88150, data: "xa" },
    ],
  },
  {
    words: [
      { startTime: 88869, endTime: 89359, data: "Vẫn" },
      { startTime: 89369, endTime: 89719, data: "giữ" },
      { startTime: 89719, endTime: 89900, data: "đó" },
      { startTime: 89900, endTime: 90020, data: "bầu" },
      { startTime: 90059, endTime: 90269, data: "trời" },
      { startTime: 90269, endTime: 90449, data: "của" },
      { startTime: 90449, endTime: 90800, data: "riêng" },
    ],
  },
  {
    words: [
      { startTime: 91179, endTime: 91899, data: "chúng" },
      { startTime: 92600, endTime: 92719, data: "ta" },
    ],
  },
  {
    words: [
      { startTime: 93090, endTime: 93229, data: "Để" },
      { startTime: 93229, endTime: 93699, data: "gió" },
      { startTime: 93699, endTime: 94039, data: "mang" },
      { startTime: 94039, endTime: 94419, data: "đi" },
      { startTime: 94419, endTime: 94809, data: "về" },
      { startTime: 94809, endTime: 94959, data: "một" },
      { startTime: 94979, endTime: 95349, data: "nơi" },
      { startTime: 95349, endTime: 95469, data: "không" },
      { startTime: 95469, endTime: 95499, data: "người." },
    ],
  },
  {
    words: [
      { startTime: 96819, endTime: 97219, data: "Đã" },
      { startTime: 97219, endTime: 97420, data: "lỡ" },
      { startTime: 97450, endTime: 97660, data: "yêu" },
      { startTime: 97660, endTime: 97920, data: "em" },
      { startTime: 97930, endTime: 98310, data: "nhiều" },
      { startTime: 98320, endTime: 98499, data: "rồi" },
    ],
  },
  {
    words: [
      { startTime: 98509, endTime: 98749, data: "Thì" },
      { startTime: 98759, endTime: 99059, data: "anh" },
      { startTime: 99069, endTime: 99479, data: "chỉ" },
      { startTime: 99479, endTime: 99809, data: "biết" },
      { startTime: 99819, endTime: 100209, data: "thế" },
      { startTime: 100209, endTime: 100630, data: "thôi" },
    ],
  },
  {
    words: [
      { startTime: 101509, endTime: 101729, data: "Dù" },
      { startTime: 101729, endTime: 102099, data: "mai" },
      { startTime: 102099, endTime: 102169, data: "về" },
      { startTime: 102219, endTime: 102499, data: "sau" },
    ],
  },
  {
    words: [
      { startTime: 102669, endTime: 102849, data: "Mình" },
      { startTime: 102879, endTime: 103189, data: "không" },
      { startTime: 103359, endTime: 103449, data: "bên" },
      { startTime: 103449, endTime: 103809, data: "cạnh" },
      { startTime: 103819, endTime: 104099, data: "nhau" },
    ],
  },
  {
    words: [
      { startTime: 104469, endTime: 104640, data: "Dù" },
      { startTime: 104650, endTime: 105079, data: "tim" },
      { startTime: 105079, endTime: 105359, data: "mình" },
      { startTime: 105359, endTime: 105630, data: "đau" },
    ],
  },
  {
    words: [
      { startTime: 105679, endTime: 105869, data: "Khi" },
      { startTime: 105869, endTime: 106249, data: "biết" },
      { startTime: 106259, endTime: 106549, data: "em" },
      { startTime: 106549, endTime: 106809, data: "đã" },
      { startTime: 106809, endTime: 107289, data: "lỡ" },
      { startTime: 107409, endTime: 107749, data: "yêu" },
      { startTime: 107769, endTime: 108439, data: "người" },
    ],
  },
  {
    words: [
      { startTime: 108839, endTime: 109260, data: "Đã" },
      { startTime: 109260, endTime: 109429, data: "lỡ" },
      { startTime: 109479, endTime: 109699, data: "yêu" },
      { startTime: 109699, endTime: 109969, data: "em" },
      { startTime: 109979, endTime: 110319, data: "nhiều" },
      { startTime: 110319, endTime: 110349, data: "rồi" },
    ],
  },
  {
    words: [
      { startTime: 110509, endTime: 110729, data: "Thì" },
      { startTime: 110759, endTime: 110999, data: "anh" },
      { startTime: 111009, endTime: 111479, data: "sẽ" },
      { startTime: 111479, endTime: 111659, data: "bất" },
      { startTime: 111759, endTime: 112199, data: "chấp" },
      { startTime: 112199, endTime: 112589, data: "luôn" },
    ],
  },
  {
    words: [
      { startTime: 113469, endTime: 113749, data: "Dù" },
      { startTime: 113759, endTime: 114069, data: "mưa," },
      { startTime: 114069, endTime: 114289, data: "dù" },
      { startTime: 114289, endTime: 114539, data: "giông" },
    ],
  },
  {
    words: [
      { startTime: 114610, endTime: 114849, data: "Dù" },
      { startTime: 114849, endTime: 115179, data: "sông" },
      { startTime: 115189, endTime: 115459, data: "sâu," },
      { startTime: 115459, endTime: 115750, data: "biển" },
      { startTime: 115760, endTime: 116250, data: "xa" },
    ],
  },
  {
    words: [
      { startTime: 116740, endTime: 116829, data: "Dù" },
      { startTime: 116859, endTime: 117250, data: "nắng" },
      { startTime: 117259, endTime: 117699, data: "cháy" },
      { startTime: 117699, endTime: 117860, data: "anh" },
      { startTime: 117860, endTime: 118199, data: "cũng" },
      { startTime: 118229, endTime: 118519, data: "không" },
      { startTime: 118519, endTime: 118679, data: "hề" },
      { startTime: 118689, endTime: 119269, data: "lo" },
    ],
  },
  {
    words: [
      { startTime: 119539, endTime: 119699, data: "Chỉ" },
      { startTime: 119709, endTime: 119949, data: "sợ" },
      { startTime: 119949, endTime: 120139, data: "mình" },
      { startTime: 120139, endTime: 120489, data: "đánh" },
      { startTime: 120489, endTime: 120889, data: "mất" },
      { startTime: 120899, endTime: 121199, data: "em" },
      { startTime: 121199, endTime: 121289, data: "khi," },
    ],
  },
  {
    words: [
      { startTime: 121549, endTime: 121879, data: "Thu" },
      { startTime: 121879, endTime: 121929, data: "vừa" },
      { startTime: 121939, endTime: 122359, data: "sang," },
      { startTime: 122359, endTime: 122670, data: "lá" },
      { startTime: 122670, endTime: 123120, data: "xanh" },
      { startTime: 123120, endTime: 123440, data: "bỗng" },
      { startTime: 123590, endTime: 124160, data: "úa" },
      { startTime: 124170, endTime: 124440, data: "vàng" },
    ],
  },
  {
    words: [
      { startTime: 125499, endTime: 125739, data: "Khi" },
      { startTime: 125969, endTime: 126039, data: "mưa" },
      { startTime: 126039, endTime: 126270, data: "còn" },
      { startTime: 126280, endTime: 126450, data: "chưa" },
      { startTime: 126450, endTime: 126690, data: "tới" },
    ],
  },
  {
    words: [
      { startTime: 128439, endTime: 128679, data: "Em" },
      { startTime: 128679, endTime: 129089, data: "thay" },
      { startTime: 129089, endTime: 129319, data: "người" },
      { startTime: 129319, endTime: 129479, data: "yêu" },
      { startTime: 129479, endTime: 130039, data: "mới," },
      { startTime: 130039, endTime: 130049, data: "oh" },
      { startTime: 130229, endTime: 130319, data: "no" },
      { startTime: 130319, endTime: 130339, data: "no" },
    ],
  },
  {
    words: [
      { startTime: 131689, endTime: 131909, data: "Sợ" },
      { startTime: 131909, endTime: 132039, data: "mình" },
      { startTime: 132049, endTime: 132450, data: "sẽ" },
      { startTime: 132450, endTime: 132750, data: "khiến" },
      { startTime: 132880, endTime: 133170, data: "em" },
      { startTime: 133259, endTime: 133559, data: "yêu" },
      { startTime: 133559, endTime: 133799, data: "phai" },
      { startTime: 133809, endTime: 134159, data: "nhạt" },
      { startTime: 134159, endTime: 134189, data: "hơn" },
    ],
  },
  {
    words: [
      { startTime: 134299, endTime: 134720, data: "Giữa" },
      { startTime: 134720, endTime: 135100, data: "mênh" },
      { startTime: 135100, endTime: 135489, data: "mông" },
      { startTime: 135489, endTime: 135899, data: "bộn" },
      { startTime: 136199, endTime: 136989, data: "bề" },
    ],
  },
  {
    words: [
      { startTime: 137529, endTime: 137689, data: "Em" },
      { startTime: 137949, endTime: 138029, data: "ơi" },
      { startTime: 138039, endTime: 138289, data: "chờ" },
      { startTime: 138299, endTime: 138500, data: "anh" },
      { startTime: 138500, endTime: 138640, data: "với" },
    ],
  },
  {
    words: [
      { startTime: 140299, endTime: 140649, data: "Chỉ" },
      { startTime: 140649, endTime: 140749, data: "biết" },
      { startTime: 140749, endTime: 140779, data: "nói" },
      { startTime: 140979, endTime: 141159, data: "cho" },
      { startTime: 141159, endTime: 141349, data: "em" },
      { startTime: 141349, endTime: 141819, data: "nghe" },
      { startTime: 141969, endTime: 142069, data: "vậy" },
      { startTime: 142099, endTime: 142329, data: "thôi" },
    ],
  },
  {
    words: [
      { startTime: 142969, endTime: 143419, data: "Vì" },
      { startTime: 143419, endTime: 143499, data: "đã" },
      { startTime: 143509, endTime: 144010, data: "lỡ" },
      { startTime: 144220, endTime: 144539, data: "yêu" },
      { startTime: 144579, endTime: 145039, data: "em" },
      { startTime: 145049, endTime: 145620, data: "rồi" },
    ],
  },
  {
    words: [
      { startTime: 145940, endTime: 146329, data: "Chẳng" },
      { startTime: 146329, endTime: 146739, data: "dám" },
      { startTime: 146749, endTime: 146889, data: "hứa" },
      { startTime: 147019, endTime: 147399, data: "xa" },
      { startTime: 147399, endTime: 147919, data: "xôi" },
    ],
  },
  {
    words: [
      { startTime: 148969, endTime: 149369, data: "Cứ" },
      { startTime: 149379, endTime: 149739, data: "nhắm" },
      { startTime: 149739, endTime: 149899, data: "mắt" },
      { startTime: 149899, endTime: 150019, data: "em" },
      { startTime: 150019, endTime: 150049, data: "lại" },
      { startTime: 150049, endTime: 150069, data: "và" },
    ],
  },
  {
    words: [
      { startTime: 150369, endTime: 150699, data: "Feel" },
      { startTime: 151619, endTime: 151789, data: "my" },
      { startTime: 151789, endTime: 151819, data: "love" },
    ],
  },
  {
    words: [
      { startTime: 153059, endTime: 153279, data: "Dù" },
      { startTime: 153289, endTime: 153779, data: "nắng" },
      { startTime: 153779, endTime: 154039, data: "mưa" },
      { startTime: 154039, endTime: 154379, data: "bao" },
      { startTime: 154399, endTime: 154749, data: "mùa" },
    ],
  },
  {
    words: [
      { startTime: 154779, endTime: 154979, data: "Thì" },
      { startTime: 154979, endTime: 155439, data: "tình" },
      { startTime: 155439, endTime: 155509, data: "anh" },
      { startTime: 155729, endTime: 155899, data: "vẫn" },
      { startTime: 156089, endTime: 156499, data: "luôn" },
      { startTime: 156499, endTime: 157229, data: "đây" },
      { startTime: 157229, endTime: 157249, data: "mà" },
    ],
  },
  {
    words: [
      { startTime: 157889, endTime: 158369, data: "Chẳng" },
      { startTime: 158379, endTime: 158689, data: "phải" },
      { startTime: 158689, endTime: 159130, data: "kiếm" },
      { startTime: 159130, endTime: 159380, data: "đâu" },
      { startTime: 159390, endTime: 159890, data: "xa" },
    ],
  },
  {
    words: [
      { startTime: 160889, endTime: 161319, data: "Vẫn" },
      { startTime: 161349, endTime: 161729, data: "giữ" },
      { startTime: 161729, endTime: 161889, data: "đó" },
      { startTime: 161889, endTime: 162079, data: "bầu" },
      { startTime: 162079, endTime: 162269, data: "trời" },
      { startTime: 162269, endTime: 162409, data: "của" },
      { startTime: 162449, endTime: 162869, data: "riêng" },
    ],
  },
  {
    words: [
      { startTime: 163200, endTime: 163570, data: "chúng" },
      { startTime: 163570, endTime: 163680, data: "ta" },
    ],
  },
  {
    words: [
      { startTime: 165079, endTime: 165239, data: "Để" },
      { startTime: 165319, endTime: 165539, data: "gió" },
      { startTime: 165679, endTime: 166049, data: "mang" },
      { startTime: 166049, endTime: 166449, data: "đi" },
      { startTime: 166449, endTime: 166549, data: "về" },
      { startTime: 166549, endTime: 166579, data: "một" },
      { startTime: 166979, endTime: 167069, data: "nơi" },
      { startTime: 167309, endTime: 167699, data: "không" },
      { startTime: 167729, endTime: 168049, data: "người" },
    ],
  },
  {
    words: [
      {
        startTime: 168420,
        endTime: 170730,
        data: "Đã lỡ yêu..nah nah nah",
      },
    ],
  },
  {
    words: [
      {
        startTime: 170730,
        endTime: 173740,
        data: "U know, oh lỡ yêu…nah nah nah",
      },
    ],
  },
  {
    words: [
      { startTime: 173419, endTime: 173699, data: "I" },
      { startTime: 173699, endTime: 173729, data: "love" },
      { startTime: 174069, endTime: 174219, data: "you" },
      { startTime: 174229, endTime: 174439, data: "so," },
    ],
  },
  {
    words: [
      {
        startTime: 175170,
        endTime: 177200,
        data: "Bei I love you so",
      },
    ],
  },
  {
    words: [
      { startTime: 177089, endTime: 177229, data: "Mình" },
      { startTime: 177249, endTime: 177469, data: "phải" },
      { startTime: 177469, endTime: 177699, data: "bước" },
      { startTime: 177809, endTime: 178139, data: "chậm" },
      { startTime: 178139, endTime: 178169, data: "lại" },
    ],
  },
  {
    words: [
      { startTime: 178589, endTime: 178789, data: "Vì" },
      { startTime: 178789, endTime: 178869, data: "ngày" },
      { startTime: 179069, endTime: 179459, data: "mai" },
      { startTime: 179519, endTime: 179819, data: "rất" },
      { startTime: 179819, endTime: 180009, data: "dài" },
    ],
  },
  {
    words: [
      {
        startTime: 180180,
        endTime: 182620,
        data: "Đã lỡ yêu..nah nah nah",
      },
    ],
  },
  {
    words: [
      {
        startTime: 182620,
        endTime: 185660,
        data: "U know, oh lỡ yêu…nah nah nah",
      },
    ],
  },
  {
    words: [
      { startTime: 185309, endTime: 186119, data: "I" },
      { startTime: 186119, endTime: 186149, data: "love" },
      { startTime: 186149, endTime: 186179, data: "you" },
      { startTime: 186209, endTime: 186449, data: "so," },
    ],
  },
  {
    words: [
      {
        startTime: 186970,
        endTime: 189100,
        data: "Bei I love you so",
      },
    ],
  },
  {
    words: [
      { startTime: 189089, endTime: 189289, data: "Mình" },
      { startTime: 189289, endTime: 189459, data: "phải" },
      { startTime: 189459, endTime: 189819, data: "bước" },
      { startTime: 189829, endTime: 190109, data: "chậm" },
      { startTime: 191469, endTime: 191499, data: "lại," },
      { startTime: 191499, endTime: 191529, data: "chậm" },
      { startTime: 191529, endTime: 191559, data: "lại.." },
    ],
  },
  {
    words: [
      { startTime: 191730, endTime: 191989, data: "Vì" },
      { startTime: 191989, endTime: 192339, data: "biết" },
      { startTime: 192339, endTime: 193019, data: "đâu," },
      { startTime: 193089, endTime: 193649, data: "sớm" },
      { startTime: 193649, endTime: 193819, data: "mai" },
      { startTime: 193819, endTime: 194089, data: "thức" },
      { startTime: 194099, endTime: 194499, data: "dậy" },
    ],
  },
  {
    words: [
      { startTime: 195129, endTime: 195149, data: "Em" },
      { startTime: 195149, endTime: 195329, data: "không" },
      { startTime: 195329, endTime: 195519, data: "còn" },
      { startTime: 195519, endTime: 195689, data: "đây" },
      { startTime: 195839, endTime: 196239, data: "ôm" },
      { startTime: 196249, endTime: 196609, data: "anh" },
    ],
  },
  {
    words: [
      { startTime: 196939, endTime: 197369, data: "Nhẹ" },
      { startTime: 197379, endTime: 197769, data: "hôn" },
      { startTime: 197769, endTime: 197939, data: "anh" },
    ],
  },
  {
    words: [
      { startTime: 197980, endTime: 198129, data: "Để" },
      { startTime: 198129, endTime: 198420, data: "tình" },
      { startTime: 198420, endTime: 198670, data: "ta" },
      { startTime: 198870, endTime: 199090, data: "cứ" },
      { startTime: 199100, endTime: 199729, data: "trôi" },
      { startTime: 199729, endTime: 199959, data: "lững" },
      { startTime: 199959, endTime: 200159, data: "lờ" },
    ],
  },
  {
    words: [
      { startTime: 200919, endTime: 201090, data: "Chờ" },
      { startTime: 201090, endTime: 201339, data: "giông" },
      { startTime: 201339, endTime: 201499, data: "và" },
      { startTime: 201499, endTime: 201859, data: "bão" },
      { startTime: 201859, endTime: 202160, data: "cuốn" },
      { startTime: 202160, endTime: 202640, data: "đi" },
      { startTime: 202790, endTime: 202920, data: "bất" },
      { startTime: 202920, endTime: 202960, data: "ngờ" },
    ],
  },
  {
    words: [
      { startTime: 203679, endTime: 204019, data: "Rồi" },
      { startTime: 204019, endTime: 204379, data: "lỡ" },
      { startTime: 204379, endTime: 205030, data: "đâu," },
      { startTime: 205110, endTime: 205639, data: "giấc" },
      { startTime: 205639, endTime: 205789, data: "mơ" },
      { startTime: 205799, endTime: 206179, data: "không" },
      { startTime: 206199, endTime: 206529, data: "thành" },
    ],
  },
  {
    words: [
      { startTime: 207029, endTime: 207129, data: "Em" },
      { startTime: 207159, endTime: 207369, data: "không" },
      { startTime: 207369, endTime: 207539, data: "còn" },
      { startTime: 207539, endTime: 207919, data: "kề" },
      { startTime: 207919, endTime: 208139, data: "vai" },
      { startTime: 208149, endTime: 208629, data: "anh" },
    ],
  },
  {
    words: [
      { startTime: 208989, endTime: 209390, data: "Tình" },
      { startTime: 209400, endTime: 209780, data: "mong" },
      { startTime: 209780, endTime: 209939, data: "manh" },
    ],
  },
  {
    words: [
      { startTime: 209779, endTime: 210179, data: "Một" },
      { startTime: 210179, endTime: 210419, data: "người" },
      { startTime: 210419, endTime: 210699, data: "đứng" },
      { startTime: 210859, endTime: 211060, data: "cứ" },
      { startTime: 211060, endTime: 211609, data: "trông" },
      { startTime: 211609, endTime: 211759, data: "với" },
      { startTime: 211769, endTime: 212200, data: "chờ" },
    ],
  },
  {
    words: [
      { startTime: 212949, endTime: 213039, data: "Người" },
      { startTime: 213080, endTime: 213370, data: "kia" },
      { startTime: 213370, endTime: 213489, data: "thì" },
      { startTime: 213700, endTime: 213859, data: "ôm" },
      { startTime: 213859, endTime: 214239, data: "giấc" },
      { startTime: 214239, endTime: 214450, data: "mơ" },
    ],
  },
  {
    words: [
      { startTime: 214949, endTime: 215389, data: "Vì" },
      { startTime: 215389, endTime: 215720, data: "đã" },
      { startTime: 215720, endTime: 215970, data: "lỡ" },
      { startTime: 216139, endTime: 216509, data: "yêu" },
      { startTime: 216569, endTime: 217069, data: "em" },
      { startTime: 217129, endTime: 217339, data: "rồi" },
    ],
  },
  {
    words: [
      { startTime: 217899, endTime: 218329, data: "Chẳng" },
      { startTime: 218339, endTime: 218799, data: "dám" },
      { startTime: 218799, endTime: 218899, data: "hứa" },
      { startTime: 220849, endTime: 220869, data: "xa" },
      { startTime: 220869, endTime: 220899, data: "xôi" },
    ],
  },
  {
    words: [
      {
        startTime: 221030,
        endTime: 222490,
        data: "Cứ nhắm mắt em lại và ",
      },
    ],
  },
  {
    words: [
      { startTime: 222409, endTime: 223179, data: "Feel" },
      { startTime: 223179, endTime: 223309, data: "my" },
      { startTime: 223309, endTime: 223339, data: "love" },
    ],
  },
  {
    words: [
      {
        startTime: 223500,
        endTime: 225380,
        data: "Can you feel my love, love bei?",
      },
    ],
  },
  {
    words: [
      {
        startTime: 225380,
        endTime: 226750,
        data: "Dù nắng mưa bao mùa ",
      },
    ],
  },
  {
    words: [
      { startTime: 227239, endTime: 227279, data: "Tình" },
      { startTime: 227279, endTime: 227309, data: "anh" },
      { startTime: 228089, endTime: 228349, data: "vẫn" },
      { startTime: 228359, endTime: 228779, data: "sẽ" },
      { startTime: 229230, endTime: 229799, data: "đây" },
      { startTime: 229799, endTime: 229819, data: "mà" },
    ],
  },
  {
    words: [
      { startTime: 229980, endTime: 230369, data: "Chẳng" },
      { startTime: 230369, endTime: 230709, data: "phải" },
      { startTime: 230709, endTime: 230919, data: "kiếm" },
      { startTime: 231119, endTime: 231369, data: "đâu" },
      { startTime: 231379, endTime: 231609, data: "xa" },
    ],
  },
  {
    words: [
      {
        startTime: 232950,
        endTime: 235230,
        data: "Vẫn giữ đó bầu trời của riêng ",
      },
    ],
  },
  {
    words: [{ startTime: 235230, endTime: 237400, data: "chúng ta" }],
  },
  {
    words: [
      { startTime: 236979, endTime: 236999, data: "Để" },
      { startTime: 237239, endTime: 237409, data: "gió" },
      { startTime: 237709, endTime: 237919, data: "mang" },
      { startTime: 237919, endTime: 237939, data: "đi" },
      { startTime: 237939, endTime: 237959, data: "về" },
      { startTime: 237959, endTime: 238049, data: "một" },
      { startTime: 238049, endTime: 238079, data: "nơi" },
      { startTime: 239349, endTime: 239739, data: "không" },
      { startTime: 239739, endTime: 239769, data: "người" },
    ],
  },
  {
    words: [
      { startTime: 239949, endTime: 239969, data: "Đã" },
      { startTime: 240359, endTime: 240849, data: "lỡ" },
      { startTime: 240859, endTime: 241350, data: "yêu.." },
    ],
  },
  {
    words: [
      { startTime: 242539, endTime: 242789, data: "Vì" },
      { startTime: 242789, endTime: 243199, data: "một" },
      { startTime: 243199, endTime: 243599, data: "người" },
      { startTime: 243599, endTime: 244020, data: "lỡ" },
      { startTime: 244030, endTime: 244810, data: "yêu" },
    ],
  },
  {
    words: [
      { startTime: 246960, endTime: 246980, data: "Lỡ" },
      { startTime: 246990, endTime: 247480, data: "yêu..." },
    ],
  },
];

var karaoke = document.querySelector(".karaoke");

var line1 = karaoke.querySelector(".line-1");
var line1Text = line1.innerText;
var line2 = karaoke.querySelector(".line-2");
var line2Text = line2.innerText;
var audio = document.querySelector("audio");
var indexLyric = 1;
//Yêu cầu: Chuyển đổi hết thành phần trăm (%)

var handleUpdateValue = function (value) {
  progress.style.width = `${value}%`;
};

//Tính độ dài của progress-bar
var progressBarWidth = progressBar.clientWidth;
var isDrag = false; //Cắm cờ
var initialClientX;
var initialValue = 0;
var value;

progressBar.addEventListener("mousedown", function (e) {
  if (e.which === 1) {
    var offsetX = e.offsetX;
    value = (offsetX * 100) / progressBarWidth;
    initialValue = value;
    initialClientX = e.clientX;
    isDrag = true;
    handleUpdateValue(value);
    handleIndexLyric(audio.currentTime);
    var currentTime = (value / 100) * audio.duration;

    currentTimeEl.innerText = getTime(currentTime);

    audio.currentTime = currentTime;
  }
});

progressSpan.addEventListener("mousedown", function (e) {
  e.stopPropagation();
  if (e.which === 1) {
    isDrag = true;
    initialClientX = e.clientX;
  }
});

document.addEventListener("mousemove", function (e) {
  if (isDrag) {
    var moveWidth = e.clientX - initialClientX;
    value = (moveWidth * 100) / progressBarWidth;
    value = initialValue + value;

    if (value < 0) {
      value = 0;
    }

    if (value > 100) {
      value = 100;
    }

    handleUpdateValue(value);
    handleIndexLyric(audio.currentTime);
    var currentTime = (value / 100) * audio.duration;

    currentTimeEl.innerText = getTime(currentTime);

    timePreview.classList.remove("show");
    timePreview.innerText = 0;
    timePreview.style.left = 0;
  }
});

document.addEventListener("mouseup", function () {
  if (isDrag) {
    isDrag = false;
    initialValue = value;

    var currentTime = (value / 100) * audio.duration;
    audio.currentTime = currentTime;
  }
});

progressSpan.addEventListener("mousemove", function (e) {
  e.stopPropagation();
});

//Xây dựng trình phát nhạc
var audio = document.querySelector(".audio");

var durationEl = progressBar.nextElementSibling;

var currentTimeEl = progressBar.previousElementSibling;

var playBtn = document.querySelector(".play-btn");

var pauseBtnIcon = `<i class="fa-solid fa-pause"></i>`;

var playBtnIcon = `<i class="fa-solid fa-play"></i>`;

var timePreview = progressBar.querySelector(".time-preview");

var getTime = function (seconds) {
  //Giây => Phút và giây
  var mins = Math.floor(seconds / 60);
  seconds -= mins * 60;
  seconds = Math.floor(seconds);

  return `${mins < 10 ? `0${mins}` : mins}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`;
};
// Xây dựng chức năng karaoke

function getTimeSentence(time) {
  return time.toFixed(3) * 1000;
}

function sentence(index) {
  var data = sentences[index - 1].words;
  var words = data.map(function (i) {
    return i.data;
  });
  var startTime = data[0].startTime;
  var endTime = data[data.length - 1].endTime;
  return { startTime: startTime, endTime: endTime, lyric: words.join(" ") };
}

function handleIndexLyric(currentTime) {
  var time = getTimeSentence(currentTime);
  for (let i = 1; i <= sentences.length; i++) {
    if (sentence(i).startTime <= time && time <= sentence(i).endTime) {
      indexLyric = i % 2 ? i : i - 1;
      break;
    }
  }
}

//Lắng nghe sự kiện load xong nhạc
audio.addEventListener("loadeddata", function () {
  durationEl.innerText = getTime(audio.duration);
});

playBtn.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
    this.innerHTML = pauseBtnIcon;
  } else {
    audio.pause();
    this.innerHTML = playBtnIcon;
  }
});

audio.addEventListener("timeupdate", function () {
  //Lấy ra tỷ lệ phần trăm dựa vào currentTime và duration
  var value = (audio.currentTime * 100) / audio.duration;

  if (!isDrag) {
    currentTimeEl.innerText = getTime(audio.currentTime);

    handleUpdateValue(value);
    handleIndexLyric(audio.currentTime);
  }
  // Chức năng lyrics

  if (indexLyric < sentences.length) {
    if (getTimeSentence(audio.currentTime) >= sentence(indexLyric).startTime) {
      line1.innerText = sentence(indexLyric).lyric;
      line2.innerText = sentence(indexLyric + 1)?.lyric;
      indexLyric += 2;
    }
  }
});

progressBar.addEventListener("mousemove", function (e) {
  timePreview.classList.add("show");
  var rate = (e.offsetX * 100) / progressBarWidth;
  var currentTime = (rate / 100) * audio.duration;
  timePreview.innerText = getTime(currentTime);
  timePreview.style.left = `${e.offsetX}px`;
});

progressBar.addEventListener("mouseout", function () {
  timePreview.classList.remove("show");
  timePreview.innerText = 0;
  timePreview.style.left = 0;
});

audio.addEventListener("ended", function () {
  playBtn.innerHTML = playBtnIcon;
  handleUpdateValue(0);
  indexLyric = 1;
  line1.innerText = line1Text;
  line2.innerText = line2Text;
  audio.currentTime = 0;
});

audio.addEventListener("play", function () {
  playBtn.innerHTML = pauseBtnIcon;
});

audio.addEventListener("pause", function () {
  playBtn.innerHTML = playBtnIcon;
});
