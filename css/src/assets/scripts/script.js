// Javascript Document

$('.vidbox-plus').click(function(e){
	e.preventDefault();
	// Call Function
});

// LIKE VIDEO
$('.vidbox-like').click(function(e){
	e.preventDefault();
	$(this).toggleClass('vid_is-liked');
	// Call Function
});