(function($){
  $(function(){

    $('.sidenav').sidenav({
      edge: 'right',
    });
    $('.tooltipped').tooltip();
    $('.parallax').parallax();
    $('.tabs').tabs();
    $('select').formSelect();
    $('.modal').modal({
        dismissable: true,
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function() {
  $("nav [href]").each(function() {
      if (this.href == window.location.href) {
          $(this).addClass("active");
      }
  });
});


$(document).ready(function(){
  var checkboxes = $('.required');
  checkboxes.change(function(){
      if($('.required:checked').length>0) {
          checkboxes.removeAttr('required');
      } else {
          checkboxes.attr('required', 'required');
      }
  });
});

