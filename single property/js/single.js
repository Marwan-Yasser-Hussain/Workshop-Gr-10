// light box img//
function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }
// light box img//


// light box video//
function openModalV() {
  document.getElementById("myModalV").style.display = "block";
}

function closeModalV() {
  document.getElementById("myModalV").style.display = "none";
}

var slideIndexV = 1;
showSlidesV(slideIndexV);

function plusSlidesV(n) {
  showSlidesV(slideIndexV += n);
}

function currentSlideV(n) {
  showSlidesV(slideIndexV = n);
}

function showSlidesV(n) {
  var i;
  var slides = document.getElementsByClassName("mySlidesV");
  var dots = document.getElementsByClassName("demoV");
  if (n > slides.length) {slideIndexV = 1}
  if (n < 1) {slideIndexV = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexV-1].style.display = "block";
  dots[slideIndexV-1].className += " active";
}




// show map //
function showMap(){
  let overlay = document.createElement('div');
  overlay.className = 'overlay';
  let ifaram = document.createElement('iframe');
  ifaram.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d581114.6739442958!2d33.484239640815765!3d27.210075486975622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145287b2cd3dbbb3%3A0x2db807f98bd3c360!2sHurghada%2C%20Red%20Sea%20Governorate%2C%20Egypt!5e0!3m2!1sen!2sus!4v1611414926688!5m2!1sen!2sus'
  overlay.appendChild(ifaram);
  let closeBtn = document.createElement('span');
  closeBtn.className = 'close';
  closeBtn.textContent = 'X';
  overlay.appendChild(closeBtn);
  document.body.appendChild(overlay);
  closeBtn.addEventListener('click', function(){
    overlay.style.display = 'none';
  });
}



// limited offer //
let offerBtn = document.querySelector('.limited-offer');
let stickyBox = document.querySelector('.box-holder');
offerBtn.addEventListener('click', () =>{
  offerBtn.style.display = 'none';
  stickyBox.style.display = 'block'
});

let closeBtn = document.querySelector('.close-btn');
closeBtn.addEventListener('click', ()=>{
  offerBtn.style.display = 'block';
  stickyBox.style.display = 'none'
});
