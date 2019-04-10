"use strict";

var custom =

    "                        CUSTOM ANIMATION!\n" +

    "                  /\n" +

    "                 /   ___\n" +

    "             '(  '.  )\n" +

    "              |======|\n" +

    "              [111111] -- (\n" +

    "              |______|\n" +

    "              D OO O D\n" +

    "             D O O O  D\n" +

    "            D O  O  O  D\n" +

    "           D_O__ O___O__D\n" +

    "          [______________]\n" +

    "\n" +

    "\n" + "=====\n"+

    "                        \n" +

    "                  /\n" +

    "                 /   ___\n" +

    "             '(  '.  )\n" +

    "              |======|\n" +

    "              [111111] -- (=G===\n" +

    "              |______|\n" +

    "              D OO O D\n" +

    "             D O O O  D\n" +

    "            D O  O  O  D\n" +

    "           D_O__ O___O__D\n" +

    "          [______________]\n" +

    "\n" +

    "\n" + "=====\n"+

    "                        CUSTOM ANIMATION!\n" +

    "                  /\n" +

    "                 /   ___\n" +

    "             '(  '.  )\n" +

    "              |======|\n" +

    "              [111111] -- (   =G===\n" +

    "              |______|\n" +

    "              D OO O D\n" +

    "             D O O O  D\n" +

    "            D O  O  O  D\n" +

    "           D_O__ O___O__D\n" +

    "          [______________]\n" +

    "\n" +

    "\n" + "=====\n"+

    "                        \n" +

    "                  /\n" +

    "                 /   ___\n" +

    "             '(  '.  )\n" +

    "              |======|\n" +

    "              [111111] -- (                 =G===\n" +

    "              |______|\n" +

    "              D OO O D\n" +

    "             D O O O  D\n" +

    "            D O  O  O  D\n" +

    "           D_O__ O___O__D\n" +

    "          [______________]\n" +

    "\n" +

    "\n" + "=====\n"+

    "                        CUSTOM ANIMATION!\n" +

    "                  /\n" +

    "                 /   ___\n" +

    "             '(  '.  )\n" +

    "              |======|\n" +

    "              [111111] -- (                               =G===\n" +

    "              |______|\n" +

    "              D OO O D\n" +

    "             D O O O  D\n" +

    "            D O  O  O  D\n" +

    "           D_O__ O___O__D\n" +

    "          [______________]\n" +

    "\n" +

    "\n" + "=====\n"+

    "                        \n" +

    "                  /\n" +

    "                 /   ___\n" +

    "             '(  '.  )                                     \n" +

    "              |======|                                      **\n" +

    "              [111111] -- (                                  *\n" +

    "              |______|\n" +

    "              D OO O D\n" +

    "             D O O O  D\n" +

    "            D O  O  O  D\n" +

    "           D_O__ O___O__D\n" +

    "          [______________]\n" +

    "\n" +

    "\n" + "=====\n"+

    "                        CUSTOM ANIMATION!\n" +

    "                  /\n" +

    "                 /   ___\n" +

    "             '(  '.  )                                     *   *\n" +

    "              |======|                                      **\n" +

    "              [111111] -- (                                 * *\n" +

    "              |______|\n" +

    "              D OO O D\n" +

    "             D O O O  D\n" +

    "            D O  O  O  D\n" +

    "           D_O__ O___O__D\n" +

    "          [______________]\n" +

    "\n" +

    "\n" + "=====\n"+

    "                        \n" +

    "                  /\n" +

    "                 /   ___\n" +

    "             '(  '.  )\n" +

    "              |======|\n" +

    "              [111111] -- (\n" +

    "              |______|\n" +

    "              D OO O D\n" +

    "             D O O O  D\n" +

    "            D O  O  O  D\n" +

    "           D_O__ O___O__D\n" +

    "          [______________]\n";



ANIMATIONS["Custom"] = custom;

var interval;
var bolPlaying;
var currentFrame;
var subFrame;
var subFrames;
var currentLength;
var darea;
var timer;
var prevFrames;

function addLoadEvent(f) {
    var execoldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = f;
    } else {
        window.onload = function() {
            execoldonload();
            f();
        };
    }
}

function nextFrame() {
    if (currentFrame === currentLength) {
        currentFrame = 0;
    }
    darea.value = subFrames[currentFrame];
    currentFrame++;
}

// start playing animation
function startPlaying() {
    document.getElementById("btnStart").disabled = true;
    document.getElementById("btnStop").disabled = false;
    document.getElementById("selectedAnimation").disabled = true;

    timer = setInterval(nextFrame, interval);
    bolPlaying = true;
}

// stop playing animation
function stopPlaying() {
    document.getElementById("btnStart").disabled = false;
    document.getElementById("btnStop").disabled = true;
    document.getElementById("selectedAnimation").disabled = false;

    clearInterval(timer);
    bolPlaying = false;

    darea.value = prevFrames;
}

// show frames
function showFrames(subFrames) {
    darea.value = "";
    for(var i=0;i<subFrames.length;i++){
        darea.value += subFrames[i] + "\n";
    }
}

// change to another animation
function changeAnimation() {
    subFrame = ANIMATIONS[this.value];
    subFrames = subFrame.split("=====\n");

    showFrames(subFrames);

    //darea.value = subFrames[0];
    currentLength = subFrames.length;
    currentFrame = 0;
    prevFrames = darea.value;
}


// change the size of animation
function changeFontSize() {
    console.log(this.value);
    darea.className = this.value + "Font";
}

// toggle the playing speed
function toggleSpeed() {
    if(this.checked === true) {
        if (interval === 50) {
            return;
        }

        interval = 50;
        if (!bolPlaying) {
            return;
        }

        clearInterval(timer);
        timer = setInterval(nextFrame, interval);
    } else {
        if (interval === 250) {
            return;
        }

        interval = 250;
        if (!bolPlaying) {
            return;
        }

        clearInterval(timer);
        timer = setInterval(nextFrame, interval);
    }
}


function init() {
    darea = document.getElementById("darea");
    prevFrames = darea.value;

    document.getElementById("btnStart").onclick = startPlaying;
    document.getElementById("btnStop").onclick = stopPlaying;
    document.getElementById("selectedAnimation").onchange = changeAnimation;
    document.getElementById("speed").onclick = toggleSpeed;
    document.getElementById("selectedFontSize").onchange = changeFontSize;

    interval = 250;
    bolPlaying = false;
    currentFrame = 0;
    var animationStr = ANIMATIONS["Blank"];
    subFrames = animationStr.split("=====\n");
    darea.value = subFrames[currentFrame];
    currentLength = subFrames.length;
}

addLoadEvent(init);