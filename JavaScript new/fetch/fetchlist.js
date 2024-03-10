let ol=document.querySelector("ol")
console.log(ol);

let x=fetch('https://api.github.com/users')
console.log(x);

x.then(response=>{
    // console.log(response);
    return response.json()
})

.then(data=>{
    // console.log(data);
    // let li=document.createElement('li')
    for(let i=0;i<data.length;i++){
    ol.innerHTML+=`<li>"login: "${data[i].login},"id: "${data[i].id},${data[i].node_id},<img src=${data[i].avatar_url}/></</li>`
    // <li>${data[i].id}</li>
    // <li>${data[i].node_id}</li>
    // <li><img src=${data[i].avatar_url}/></li>`
    
}
})