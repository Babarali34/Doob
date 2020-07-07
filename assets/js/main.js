// init Isotope
var $grid = $('.portfolio-filter').isotope({
  // options
});
// filter items on button click
$('.filter-button-group').on( 'click', 'li', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});