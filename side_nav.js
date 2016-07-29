function myFunction(x){
	x.classList.toggle("change");
	document.getElementById("mySidenav").classList.toggle("show");
//document.getElementById("mySidenav").style.width = "250px";
	document.getElementById("main").classList.toggle("push");
}

//   window.onclick = function(event){
// 	if(!event.target.matches('.menu_btn')){
// 		var sidenavs = document.getElementsByClassName('sidenav');
// 		for(var i=0;i<sidenavs.length;i++){
// 			var showSide = sidenavs[i];
// 			if(showSide.classList.contains("show")){
// 				showSide.classList.remove("show");
// 			}
// 		}
//
// 		// var menu_btn = document.getElementById("menu_btn");
// 		// if (menu_btn.classList.contains("change")) {
// 		// 	menu_btn.classList.toggele("change");
// 		// }
//
// 		var mainBody = document.getElementById("main");
// 		var j;
// 		for(j=0; j< mainBody.length;j++){
// 			var ele = mainBody[j];
// 			if(ele.classList.contains("push")){
// 				ele.classList.remove("push");
// 			}
// 		}
// 	}
// }
