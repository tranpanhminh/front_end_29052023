// Script bài 1
function bai_01() {
    let value = +prompt("Nhập một số ");
    for (let k = 0; k <= value; k++) {
      if (k <= 1) {
        console.log("Khoong phai so nguyen to", k);
      }
      for (let i = 2; i <= k; i++) {
        if (k % i == 0) {
          console.log("Khong phai so nguyen to", k);
        }
      }
    }
}

// Script bài 2
function bai_02() {
    let N;
    let soNguyenTo = "Số nguyên tố";
    let soHoanHao = "Số hoàn hảo";
    let soChan = "Số chẵn";
    let soLe = "Số lẻ";
    do {
        N = +prompt("Nhập vào số N:");
        console.log(N);
        
        // Kiểm tra số chẳn và số lẻ
        if (N > 0) {
        
            if (N % 2 == 0) {
            soChan += " " + N;
        }   else {
            soLe += " " + N;
        }

        // Kiểm tra số nguyên tố
        if (N > 1) {
            let isCheckPrime = true;
            for (let i = 2; i < N; i++) {
                if (N % i == 0) {
                    isCheckPrime = false;
                }
            }
            
            if (isCheckPrime){
                soNguyenTo += " " + N;
        }
        }

        // Kiểm tra số hoàn hảo
        let sum = 0;
        for (let i = 1; i <= N / 2; i++) {
            if (N % i == 0) {
                sum += i;
            }
        }
        if (sum == N) {
            soHoanHao += " " + N;
        }

        // do something...
    }
    } while (N > 0); 
    document.write(soChan);
    document.write(soLe);
    document.write(soNguyenTo);
    document.write(soHoanHao);
}

// Script bài 3
function bai_03() {
    let sum = 0;
    let count = 0
for (let i = 0; count < 30; i++) {
    if (i % 5 == 0) {
        sum = sum + i;
        count = count + 1;
    }
}
console.log(sum);
}