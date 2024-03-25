document.addEventListener("DOMContentLoaded", function () {
  var text = "Xin chào Anh Khánh";
  var index = 0;
  var speed = 200; // Tốc độ viết (ms)
  var imageLoaded = false; // Biến flag để kiểm tra xem hình ảnh đã xuất hiện hay chưa

  // Kiểm tra xem hình ảnh đã xuất hiện hay chưa
  var image = document.getElementById("pummy1");
  if (image) {
    image.onload = function () {
      imageLoaded = true;
    };
  }

  function typeWriter() {
    if (index < text.length) {
      // Sử dụng innerHTML để thay đổi nội dung của phần tử có id "typed-text"
      document.getElementById("typed-text").innerHTML += text.charAt(index);
      index++;
      // Thêm con trỏ ngay sau khi ký tự mới được viết ra
      document.getElementById("typed-text").innerHTML +=
        '<div class="cursor"></div>';
      // Lăn đến cuối trang để con trỏ luôn nằm ở cuối
      window.scrollTo(0, document.body.scrollHeight);
      setTimeout(typeWriter, speed);
      setTimeout(function () {
        var cursor = document.querySelector(".cursor");
        if (cursor) {
          console.log("remove cursor");
          cursor.style.display = "none";
        }
      }, 2000);
      console.log(index);
    } else if (index >= text.length) {
      console.log("index >= length");

      // Thêm class "glow-text" để kích hoạt hiệu ứng phát sáng
      document.getElementById("typed-text").classList.add("neon");
      // Sau khi viết xong chuỗi, ẩn con trỏ sau 2 giây
      setTimeout(function () {
        var cursors = document.querySelectorAll(".cursor");
        if (cursors) {
          console.log("remove cursor");
          cursors.forEach(function (cursor) {
            cursor.style.display = "none";
          });
        }
      }, 2000);
    }
  }

  setTimeout(function () {
    typeWriter();
  }, 4000);
});
