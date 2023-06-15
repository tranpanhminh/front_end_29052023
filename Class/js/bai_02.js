function bai_02() {
    var monthInput = document.getElementById("month").value;
    var month = parseInt(monthInput);
    var day ="";

    switch (month) {
        case 2:
            day = '28 hoặc 29';
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            day = '30';
            break;
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            day = '31';
            break;
        default:
            day = "Error"
    }

    var resultElement = document.getElementById("ket-qua");
    resultElement.innerHTML = day === "Error" ? "Vui lòng nhập đúng định dạng" : "Tháng " + month + " có " + day + " ngày";
    //Trước dấu ? là nếu sau dấu : là kết quả thì, giữa dấu ? và dấu : là mệnh đề đúng
    // Nếu day = error thì hiển thị VUi lòng nhập đúng định dạng, còn nếu sai thì sẽ hiển thị Tháng + month + có + day + ngày
}