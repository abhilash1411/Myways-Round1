let tbody=document.querySelector("tbody")
console.log(tbody);

let x=fetch('https://api.github.com/users')
console.log(x);

x.then((response)=>{
        return response.json()
})
.then(data=>{
    console.log(data);
     
    // ************FIRST_WAY***********
    
    // for(let i=0;i<data.length;i++){
    //     let tr=document.createElement('tr')
    //     tr.innerHTML=`
        // <td>${data[i].login}</td>
        // <td>${data[i].id}</td>
        // <td>${data[i].node_id}</td>
        // <td><img src=${data[i].avatar_url}/></td>`
    //     // console.log(data[i].login);
    //     tbody.append(tr)


     // *************SECOND_WAY*************

    //  tbody.innerHTML+=`<tr>
    //  <td>${data[i].login}</td>
    //  <td>${data[i].id}</td>
    //  <td>${data[i].node_id}</td>
    //  <td><img src=${data[i].avatar_url}/></td></tr>`
//  }

    // ****************THIRD_WAY***********************

        // data.map(object=>{
        //     let {login,id,node_id,avatar_url}=object
        //     tbody.innerHTML+=`<tr>
        //     <td>${login}</td>
        //     <td>${id}</td>
        //     <td>${node_id}</td>
        //     <td><img src=${avatar_url}/></td>
        //     </tr>`
        // })
   
})

