function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1));
}

function getRandomArbitrary(min, max) {
  var number = Math.random() * (max - min) + min;
  return Math.round(number * 100) / 100
}

var randomOrder = function(element) {
    var container = element.parentElement

    var scale = getRandomArbitrary(0.8, 1.2)
    var rotation = Math.round((Math.random() - 0.5) * 90)
    var xPos = getRandomInt(0, container.offsetWidth - element.width);
    var zIndex = getRandomInt(2,15);
    
    console.log(scale, rotation, xPos, zIndex)
    
 element.style.cssText += '--scale:' + scale + '; --rotate:' + rotation + 'deg; --x-position:' + xPos + 'px; z-index:' + zIndex;
};

// //Setup
// var imgs = document.querySelectorAll('img');

// imgs.forEach((the_img) => {
  
//   window.addEventListener('load', function() {
//     randomOrder(the_img);
//     the_img.hidden = false;
//   });

// }); //end foreach