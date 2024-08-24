$(document).ready(function () {
    $('.gallery li:lt(3)').show();
    $('.less1').hide();
    var items =  27;
    var shown =  6;
    $('.more1').click(function () {
        $('.less1').show();
        shown = $('.gallery li:visible').length+6;
        if(shown< items) {
          $('.gallery li:lt('+shown+')').show(300);
        } else {
          $('.gallery li:lt('+items+')').show(300);
          $('.more1').hide();
        }
    });
    $('.less').click(function () {
        $('.gallery li').not(':lt(6)').hide(300);
        $('.more1').show();
        $('.less1').hide();
    });
});

/*-----------------------------------------------*/
$(document).ready(function () {
    $('.gallery-k li:lt(3)').show();
    $('.less-k').hide();
    var items =  24;
    var shown =  6;
    $('.more-k').click(function () {
        $('.less-k').show();
        shown = $('.gallery-k li:visible').length+6;
        if(shown< items) {
          $('.gallery-k li:lt('+shown+')').show(300);
        } else {
          $('.gallery-k li:lt('+items+')').show(300);
          $('.more-k').hide();
        }
    });
    $('.less-k').click(function () {
        $('.gallery-k li').not(':lt(6)').hide(300);
        $('.more-k').show();
        $('.less-k').hide();
    });
});

/**************************************************************** */

$(document).ready(function () {
    $('.gallery-v li:lt(3)').show();
    $('.less-v').hide();
    var items =  21;
    var shown =  6;
    $('.more-v').click(function () {
        $('.less-v').show();
        shown = $('.gallery-v li:visible').length+6;
        if(shown< items) {
          $('.gallery-v li:lt('+shown+')').show(300);
        } else {
          $('.gallery-v li:lt('+items+')').show(300);
          $('.more-v').hide();
        }
    });
    $('.less-v').click(function () {
        $('.gallery-v li').not(':lt(6)').hide(300);
        $('.more-v').show();
        $('.less-v').hide();
    });
});

/*-------------------------------------------------------------------------------*/

$(document).ready(function () {
  $('.gallery-s li:lt(3)').show();
  $('.less-s').hide();
  var items =  24;
  var shown =  6;
  $('.more-s').click(function () {
      $('.less-s').show();
      shown = $('.gallery-s li:visible').length+6;
      if(shown< items) {
        $('.gallery-s li:lt('+shown+')').show(300);
      } else {
        $('.gallery-s li:lt('+items+')').show(300);
        $('.more-s').hide();
      }
  });
  $('.less-s').click(function () {
      $('.gallery-s li').not(':lt(6)').hide(300);
      $('.more-s').show();
      $('.less-s').hide();
  });
});


$(document).ready(function () {
  $('.gallery-c li:lt(3)').show();
  $('.less-c').hide();
  var items =  24;
  var shown =  6;
  $('.more-c').click(function () {
      $('.less-c').show();
      shown = $('.gallery-c li:visible').length+6;
      if(shown< items) {
        $('.gallery-c li:lt('+shown+')').show(300);
      } else {
        $('.gallery-c li:lt('+items+')').show(300);
        $('.more-c').hide();
      }
  });
  $('.less-c').click(function () {
      $('.gallery-c li').not(':lt(6)').hide(300);
      $('.more-c').show();
      $('.less-c').hide();
  });
});