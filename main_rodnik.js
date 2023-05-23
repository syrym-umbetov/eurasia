$(document).ready(function () {
  $(".burger-menu").click(function () {
    $(".inside-menu").animate({ width: "toggle" });
  });

  $(".expand1").click(function () {
    $(".content1").slideDown();
    $(".expand1").hide();
  });
  $(".expand2").click(function () {
    $(".content2").slideDown();
    $(".expand2").hide();
  });
  $(".expand3").click(function () {
    $(".content3").slideDown();
    $(".expand3").hide();
  });
  $(".expand4").click(function () {
    $(".content4").slideDown();
    $(".expand4").hide();
  });
  $(".expand5").click(function () {
    $(".content5").slideDown();
    $(".expand5").hide();
  });
  $(".expand6").click(function () {
    $(".content6").slideDown();
    $(".expand6").hide();
  });
  $(".expand7").click(function () {
    $(".content7").slideDown();
    $(".expand7").hide();
  });
  $(".expand8").click(function () {
    $(".content8").slideDown();
    $(".expand8").hide();
  });
  $(".expand9").click(function () {
    $(".content9").slideDown();
    $(".expand9").hide();
  });
  $(".expand10").click(function () {
    $(".content10").slideDown();
    $(".expand10").hide();
  });
  $(".expand11").click(function () {
    $(".content11").slideDown();
    $(".expand11").hide();
  });
  $(".expand12").click(function () {
    $(".content12").slideDown();
    $(".expand12").hide();
  });

  $(".sliderd").slick({
    slidesToShow: 1,
  });

  $(".slidersss").slick({
    slidesToShow: 1,
    nextArrow: $(".arrow-rightsss"),
  });

  $(".sliderssss").slick({
    slidesToShow: 1,
    nextArrow: $(".arrow-rightssss"),
  });

  $(".sliders").slick({
    slidesToShow: 1,
    nextArrow: $(".arrow-right"),
  });
  $(".sliderss").slick({
    slidesToShow: 1,
    nextArrow: $(".arrow-rights"),
  });

  $(".more").click(function () {
    $(".form").show();
  });

  $(".close").click(hideModal);

  function hideModal() {
    $(".form").hide();
  }
});
