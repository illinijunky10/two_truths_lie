$(document).ready( function (){

$('.title1').show();

$('.title2').hide();

$('.title3').hide();

$('#button1').on('click' , function () {
  $('.title1').hide();
  $('.title2').show();
  $('.title3').hide();
  $('.title2').addClass('incorrectT1');
  $(this).addClass('wrong');
  $('#button2').removeClass('wrong');
  $('#button3').removeClass('wrong');
  $('.title3').removeClass('correctT1');
});

$('#button3').on('click', function () {
  $('.title1').hide();
  $('.title2').show();
  $('.title3').hide();
  $('.title2').addClass('incorrectT1');
  $(this).addClass('wrong');
  $('#button1').removeClass('wrong');
  $('#button2').removeClass('correct');
  $('.title3').removeClass('correctT1');
});

$('#button2').on('click', function () {
  $('.title1').hide();
  $('.title2').hide();
  $('.title3').show();
  $('.title3').addClass('correctT1');
  $(this).addClass('correct');
  $('#button1').removeClass('wrong');
  $('#button3').removeClass('wrong');
  $('.title1').removeClass('incorrectT1');
});

});
