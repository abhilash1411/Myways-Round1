import{name,abc} from './modules1.js'

console.log(name);
abc()

let lastName="Minukuri"
function call(){
    console.log("i am from module.........");
}

export{lastName,call}