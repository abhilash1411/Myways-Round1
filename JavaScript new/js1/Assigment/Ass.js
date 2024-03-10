function fun() {
    let p=document.getElementById("p1")
    p.style.display="none"
}
function fun1(){   
    let p=document.getElementById("p1")
    p.style.display="block" 
}

// let p2=document.getElementById("p1")
// p2.classList.toggle()

function fun2(){
    let p=document.getElementById("p2")
    let btn=document.getElementById("btn")
    let x=btn.textContent
    if(x==="Hide"){
    p.style.display="none"
    btn.textContent="show"
    }
    else{
        p.style.display="block"
        btn.textContent="Hide"
    }
}


function display(){
    let input=document.getElementById("input").value
    let para=document.getElementById("para")
    para.textContent+=input
    document.getElementById("input").value=" "
}


function add(){
    let input1=document.getElementById("input1").value
    let ol=document.querySelector("ol")
    let li=document.createElement("li")
    li.innerText=input1
    ol.append(li)
    document.getElementById("input1").value=" "
}





