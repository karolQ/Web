function myFunction(x){
	x.classList.toggle("change");
	document.getElementById("myDropdown").classList.toggle("show")
}

window.onclick = function(event){
	if(!event.target.matches('.menu_btn')){
		var dropdowns = document.getElementByClassName('dropdown-content');
		var i;
		for(i=0;i<dropdowns.length;i++){
			var openDropDown = dropdowns[i];
			if(openDropDown.classList.contains("show")){
				openDropDown.classList.remove("show");
			}
		}
	}
}