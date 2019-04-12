String.prototype.filter = function (word) {
    if(this.indexOf(word) >= 0) return this.replace(word, '');
}


Array.prototype.bubbleSort = function(){

}

var str = "hello";

console.log("This house is not nice!".filter("not "));

