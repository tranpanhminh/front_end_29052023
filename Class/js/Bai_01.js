// Script bài 1
function bai_01() {
    let value = +prompt("Nhập một số ");
    for (let k = 0; k <= value; k++) {
      if (k <= 1) {
        console.log("Khoong phai so nguyen to", k);
      }
      for (let i = 2; i < k; i++) {
        if (k % i == 0) {
          console.log("Khong phai so nguyen to", k);
        }
      }
    }
}
