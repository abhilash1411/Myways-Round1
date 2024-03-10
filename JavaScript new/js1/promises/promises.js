// console.log("start");
// let x=new Promise((res,rej)=>{
//     let num=20
//     if(num==10){
//         res("promise is reslove....")
//     }
//     else{
//         rej("Error")
//     }
// })
// // console.log(x);
// x.then((a)=>{
//     console.log(a);
// })
// .catch((b)=>{
//     console.log(b);
// })
// .finally((c)=>{
//     console.log("Vandhanam......");
// })
// console.log("end");



// function add(a,b) {
//     return new Promise((res,rej)=>{
//         res(a+b)
//         rej("Rejected")
//     })
// }
// let x=add(1,2)
// x.then((a)=>{
//     // console.log(a);
//     return add(a,3)
// })
// .then((b)=>{
//     // console.log(b);
//     return add(b,4)
// })
// .then((c)=>{
//     console.log(c);
// })


// *****************async and await****************


// async function add(a,b){
//     return (a+b)          
// }
// (async function(){
// let x=await add(1,2)  // await always return in the async function only.
// let y=await add(x,3)
// let z=await add(y,4)
// console.log(z);
// }())


