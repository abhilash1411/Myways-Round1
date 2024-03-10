// Spread Operator with Arrays........
// Spread Operator(...) :- Copy all the array elements and objects properties
//                          and paste it into the new array or object.

let arr1=[10,20,30,40]
let arr2=[50,60,70,80]

let arr3=arr1.concat(arr2)
console.log(arr3);

// Using Spread Operator......

let arr4=[...arr1,...arr2]
console.log(arr4);

// Spread operators Using Objects............

let obj={
    name:"Abhi",
    id:101
}
console.log(obj);
// let obj1={
//     obj,
//     salary:20000
// }                      ////******  Using normal Way
// console.log(obj1);

// ********* Using Spread Operator..........

let obj1={
    ...obj,
    salary:20000
}
console.log(obj1);


// Rest Parameters :- It will make a function to accpect n number of arguments.
// Rest Parameters should be the last parameters inside the function
// It will store the arguments in the form of array and we use index positions to access them.
let m=0
function add(a,b,...c){
    // console.log(a+b);
    for(let i=0;i<c.length;i++){
         m=m+c[i]
    }
    console.log(a+b+m);
}
add(1,2,3,4,5,6,7,8)

