// let ul=document.querySelector("ul")
// console.log(ul);
// let h2=document.querySelector("h2")
// console.log(h2);
let body=document.querySelector("body")
console.log(body);
// let div=document.querySelector("div")
// console.log(div);

let x=fetch('https://data.covid19india.org/data.json')
console.log(x);

x.then(res=>{
    return res.json()
})
.then(data=>{
    console.log(data);
    for(let i=0;i<38;i++){
    body.innerHTML+=`
    <div class='container'>
        <center>
            <h2>${data.statewise[i].state}</h2>
        </center>
        <ul>
            <li>${data.statewise[i].deaths}</li>
            <li>${data.statewise[i].active}</li>
        </ul>
    </div>`
    // body.innerHTML+=`<ul><li>${data.statewise[i].deaths}</li>
    // ,<li>${data.statewise[i].active}</li></ul>`
    }
})