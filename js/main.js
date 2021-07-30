$(function(){

  $('.header__menu-btn').on('click', function(){
    $('.menu').slideToggle();
  });

  $('.header__user').on('click', function(){
    $('.user__menu').slideToggle();
  });

});