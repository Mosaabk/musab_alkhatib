
// window.addEventListener('load', function () {
//         var timer = null;
//     document.getElementById("clickbtn").onclick = function () {
//
//         if(timer == null){
//             timer = setInterval(function () {
//                 document.getElementById("output").innerHTML += " Rudy!";
//             },1000);
//         } else {
//             clearInterval(timer);
//             timer=null;
//         }
//     }
// });

window.onload = function(){
    var timer = null;
    document.getElementById("clickbtn").onclick = function(){



        if(timer == null){
            timer = setInterval(function(){
                document.getElementById("output").innerHTML += " Rudy!";

            }, 1000);
        } else {
            clearInterval(timer);
            timer=null;
        }
    }
};