// $(document).ready(function() {
//     $("#toggle").click(function() {
//         var elem =  $("#toggle").text();
//         if( elem == "Read More"){
//             $("toggle").text("Read Less");
//             $("moreText").slideDown(2000);
//         }
//         else{
//             $("toggle").text("Read More");
//             $("moreText").slideUp(2000);
//         }
//     });
// });

var i = 0;
let readmore = document.getElementById('readmore');
let dots = document.getElementById('dots');
let btn = document.getElementById('Read');
function Read(){
    if(i == 0){
        readmore.style.display="block";
        dots.style.display="none";
        btn.innerHTML = "Read Less";
        i=1;
    }
    else{
        readmore.style.display="none";
        dots.style.display="block";
        btn.innerHTML = "Read More";
        i=0;
    }
}

var dest = new Date("june 15, 2021 10:00:00").getTime();
  var x = setInterval(function(){
  var now = new Date().getTime();
  var diff = dest - now ;
  var days =  Math.floor(diff / (1000* 60*60*24));
  // console.log(days);

  var hours =  Math.floor((diff % (1000* 60*60*24)) / (1000 * 60 * 60));
  // console.log(hours);

  var minutes =  Math.floor((diff % (1000* 60*60)) / (1000 * 60));
  // console.log(minutes);
  
  var seconds =  Math.floor((diff % (1000* 60)) / (1000));
  // console.log(seconds);

document.getElementById("demo").innerHTML = days + "d, " + hours + "hrs: " + minutes +"m: " + seconds + "s"

}, 1000);