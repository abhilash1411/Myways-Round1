// var a;
// a=10;
// console.log(a);
// a=100;
// console.log(a);


// Let cannot be re-declear but it can be re-instillation

// let b;
// b=20
// console.log(b);
// b=200
// console.log(b);

// const c=30;  We can declear and instillation done in the same line
// console.log(c);


// ***********HOISTING*******************


a=100;
console.log(a);
var a;

// b=100;  Error because hoisting is not possible.Hoisting is possible for only var Keyword.
// console.log(b);
// let b;

// Hoisting is not possible in let and const.Only possible in var Keyword



// ******************SCOPES*************************


var a=10;
let b=20;
const c=30;
console.log(a,b,c); //10 20 30
{
    var a=100;
    b=200;
    const c=300;
    console.log(a,b,c); // 100 200 300
}
console.log(a,b,c); // 100 200 30



function fun(){
    var n="Abhi..."
    console.log(n);
}
fun()
// console.log(n);// Error because even var is a function scope.we cannot access the var outside the function

console.log(window);