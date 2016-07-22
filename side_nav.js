function myFunction(x){
	x.classList.toggle("change");
	document.getElementById("mySidenav").classList.toggle("show");
	document.getElementById("main").classList.toggle("push");
}

  window.onclick = function(event){
	if(!event.target.matches('.menu_btn')){
		var sidenavs = document.getElementByClassName('sidenav');
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