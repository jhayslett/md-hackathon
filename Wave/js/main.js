var waveEffect = function(e) {
    // get click position inside element
    var posX = e.offsetX;
    var posY = e.offsetY;
    var container = e.target;
    // create wave element
    var wave = document.createElement("div");
    // set it to container element
    container.appendChild(wave);
    var maxSizeValue;
    // find maximum width/height
    if (container.offsetWidth > container.offsetHeight) {
      maxSizeValue = container.offsetWidth * 2;
    } else {
      maxSizeValue = container.offsetHeight * 2;
    }

    // console.log(maxSizeValue);
    wave.classList.add("wave-effect");
    var wavePosXOffset = wave.offsetWidth / 2;
    var wavePosYOffset = wave.offsetHeight / 2;
    var waveLeftPos = posX - wavePosXOffset;
    var waveTopPos = posY - wavePosYOffset;

    wave.style.left = waveLeftPos + "px";
    wave.style.top = waveTopPos + "px";
    // wave.classList.add("grow");
    // console.log("posX: " + posX + ", posY: " + posY);

    var numAnim = (maxSizeValue - wave.offsetWidth) / 2;
    var opacity = 1;
    var opacityStep = 1 / numAnim;
    
    var id = setInterval(function() {
      if (wave.offsetWidth === maxSizeValue) {
        clearInterval(id);
        // console.log("BOOM");
        container.removeChild(wave);
        // console.log(numAnim);

      } else {
        // set iterated width change
        var newWidth = wave.offsetWidth + 2;
        wave.style.width = newWidth + "px";
        // keep element center positioned as it gets larger
        posX = posX - 1;
        wave.style.left = posX + "px";
        // set iterated height change
        var newHeight = wave.offsetHeight + 2;
        wave.style.height = newHeight + "px";
        // keep element center positioned as it gets larger
        posY = posY - 1;
        wave.style.top = posY + "px";
        // adjust opcity through iteration
        opacity = opacity - opacityStep;
        wave.style.opacity = opacity;
      }
    } , 5);
  };

document.addEventListener("DOMContentLoaded", function() {
  var waveItem = document.getElementsByClassName("wave");
  // console.log(waveItem);
  
  for (var i = 0; i < waveItem.length; i++) {
    waveItem[i].addEventListener("click",waveEffect,false);
    waveItem[i].style.lineHeight = waveItem[i].offsetHeight + "px";
  }
});