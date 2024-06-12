//FUncion 1

$(document).ready(function () {
  $('#animar').click(function () {
    $('#brazo-izquierdo').css({ left: '130px', top: '380px' });
    $('#brazo-derecho').css({ left: '260px', top: '380px' });
    $('#ojo-izquierdo').css({ left: '165px', top: '235px' });
    $('#ojo-derecho').css({ left: '266px', top: '233px' });
    $('#boca').css({ top: '300px', left: '185px' });
    $('#nariz').css({ top: '180px', left: '90px' });
    $('#cola').css({ top: '200px', left: '333px' });
  });
});

//FUncion 2
$(document).ready(function () {
  $('#animar2').click(function () {
    $('#brazo-derecho').css({ 'transform': 'rotate(175deg)' });

  });
});

//FUncion 3
$(document).ready(function () {
  $('#ocultarPikachu').click(function () {
    $('#pikachu').fadeOut(1500);
  });
});

//FUncion 4
$(document).ready(function () {
  $('#mostrarPikachu').click(function () {
    $('#pikachu').fadeIn(1500);
  });
});

//FUncion 5
$(document).ready(function () {
  $('#animarPikachu').click(function () {
    $('#pikachu').css({
      transform: 'translateX(100%)',
      transition: 'transform 1s ease-in-out'
    });
    setTimeout(function () {
      $('#pikachu').css('transform', 'translateX(0)');
    }, 1000);
  });
});


