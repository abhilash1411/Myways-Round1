let arr=[10,20,30,"hello",true]
console.log(arr);

// Push

arr.push("Abhi","hiee")
console.log(arr);
// pop

arr.pop()

// unshift
arr.unshift(0,"jsp")
console.log(arr);

// shift
arr.shift()
console.log(arr);

// slice
console.log(arr.slice(0,3));

// MAP Method

let numbers=[10,20,30,40,50]
let n=numbers.map(x=>{
    // console.log(x*2);
    return x*2
})
console.log(n);
console.log(numbers);

// Using forloop

let m=[10,20,30,40,50]
let newArr=[]
for(let i=0;i<m.length;i++){
    let newelem=m[i]*2;
    newArr.push(newelem)
}
console.log(newArr);



// filter method:it is used to filter all the array elements based on condition

let filteredArr=numbers.filter(arrEle=>{
    return arrEle>30
})
console.log(filteredArr);

// reduce: it will reduce the array elements into single value/output


let y=numbers.reduce((a,b)=>{
    return a+b
})
console.log(y);