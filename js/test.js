// x = 1;
// var a = 5;
// var b = 10;
// var c = function(a, b, c) {
//     console.log("x1: "+ x);
//     console.log("a2: "+ a);
//     var f = function() {
//         b = a;
//         console.log("b3: "+ b);
//         b = c;
//         var a = 3;
//     }
//     f();
//     console.log("b4:" + b);
//     x = 6;
// }
// c(8, 9, 7);
// console.log("b5: " + b);
// console.log("x6: "+ x);
// $(function(){
//
//     // $("input[type='submit']").click(function(e){
//     //     e.preventDefault();
//     //
//     //     const seats = $("input[name='seat']").val();
//     //     const zipCode
//     //     console.log((seats));
//     //
//     //     if(seats > 200){
//     //         $("div").append("<p> you can't book more than 200 seats");
//     //     }
//     // });
//
//
//     $("form").submit(function (e) {
//
//         e.preventDefault();
//         let submitFlag = true;
//
//         const  seats = $("input[name='seat']");
//         const zipCode = $("input[name='zipcode']");
//         const street = $("input[name='street'");
//
//         if (street === ''){
//             $("div").append("<p>you must enter a street name.</p>");
//             submitFlag=false;
//         }
//
//         if(seats < 0 || seats > 200){
//             $("div").append("<p>you can't book more than 200 seats</p>");
//             submitFlag=false;
//         }
//
//         if(zipCode === ''){
//             $("div").append("<p>You must enter a Zip code. </p>");
//             submitFlag= false;
//         }
//
//         if($("input[type='checkbox']:checked").val() === undefined){
//             $("div").append("<p>you must select one extras</p>");
//             submitFlag = false;
//         }
//
//         if($("input[type='radio']:checked").val() === undefined){
//             $("div").append("<p>you must select type of taxi</p>");
//             submitFlag = false;
//
//         }
//
//         if(submitFlag){
//             this.submit();
//         }
//     })
//
// });


var x = 9;

function myFunction(){

    return x * x;
}

document.write(myFunction());

x = 5;

document.write(myFunction());

