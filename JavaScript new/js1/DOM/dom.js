let x=document.getElementById("h")
console.log(x);

// x.innerText="Abhi"

let y=document.getElementsByClassName('h')
console.log(y);
console.log(y[0]);

let x1=document.getElementsByTagName('p')
console.log(x1);

let n=document.querySelector("h2")
console.log(n);

let n1=document.querySelector("#h")
console.log(n1);

let n2=document.querySelector(".h")// querySelctor select only first tag 
console.log(n2);

let m=document.querySelectorAll(".h")
console.log(m);// querySelectorAll select inthe form of nodeList


y[0].innerText="lorem"

x.setAttribute("tittle","Abhi")

let ol=document.getElementsByTagName("ol")

let li1=document.createElement("li")
li1.textContent="Abhi"
ol[0].append(li1)

let li2=document.createElement("li")
li2.textContent="Reddy"
ol[0].append(li2)
console.log(ol);


// let table=document.getElementsByTagName("table")
// console.log(table);

// table[0].setAttribute("border","2px solid")

// let tr=document.createElement("tr")
// table[0].append(tr)
// let td=document.createElement("td")
// td.textContent="Name"
// tr.append(td)


// let tr1=document.createElement("tr")
// table[0].append(tr1)
// let tdd=document.createElement("td")
// tdd.textContent="Roll no"
// tr1.append(tdd)


// let tr2=document.createElement("tr")
// table[0].append(tr2)
// let tdd1=document.createElement("td")
// tdd1.textContent="Branch"
// tr2.append(tdd1)


// Creation table by using loops

let table=document.getElementsByTagName("table")[0]
for(let i=1;i<=3;i++){
    let tr=document.createElement("tr")
    for(let j=1;j<=3;j++){
        let td=document.createElement("td")
        td.textContent="table Data"
        tr.appendChild(td)
    }
    table.append(tr)
}
table.setAttribute("border","2px solid")