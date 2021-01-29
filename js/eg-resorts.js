let viewMap = document.querySelector('.header .map button');
let sec = document.querySelector('section');

viewMap.addEventListener('click', function(){
  let overlay = document.createElement('div');
  overlay.className = 'overlay';
  let ifaram = document.createElement('iframe');
  ifaram.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d581114.6739442958!2d33.484239640815765!3d27.210075486975622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145287b2cd3dbbb3%3A0x2db807f98bd3c360!2sHurghada%2C%20Red%20Sea%20Governorate%2C%20Egypt!5e0!3m2!1sen!2sus!4v1611414926688!5m2!1sen!2sus'
  overlay.appendChild(ifaram);
  let closeBtn = document.createElement('span');
  closeBtn.className = 'close';
  closeBtn.textContent = 'X';
  overlay.appendChild(closeBtn);
  sec.appendChild(overlay);
  closeBtn.addEventListener('click', function(){
    overlay.style.display = 'none';
  });
});

let showMap = document.querySelectorAll('.resort .resort-text .location span');

showMap.forEach(btn =>{
  btn.addEventListener('click', function(e){
    let overlay = document.createElement('div');
  overlay.className = 'overlay';
  let ifaram = document.createElement('iframe');
  ifaram.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d581114.6739442958!2d33.484239640815765!3d27.210075486975622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145287b2cd3dbbb3%3A0x2db807f98bd3c360!2sHurghada%2C%20Red%20Sea%20Governorate%2C%20Egypt!5e0!3m2!1sen!2sus!4v1611414926688!5m2!1sen!2sus'
  overlay.appendChild(ifaram);
  let closeBtn = document.createElement('span');
  closeBtn.className = 'close';
  closeBtn.textContent = 'X';
  overlay.appendChild(closeBtn);
  sec.appendChild(overlay);
  closeBtn.addEventListener('click', function(){
    overlay.style.display = 'none';
  });
  })
})

