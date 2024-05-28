$(document).ready(function () {
    $(".menu-btn").click(function () {
      $(".menu-btn-open").toggleClass("close");
      $(".menu-btn-close").toggleClass("close");
      $(".menu").toggleClass("open");
    });
  });