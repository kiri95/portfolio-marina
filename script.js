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

  $('.img-vinted').click(function () {
    $('#vin, #vin2, #vin3').toggleClass('vacio')
  })

  $('.img-vinted').hover(function () {
      $('.img-vinted').css('transform','scale(1.25)');
    }, function() {
      $('.img-vinted').css('transform','scale(1)');
    }
  );

  $('.hover').hover(function () {
      $(this).css('transform','scale(1.25)');
    }, function() {
      $(this).css('transform','scale(1)');
    }
  );

  // $(document).scroll(function() {
  //   alert('scroll')
  // })
})
