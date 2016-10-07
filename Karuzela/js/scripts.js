$(function() {
	var carouselList = $("#carousel ul");
	var activeSlide = 0;
	var dotsList = $("#dots ul li");
	
	
	
	function changeSlide() {
		
		carouselList.animate({'marginLeft':activeSlide * (-400)}, 500);
		updateDots();
		activeSlide = (activeSlide + 1) % 5;
	}
	
	function moveFirstSlide() {
		
		var firstItem = carouselList.find("li:first"); 
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
	}
	
	function updateDots() {
		
		dotsList.removeClass("active");
		dotsList.eq(activeSlide).addClass("active");
		
	}
	
	dotsList.each(function(index){
		
		$(this).on("click", function(){
			activeSlide = index;
			changeSlide();
		});
	});
	
	
	
	updateDots();
	setInterval(changeSlide, 3000); //co 3 sek. wykona funkcję zmieniającą slajd.
	
});