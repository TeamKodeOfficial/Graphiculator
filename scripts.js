const listCont = document.getElementById("funtionsList")
const addFunc = document.getElementsByClassName("addFunction");
let clone = document.querySelector('.function').cloneNode( true );
var funcs = [1];
// Change the id attribute of the newly created element:
clone.setAttribute( 'id', funcs );

// Append the newly created element on element p 
const element = document.getElementById("addFunction");
element.addEventListener("click", createFunc);
function createFunc(id){
    funcs.push("fruits[fruits.length - 1] + 1")
    document.querySelector('ul').appendChild( clone );
}
