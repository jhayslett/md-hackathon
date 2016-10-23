function clickEvent(e) {
  var contentWrapper = e.target.nextElementSibling;
  var content = contentWrapper.firstChild;
  
  if(contentWrapper.classList.contains("show")) {
  	contentWrapper.classList.remove("show");
    contentWrapper.style.height = "0px";
  } else {

  	var allBodies = document.getElementsByClassName("collapse-body");
  	
    for(var i = 0; i < allBodies.length; i++) {
  		if(allBodies[i].classList.contains("show")) {
  			allBodies[i].classList.remove("show");
        allBodies[i].style.height = "0px";
  		}
  		contentWrapper.classList.add("show");
      contentWrapper.style.height = content.offsetHeight + "px";
    }
  }
}


document.addEventListener("DOMContentLoaded", function() {
  var headers = document.getElementsByClassName("collapse-header");
  
  for (var i = 0; i < headers.length; i++) {
  		headers[i].addEventListener("click", clickEvent, false);
  }
});