// function add(a,b){
//     let sum=a+b;
//     // console.log(sum);
//     return sum;
// }
// let returnValue=add(3,3)
// console.log(returnValue);
// console.log(add(1,2))
// console.log(add());// Typeof NAN is number.
// console.log(add(2,2,3,4,5,5,6));


// let x=function(a,b)
// {
//     console.log(a);
//     console.log(b);
//     console.log("hiee");
//     return true
// }
// console.log(x);
// console.log(x(2,3));


// *****************CALLBACK FUNCTION AND HIGHODER FUNCTION******************************************


// function fun1(a,b,c)
// {
//     console.log(c(a,b));
// }
// function add(a,b){
//     return a+b;
// }
// function sub(a,b){
//     return a-b
// }
// function mul(a,b){
//     return a*b;
// }
// function div(a,b){
//     return a/b;
// }
// function n(a,b){
//     return a%b;
// }
// fun1(2,3,add)
// fun1(3,2,sub)
// fun1(3,2,mul)
// fun1(4,2,div)
// fun1(5,2,n)



// let a=a=>a;
// console.log(a(1));


// Function hoisting


// fun()    //Hoisting is possible in only named function
// function fun(){
//     console.log("Hiee...");
// }

// fun1()          Hoisting is not possible in anonmous function
// let fun1=function(){
//     console.log("Bye......");
// }




//console.log(x,z);
var x=5;
var z=1;
const y=20;
// let h=10;
//console.log(x,y,z);
let fun1=function(n1,n2)
{
    console.log(n1+n2,x,y,z);
    var x=50;
    // y=70;
    // h=20;
    console.log(x,y);
}
fun1(10,1)
// x=78;
console.log(x,y,z);
