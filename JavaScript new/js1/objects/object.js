// let a={
//     fn:"Abhi",
//     ln:"minukuri"
// }
// console.log(a);
// console.log(a.fn);
// // Add the key
// a.mn="reddy"
// console.log(a);

// // Delete the key 

// delete a.ln
// console.log(a);


// ***********FUNCTION CONSTRUCTOR******************

// function pen(color,price){
//     this.color=color
//     this.price=price

// }
// let pen1=new pen("blue","15rs")
// console.log(pen1);

// let pen2=new pen("red","50rs")
// console.log(pen2);
// pen2.cost="58rs"
// console.log(pen2);


// **************INBUILT OBJECT CONSTRUCTION FUNCTION******************


// let a=Object()
// console.log(a);

// a.fname="Abhi"
// a.lname="Reddy"
// console.log(a);
// delete a.lname
// console.log(a);

// for(let key in a){
//     console.log(key);
// }



let student={
    fname:[{
        old:"k",
        new:"M"
    },{
        prev:"k",
        curr:"M"
    }],
    lname:()=>{
        console.log("hiee......");
    },
    stream:function(){
        console.log("CSE");
    },
    id:101
}
console.log(student.fname[0].old);
console.log(student.lname);
student.lname()
student.stream()