// callback hell........

function add(a,b,callback){
    callback(a+b)
}
add(1,2,x=>{
    add(3,x,y=>{
        add(4,y,z=>{
            add(5,z,m=>{
                console.log(m);
            })
        })
    })
})