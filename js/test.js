// $(document).ready(function(){
//
//    console.log( $("li").css("color",
//         function(idx, oldValue) {
//             switch (idx) {
//                 case 0:
//                     return "green";
//                 case 1:
//                     return "yellow";
//                 case 2:
//                     return "red";
//             }
//         }));
//
//    let newLi = $("<li>",{
//        id : "new",
//        text : "Hello from JS",
//        class : "Special",
//        css : {
//            backgroundColor : "blue",
//            color : "red",
//        },
//        click : function () {
//            $(this).css("color", "white")
//        }
//
//
//    });
//
//    $("ul").append(newLi);
//    // $("li:contains('Hello')").remove();
//
// });

// function sam() {
//     this.newvar = "hello";
// }
// // console.log(newvar); // Uncaught ReferenceError:
// sam(); // this = window
// console.log("newvar: " + newvar); //hello
//
// const b = {
//     log: function() {
//         console.log("this: ");
//         console.log(this);
//     }
// }
//
// console.log(b);
// b.log();

//
// window.onload = function () {
//     document.getElementById("btn1").onclick = function () {
//         console.log(this);
//         this.style.color = "red";
//     }
// }

// var a = {
//     name: "",
//     log: function() {
//
//         let self = this;
//
//         self.name = "Hello";
//         console.log(this.name); //Hello
//         var setFrench = newName =>{ this.name = newName};
//         setFrench("Bonjour");
//         console.log(this.name); //Hello
//     }
// };
//
// a.log();

// var me = {
//     first: 'Josh',
//     last: 'Splinter',
//     getFullName: function () {
//         return this.first + ' ' + this.last;
//     }
// };
// var you = {
//     first: 'William',
//     last: 'Smith'
// };
// console.log(me.getFullName.apply(you));
// console.log(me.getFullName.bind(you)());


// var funcs = [];
//
// for(var i =0; i < 5; i++){
//     funcs[i] = (function(n){
//         return function () {
//             return n;
//         };
//     })(i)
// }
//
// console.log(funcs[0]());
// console.log(funcs[1]());
// console.log(funcs[2]());
// console.log(funcs[3]());
// console.log(funcs[4]());


// const Module = (function(){
//
//     const privateMethod = function(message){
//         console.log(message);
//     };
//
//
//     const publicMethod = function(text){
//         privateMethod(text);
//     };
//
//
//     return {
//         publicMethod : publicMethod
//     };
//
// })();
//
// Module.extension = function(){
//     console.log('hello from extension');
// }
// Module.publicMethod("hello");
//
// Module.extension();


//
// const counter = function(){
//
//     let privateCounter = 0;
//
//     const changeBy = function(val){
//         privateCounter += val;
//     }
//
//     return {
//         increment : function () {
//             changeBy(1);
//         },
//         decrement: function () {
//             changeBy(-1);
//         },
//         value : function () {
//             return privateCounter;
//         }
//     }
//
//
// };
//
//
// const counter1 = counter();
// const counter2 = counter();
//
// console.log(counter1.value());
// counter1.increment();
// console.log(counter1.value());
// counter2.decrement();
//
// console.log(counter2.value());


// const a ={}
//
// console.log(a.__proto__);
//
// const b = function () {
//
// }
//
// console.log(b.__proto__)
// console.log(b.__proto__.__proto__);
//
// const x  = [];
//
// console.log(x.__proto__);


// const person = {
//
//     firstName : "John",
//     lastName  : "Doe",
//     greet      : function () {
//         return "Hi, " + this.firstName +" " + this.lastName;
//     }
// }
//
//
// const p1 = Object.create(person);
//
//
// p1.firstName = "Musab";
//
//
//
// console.log(p1.__proto__);

//
// const Person = function(){
//     console.log(this);
//
//     this.university = "MUM";
//     year =  2019;
// }
//
// const faculty = new Person();
//
// Person.prototype.greet = function () {
//     return "Hi from " + this.university;
// }
//
// console.log(faculty.greet());

//
// function Course(coursename) {
//
//     this.coursename = coursename;
//
//     console.log("Function constructor invoked");
//
// }
//
// Course.prototype.register = function () {
//     return "Register " + this.coursename;
// }
//
// const wap = new Course("WAP");
//
// console.log(wap);
// console.log(wap.__proto__);
// console.log(wap instanceof Course); // true
// console.log(wap.register());


// $(function(){
//
//     $("#textbox").mouseout(sayHi);
//
//     $("#submit").click(sayHi);
//
//     $("input[type='radio']").click(alertme);
// });
//
// function sayHi(){
//     return this.value = "Hi";
// }
//
// function alertme(){
//     return alert(this.value);
// }


const Person = {
    name : "unkown",
    age : 20
}

const  John = Object.create(Person);

console.log(John.name);

Person.changeName = function(newName){
    console.log(this);
    this.name = newName;
}
John.name = "musab";

John.changeName("Eric");
console.log(John.name);