// preloader
$(window).load(function(){
	$(".preloader").delay(1000).fadeOut("slow");
});

$('.modal-job').on('show.bs.modal', function (e) {
   // thumbs 
  var optionlink = $('.modal-job .list-jobs a');

  $(optionlink).click(function(){
    var srcImagem = $(this).find('.img-responsive').prop('src');
    $(".modal-job.fade.in .img-main").fadeOut(function() {
      $('.modal-job.fade.in .img-main').attr('src', srcImagem).fadeIn();
    });
    return false;
  });
});