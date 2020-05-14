// btn appear

var mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Smooth Scroll

function smoothScroll(target, duration){
  var target = document.querySelector(target);
  var targetPos = target.getBoundingClientRect().top;
  var startPos = window.pageYOffset;
  var distance = targetPos - startPos
  var startTime = null;

  function animation(currentTime) {
    if(startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = easeInOutCirc(timeElapsed, startPos, distance, duration);
    window.scrollTo(0, run);
    if(timeElapsed < duration) requestAnimationFrame(animation);
  }

  function easeInOutCirc(t, b, c, d) {
    t /= d/2;
    if (t < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
    t -= 2;
    return c/2 * (Math.sqrt(1 - t*t) + 1) + b;
  };

  requestAnimationFrame(animation);
}

var scene = document.querySelector('.scene');
var mybutton = document.getElementById("myBtn");

mybutton.addEventListener('click', function () {
  smoothScroll('.scene', 3000)
})