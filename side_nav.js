function myFunction(x){
	x.classList.toggle("change");
	document.getElementById("mySidenav").classList.toggle("show");
//document.getElementById("mySidenav").style.width = "250px";
	document.getElementById("main").classList.toggle("push");
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
	showSlides(slideIndex += n);
}

function currentSlide(n){
	showSlides(slideIndex = n);
}

function showSlides(n){
	var k;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");
	if(n > slides.length){
		slideIndex = 1;}
	else if(n < 1){
		slideIndex = slides.length;}
	for(k = 0; k < slides.length; k++){
		slides[k].style.display = "none";
	}
	for(k = 0; k < slides.length; k++){
		dots[k].className = dots[k].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display="block";
	dots[slideIndex-1].className += " active";
}


// $(document).ready(function() {
	$('menu_btn').onclick = function(event){
		if(!event.target.matches('.menu_btn')){
			var sidenavs = document.getElementsByClassName('sidenav');
			var i;
			for(i=0;i<sidenavs.length;i++){
				var showSide = sidenavs[i];
				if(showSide.classList.contains("show")){
					showSide.classList.remove("show");
				}
			}

			var mainBody = document.getElementById("main");
			var j;
			for(j=0; j< mainBody.length;j++){
				var ele = mainBody[j];
				if(ele.classList.contains("push")){
					ele.classList.remove("push");
				}
			}
		}
	}	
// })

