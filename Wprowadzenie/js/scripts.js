/*
$("span").each(function(index, element) {
	if(index % 2 != 0) {
		$(element).css('color' , 'red');
	}
});
*/

$("span:odd").css('color' , 'red');
$("span:even").css('color' , 'blue');

$(function() {
	
	var p = $("div").find('p').last();
	p.css("color" , "green");
	p.append("<li>nowy element</li>");
});

$("p").each(function(index, element) {
	 
	 var button = '<button class="btn" data-tmp="' + index + '">Click me</button>';
	 $(element).append(button);
});

$("button").click(function() {
	alert($(this).attr("data-tmp"));
});


