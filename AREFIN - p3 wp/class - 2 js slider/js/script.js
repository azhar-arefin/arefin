var slider_img = document.querySelector("#slider-img");
var time = document.querySelector("#time");
var current_img_index = 0;
var images = [
   "images/1.jpg",
   "images/2.jpg",
   "images/3.jpg",
   "images/4.jpg",
   "images/5.jpg"
];
slider_img.src = images[current_img_index];

function previous(){
  if (current_img_index == 0) {
     current_img_index = images.length;
  }
  slider_img.classList.add('animate__fadeOutRight');
  slider_img.src = images[--current_img_index];
  slider_img.classList.remove('animate__fadeOutRight');
  slider_img.classList.add('animate__fadeInLeft');

  setTimeout(function() {
    slider_img.classList.remove('animate__fadeInLeft');
  }, 1000);
}
function next(){
  if (current_img_index == images.length - 1) {
     current_img_index = -1;
  }
  slider_img.classList.add('animate__fadeOutLeft');
  slider_img.src = images[++current_img_index];
  slider_img.classList.remove('animate__fadeOutLeft');
  slider_img.classList.add('animate__fadeInRight');
  setTimeout(function() {
    slider_img.classList.remove('animate__fadeInRight');
  }, 1000);
}

setInterval(next, 6000);
setInterval(function() {
   time.innerHTML = (new Date()).toString();
}, 1000);
