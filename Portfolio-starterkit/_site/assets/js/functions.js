$(function() {

  smoothScroll(1000);
  workBelt();
  workLoad();

});

function smoothScroll (duration) {
  $('a[href^="#"]').on('click', function(event) {

    var target = $( $(this).attr('href'));

    if (target.length) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, duration);

    }
  });
}


function workBelt() {

  $('.thumb-unit').click(function(){

    $('.work-belt').css('left', '-100%');
    $('.work-container').show();
  });

  $('.work-return').click(function() {
    $('.work-belt').css('left', '-0%');
    $('.work-container').hide(400);
  });

}

function workLoad() {

  $.ajaxSetup ({ cache: true });

  $('.thumb-unit').click(function() {

    var $this = $(this),
        newTitle = $this.find('strong').text(),
        newfolder = $this.data('folder'),
        spinner = '<div class="loader">Loading...</div>',
        newHTML = '/work/'+ newfolder +'.html';
    $('.project-load').html(spinner).load(newHTML);
    $('.project-title').text(newTitle);
  });
}
