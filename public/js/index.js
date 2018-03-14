$(function() {
  // $('#button').click(function() {
  //   $('#question1').show();
  // });

  var count = 0;
  var optionals = "";
  $('body').click(function() {
    switch (count) {
      case 0:
        $('#drop-shadow').addClass('animate-opacity');
        $('#modal-intro').show();
        break;
      case 1:
        $('#modal-intro').hide();
        $('#modal-question-1').show();
    }
    count++;
  });

  $('#modal-question-1 button').click(function(e) {
    optionals = e.target.value || "";

    $('#modal-question-1').hide();
    $('#modal-question-2').show();
  });

  $('#modal-question-2 button').click(function(e) {
    if (optionals) {
      optionals += (e.target.value && ',' + e.target.value.split('_')[1]) || "";
    } else {
      optionals = e.target.value || "";
    }

    $('#modal-question-2').hide();
    $('#modal-question-3').show();
  });

  $('#modal-question-3 button').click(function() {
    window.location = "/video?t=" + optionals;
  });
});
