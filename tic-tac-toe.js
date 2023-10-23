"use strict";


//This where all the global variables will be declared 

document.addEventListener("DOMContentLoaded", function(){
    var box= document.querySelectorAll(" #board > div");

    box.forEach(function(bo){
    bo.classList.add("square");
});
});
//This is a function to let the board be visible
/*board.forEach((elem,index)=> {
   // elem.addEventListener('')
    index.classList.add('square');  
    console.log(elem,index);
   
});
*/


