$(document).ready(function () {
  //   alert("Hello JQuery");

  $("#btn-01").click(() => {
    alert("I'm JQuery");
  });

  const btnElement = document.querySelector("#btn-02");
  btnElement.addEventListener("click", () => {
    alert("I'm JQuery 2");
  });

  // Ví dụ thêm về Keydown
  $("#input-01").keydown(() => {
    // Sử dụng để random màu sắc
    $("#result-01-1").css("color", "green");
  });

  // Sự kiện Scroll
  $(window).scroll(() => {
    console.log("Scroll");
  });

  // SỰ kiện Change
  $("#input-01").change(() => {
    // oninput trong js
    const value = $("#input-01").val();
    $("#input-02").val(value);
    console.log("Change", value);
  });

  // Bắt sự kiện blur
  $("#input-01").blur(() => {
    // onchange trong js
    const value = $("#input-01").val();
    console.log("blur", value);

    $("#result-01-1").append(value);
  });

  // Làm việc với toggle
  const pElement = $("#result-01");
  $("#btn-toggle").click(() => {
    $(pElement).toggle();
  });

  // Toggle Class
  $("#toggle-box").click(() => {
    $("#box").toggleClass("box");
  });

  // Dùng hiệu ứng với JQuery
  $("#notify").hide();
  $("#btn-03").click(() => {
    // $("#notify").show(2000, () => {
    //   $("#notify").slideToggle(1000);
    // });

    $("#change-box").animate(
      {
        width: "200px",
        height: "200px",
      },
      1000
    );
  });
});
