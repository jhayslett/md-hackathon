function clickEvent(e) {
  var content = e.target.nextElementSibling;
  if(content.classList.contains("show")) {
  	content.classList.remove("show");
  } else {

  	var allBodies = document.getElementsByClassName("collapse-body");
  	for(var i = 0; i < allBodies.length; i++) {
  		if(allBodies[i].classList.contains("show")) {
  			allBodies[i].classList.remove("show");
  		}
  		content.classList.add("show");
   	}
  }
 }


document.addEventListener("DOMContentLoaded", function() {
  var headers = document.getElementsByClassName("collapse-header");
  
  for (var i = 0; i < headers.length; i++) {
  		headers[i].addEventListener("click", clickEvent, false);
  }
});