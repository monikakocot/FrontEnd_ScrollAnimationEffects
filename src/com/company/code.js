$(document).on('scroll', function () {

  const windowHeight = $(window).height()
  const scrollValue = $(this).scrollTop();
  // console.log(scrollValue);


  //Second Article:
  const $art2 = $('.art2');
  const art2FromTop = $art2.offset().top
  // console.log(art2FromTop);
  const art2Height = $art2.outerHeight()
  // console.log(art2Height);

  //Third Article:
  const $art3 = $('.art3');
  const art3FromTop = $art3.offset().top
  const art3Height = $art3.outerHeight()

  //Fourth Article:
  const $art4 = $('.art4');
  const art4FromTop = $art4.offset().top
  const art4Height = $art4.outerHeight()

  if (scrollValue > art2FromTop + art2Height - windowHeight) {
    console.log("Article 2 has been fully displayed");
    $art2.addClass('active');
  }

  if (scrollValue > art3FromTop + art3Height - windowHeight) {
    console.log("Article 3 has been fully displayed");
    $art3.addClass('active');
  }

  if (scrollValue > art4FromTop + art4Height - windowHeight) {
    console.log("Article 4 has been fully displayed");
    $art4.addClass('active');
  }

  //First And Second Quote

  const $op1 = $('.op1');
  const $op2 = $('.op2');

  const op1FromTop = $op1.offset().top;
  const op2FromTop = $op2.offset().top;

  const op1Height = $op1.height();
  const op2Height = $op2.height();

  if (scrollValue > op1FromTop + op1Height / 2 - windowHeight) {
    $op1.addClass('active');
    console.log('op1 has been fully displayed');
  }

  if (scrollValue > op2FromTop + op2Height / 2 - windowHeight) {
    $op2.addClass('active');
    console.log('op2 has been fully displayed');
  }

  //Clear Avtice Class
  if (scrollValue < 100) {
    $('article').removeClass('active');
  }
})