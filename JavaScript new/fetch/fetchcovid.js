let ol=document.querySelector("ol")
console.log(ol);

let x=fetch('https://data.covid19india.org/data.json')
console.log(x);

x.then(x=>{
    // console.log(response);
    return x.json()
})

.then(data=>{
    console.log(data);
    for(let i=0;i<data.statewise.length;i++){
    ol.innerHTML+=`<li>Active :${data.statewise[i].active} , <li>Deaths : ${data.statewise[i].deaths},</li>
    <li>State : ${data.statewise[i].state} </li></li>`
}
})