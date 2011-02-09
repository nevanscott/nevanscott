var slider = {};

jQuery(function(){
	var $slides = jQuery(".slide");
	slider.n = $slides.length;
	slider.i = 0;
	slider.width = 995;
	jQuery("#slides").width(slider.n*slider.width);
	disablePrev();
	enableNext();
});

function enableNext() {
	jQuery("#next").click(function(){
		jQuery("#slides").animate({ left: "-="+slider.width }, 400);
		slider.i++;
		if(slider.i+1==slider.n) {
			disableNext();
		}
		if(slider.i==1) {
			enablePrev();
		}
	}).animate({ opacity: 1.0 });	
}
function disableNext() {
	jQuery("#next").unbind().animate({ opacity: 0.4 });
}
function enablePrev() {
	jQuery("#prev").click(function(){
		jQuery("#slides").animate({ left: "+="+slider.width }, 400);
		slider.i--;
		if(slider.i==0) {
			disablePrev();
		}
		if(slider.i+2==slider.n) {
			enableNext();
		}
	}).animate({ opacity: 1.0 });
}
function disablePrev() {
	jQuery("#prev").unbind().animate({ opacity: 0.4 });
}