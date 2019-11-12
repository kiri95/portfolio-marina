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
    $('#vin, #vin2, #vin3, #vin4').toggleClass('vacio')
    $('.pepe').animate({
      scrollTop: $(".vinted").offset().top
    }, 2000);
  })

  $('.img-five').click(function () {
    $('#fiv, #fiv2, #fiv3, #fiv4').toggleClass('vacio')
    $('.pepe').animate({
      scrollTop: $(".five").offset().top
    }, 2000);
  })

  $('.img-stylex').click(function () {
    $('#sty, #sty2, #sty3, #sty4').toggleClass('vacio')
    $('.pepe').animate({
      scrollTop: $(".stylex").offset().top
    }, 2000);
  })
  
  let image = true;
  
  $('#vin4').click(function () {
    $('#vinted').toggleClass('vacio')
    
    if (image === true) {
      $(this).attr('src', 'images/menos.svg')
      image = false;
      $('.five, .stylex').addClass('vacio')
    } else {
      $(this).attr('src', 'images/mas.svg')
      image = true;
      $('.five, .stylex').removeClass('vacio')
      $('#vin, #vin2, #vin3, #vin4').addClass('vacio')
    }
  })

  $('#fiv4').click(function () {
    $('#five').toggleClass('vacio')
    
    if (image === true) {
      $(this).attr('src', 'images/menos.svg')
      image = false;
      $('.vinted, .stylex').addClass('vacio')
    } else {
      $(this).attr('src', 'images/mas.svg')
      image = true;
      $('.vinted, .stylex').removeClass('vacio')
      $('#fiv, #fiv2, #fiv3, #fiv4').addClass('vacio')
    }
  })

  $('#sty4').click(function () {
    $('#stylex').toggleClass('vacio')
    
    if (image === true) {
      $(this).attr('src', 'images/menos.svg')
      image = false;
      $('.five, .vinted').addClass('vacio')
    } else {
      $(this).attr('src', 'images/mas.svg')
      image = true;
      $('.five, .vinted').removeClass('vacio')
      $('#sty, #sty2, #sty3, #sty4').addClass('vacio')
    }
  })

  $('.img-vinted').hover(function () {
      $('.img-vinted').css('transform','scale(1.25)');
    }, function() {
      $('.img-vinted').css('transform','scale(1)');
    }
  );

  $('.img-five').hover(function () {
    $('.img-five').css('transform','scale(1.25)');
  }, function() {
    $('.img-five').css('transform','scale(1)');
  }
  );

  $('.img-stylex').hover(function () {
    $('.img-stylex').css('transform','scale(1.25)');
  }, function() {
    $('.img-stylex').css('transform','scale(1)');
  }
  );

  $('.hover').hover(function () {
      $(this).css('transform','scale(1.25)');
    }, function() {
      $(this).css('transform','scale(1)');
    }
  );

  $('.works').mouseenter(function() {
    $([document.documentElement, document.body]).animate({
      scrollTop: $(".works").offset().top
  }, 2000);
  })
})
