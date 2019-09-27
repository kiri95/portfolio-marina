'use strict';

$(document).ready( function(){

  $('.button').click(function () {
    $('.hamburger').toggleClass('open');
    $('#nav').toggleClass('hidden')
  })

  $('.hamburger').click(function () {
    $('.hamburger').toggleClass('open');
    $('#nav').toggleClass('hidden')
    $('#nav').removeClass('none')

});


})
