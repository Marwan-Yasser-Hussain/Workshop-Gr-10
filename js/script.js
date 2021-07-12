window.onload = () => {
  setTimeout(() => {
    document.querySelector("body").classList.add("display");
  }, 1000);
};
// ********* Start Filter Script*********

filterSelection("all") // Execute the function and show all columns
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("s");
    current[0].className = current[0].className.replace(" s", "");
    this.className += " s";
  });
}

// ********* /Filter Script*********

// ********* /anmation script*********


window.addEventListener('scroll', reveal);

function reveal(){
  var reveals = document.querySelectorAll('#reveal');
  var revealsLeft = document.querySelectorAll('#reveal-left');
  var revealsRight = document.querySelectorAll('#reveal-right');

  for(var i = 0; i < reveals.length; i++){

    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 100;

    if(revealtop < windowheight - revealpoint){
      reveals[i].classList.add('activ');
    }
    else{
      reveals[i].classList.remove('activ');
    }
  }
  for(var i = 0; i < revealsLeft.length; i++){

    var windowheight = window.innerHeight;
    var revealtop = revealsLeft[i].getBoundingClientRect().top;
    var revealpoint = 100;

    if(revealtop < windowheight - revealpoint){
      revealsLeft[i].classList.add('activ');
    }
    else{
      revealsLeft[i].classList.remove('activ');
    }
  }
  for(var i = 0; i < revealsRight.length; i++){

    var windowheight = window.innerHeight;
    var revealtop = revealsRight[i].getBoundingClientRect().top;
    var revealpoint = 100;

    if(revealtop < windowheight - revealpoint){
      revealsRight[i].classList.add('activ');
    }
    else{
      revealsRight[i].classList.remove('activ');
    }
  }
}

// ********* /translate Script*********
let english = document.querySelector('.english')
let arabic = document.querySelector('.arabic')
let france = document.querySelector('.france')
let home = document.querySelector('.ho')
let about = document.querySelector('.ab')
let apply = document.querySelector('.ap')
let user = document.querySelector('.us')
let language = document.querySelector('.lan')


let lang = localStorage.getItem('lang')

  if(lang.includes("fra")){ 
  fra();
}
  else if(lang.includes("ara")){ 
    ara();
  }
  else if(lang.includes("eng")){ 
    eng();
  
}
function ara(){
  localStorage.setItem("lang", 'ara');
  english.classList.add('not-display');
  arabic.classList.remove('not-display');
  france.classList.add('not-display');
  home.innerHTML = "الرئيسية";
  about.innerHTML = "عنا";
  apply.innerHTML = "تسجيل";
  user.innerHTML = "معلومات المستخدم";
  language.innerHTML = "اللغة";

}
function eng(){
  localStorage.setItem("lang", 'eng');
  english.classList.remove('not-display');
  arabic.classList.add('not-display');
  france.classList.add('not-display');
  home.innerHTML = "Home";
  about.innerHTML = "About";
  apply.innerHTML = "Apply";
  user.innerHTML = " User Information";
  language.innerHTML = "Languages";
}
function fra(){
  localStorage.setItem("lang", 'fra');
  english.classList.add('not-display') ;
  arabic.classList.add('not-display') ;
  france.classList.remove('not-display') ;
  home.innerHTML = "Accueil";
  about.innerHTML = "sur";
  apply.innerHTML = "appliquer";
  user.innerHTML = "informations de l'utilisateur";
  language.innerHTML = "langages";
}
