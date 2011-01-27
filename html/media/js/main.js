var slider = {};

$(function(){
	var $slides = $(".slide");
	slider.n = $slides.length;
	slider.i = 0;
	slider.width = 995;
	$("#slides").width(slider.n*slider.width);
	disablePrev();
	enableNext();
});

function enableNext() {
	$("#next").click(function(){
		$("#slides").animate({ left: "-="+slider.width }, 400);
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
	$("#next").unbind().animate({ opacity: 0.4 });
}
function enablePrev() {
	$("#prev").click(function(){
		$("#slides").animate({ left: "+="+slider.width }, 400);
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
	$("#prev").unbind().animate({ opacity: 0.4 });
}