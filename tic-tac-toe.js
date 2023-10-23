"use strict";
// This is a fucntion that will allow the board to pop up when the page is loaded
document.addEventListener("DOMContentLoaded", function() {
//This gets the specific div the contains the boxes
const  showboxes = document.querySelectorAll("#board > div");
const  statustext= document.getElementById("status");

//This function adds square class to each box
showboxes.forEach(function(box){
    box.classList.add("square");
});

const box = document.querySelectorAll(".square");
//This is a list to keep track of the who has played so far
const gameHistory =["","","","","","","","",""];
// this prompts the other user to play
const statusText= document.querySelector('#status');
// this keeps track of game running
const notrun = false;
// This allows the first player to be x


//This calls the the start game function
gameControl();

//Controls the runnings of the game
function gameControl(){
    
if (notrun != true){
    clickedbox()
}
}
// This function allows the player to click a box and see a variabe either x or o
function clickedbox(){
    let currPlayer ="X";
    showboxes.forEach(function(box){
        hoveffect(box);
        box.addEventListener('click',function(e) {
        var l= e.target;
        var b= Array.from(showboxes).indexOf(l);
        if(gameHistory[b] !=""){
            return;
        }else{
            if (currPlayer=='X'){
                l.textContent= "X";
                l.classList.add('X');
                gameHistory[b]= "X";
                statusText.textContent= 'It is now '+ currPlayer+'s turn';
                currPlayer="O";
            }else{
                l.textContent= "O";
                l.classList.add('O');
                gameHistory[b]= "O";
                statusText.textContent= 'It is now '+ currPlayer+'s turn'; 
                currPlayer="X";                               
            }

        
        
        }
        
        //console.log (currPlayer);
        //console.log(gameHistory);
        //console.log(statusText);
    
    notrun = true;
    });

});

function hoveffect(box){
    box.addEventListener('mouseover',function(){
        box.classList.add('hover');
    });
    box.addEventListener('mouseout', function(){
        box.classList.remove('hover');
    });
}

function checkwinner(){

}

};
});
