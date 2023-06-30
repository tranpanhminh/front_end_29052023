// <---------------------------->
// Script bài 1
// Bài tập 1: Tạo 1 hình ảnh mới được nhập từ người dùng (người dùng sẽ nhập URL)
// Bước 1: Có nơi chứa ảnh
// Bước 2: Lấy được link ảnh
// Bước 3: Tạo 1 thẻ img mới
// Bước 4: Gán lại src của img mới == link ảnh nhập vào
// Bước 5: Thêm vào nơi chứa ảnh (Element)

function bai_01() {
  const sectionElement = document.querySelector(".section-01");
  const inputImage = prompt("Nhập đường dẫn ảnh");
  const imgElement = document.createElement("img");

  //   hoặc dùng imgElement.setAttribute("src", inputImage);
  imgElement.src = inputImage;

  console.log(imgElement);
  sectionElement.appendChild(imgElement);
}

// <---------------------------->
// Script bài 2
let doremonImg = document.querySelector(".doremon-img");

let up = 0;
let right = 0;

window.addEventListener("keydown", (event) => {
  console.log("Bàn phím:", event.key);
  if (event.key === "ArrowUp") {
    up += 10;
    doremonImg.style.bottom = up + "px";
  }

  if (event.key === "ArrowRight") {
    right += 10;
    doremonImg.style.left = right + "px";
  }

  if (event.key === "ArrowDown") {
    up -= 10;
    doremonImg.style.bottom = up + "px";
  }

  if (event.key === "ArrowLeft") {
    right -= 10;
    doremonImg.style.left = right + "px";
  }
});

doremonImg.addEventListener("Click", (e) => {
  console.log("Click Mouse", e);
});

// Nếu vượt qua khỏi màn hình thì đảo ngược lại

// Bài 3: Mèo chuột, nếu mèo tới được vị trí của chuột thì bắt được chuột
