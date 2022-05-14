$(function () {

  $('.keys__slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><svg width="48" height="21" viewBox="0 0 48 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.1498 21L11.9387 19.2227L4.85921 12.1765L48 12.1765L48 9.65546L4.85921 9.65546L11.9387 2.60924L10.1498 0.831925L4.68893e-06 10.916L10.1498 21Z" fill="#1A3D8A"/></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg width="49" height="20" viewBox="0 0 49 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M38.3752 0L36.5863 1.7625L43.6658 8.75H0.525024V11.25H43.6658L36.5863 18.2375L38.3752 20L48.525 10L38.3752 0Z" fill="#1A3D8A"/></svg></button>',
    fade: true,
    dots: true,
    infinite: false,
  });
  
  $('.question__name').on('click', function () {
    $('.question__name').not($(this)).removeClass('active').next().slideUp(300);
    $(this).toggleClass('active').next().slideToggle(300);
  });
  $('.question__name-1').trigger('click');
})