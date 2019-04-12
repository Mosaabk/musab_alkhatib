window.onload = function(){

    let textArea = document.getElementById("text");
    let checked  = false;
    let btnClicked = false;
    document.getElementById('btn').onclick = function () {
        let timer = null;
        if(!btnClicked){
            textArea.style.fontSize = "12pt";

           timer =  setInterval(function(){
                textArea.style.fontSize = parseInt(textArea.style.fontSize) + 2 + "pt";
            }, 500);
        } else {
            clearInterval(timer);
        }

    };

    document.getElementById("checkbx").onchange = function () {

        if(!checked){
            textArea.style.fontWeight = "bold";
            textArea.style.color = "green";
            textArea.style.textDecoration = "underline";

            document.body.style.backgroundImage = "url(https://courses.cs.washington.edu/courses/cse190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg)";
            checked = true;
        } else{
            textArea.style.fontWeight = "";
            textArea.style.color = "";
            textArea.style.textDecoration = "";
            document.body.style.backgroundImage ="";

            checked = false;

        }
    }
};