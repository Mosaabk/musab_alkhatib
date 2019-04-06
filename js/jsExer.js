window.addEventListener('load', function () {

    document.getElementById("clickbtn").onclick = function () {
        var timer = null;

        if(timer == null){
            timer = setInterval(function () {
                document.getElementById("output").innerHTML += " Rudy!";
            },1000);
        } else {
            clearInterval(timer);
            timer=null;
        }
    }
});