$(document).ready(function () {
$('.sl').slick({
	arrows: true,
	
});

//не могу справиться с тем, что бы он показывал сразу 3 элемента, а один подсвечивал
//пытался задать только один фон бирюзовый, но он листает бирюзовый
$('.slick').slick({
	 
});
});
//этот слаидер сходит с ума, он может просто переместиться или исчезнуть
$('.multiple-items').slick({
	arrows: true,
	infinite: false,
	slidesToShow: 3,
	slidesToScroll: 1,
	
	//dots: true,
	//	speed: 300,
	//	centerMode: true,
		//variableWidth: true,
	//	arrows: true
});
//у меня ощущение такое, что какой то фаил либо багнут, либо я не знаю, что то тут не так, не должно быть такого
$(".one-slaider").slick({
	slidesToShow: 4,
	arrows: true,
});

$(".two-slaider").slick({
	slidesToShow: 4,
	arrows: true,
});

