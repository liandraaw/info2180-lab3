"use strict";
// This is a fucntion that will allow the board to pop up when the page is loaded
document.addEventListener("DOMContentLoaded", function() {
//This gets the specific div the contains the boxes
const  showboxes = document.querySelectorAll("#board > div");
//This function adds square class to each box
showboxes.forEach(function(box){
    box.classList.add("square");
});

const box = document.querySelectorAll(".square");
//This is a list to keep track of the who has played so far
var gameHistory =["","","","","","","","",""];
// this prompts the other user to play
var statusText= document.querySelector('#status');
// this keeps track of game running
var run = false;
// this makes reference to restart button
const button = document.querySelector('.btn');
//This calls the the start game function
gameControl();

//Controls the runnings of the game
function gameControl(){
    
if (run != true ){
    clickedbox();
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
        if(gameHistory[b] !="" && notrun== false){
            return;
        }else{
            if (currPlayer=='X'){
                l.textContent= "X";
                l.classList.add('X');
                gameHistory[b]= "X";
                if (checkwinner(gameHistory)== true){
                    statusText.textContent= "Congradulations !"+ currPlayer+" is the Winner!";
                    statusText.classList.add('you-won');
                    box.removeEventListener('click', clickedbox());

                   }else{
                    currPlayer="O";     
                    statusText.textContent= 'It is now '+ currPlayer+'s turn'; 
                    run = false;  
                                       
                   }
            }else{
                l.textContent= "O";
                l.classList.add('O');
                gameHistory[b]= "O";
               if (checkwinner(gameHistory)== true){
                statusText.textContent= "Congradulations!"+ currPlayer+" is the Winner!";
                statusText.classList.add('you-won');
                box.removeEventListener('click', clickedbox());

                }else{
                currPlayer="X";     
                statusText.textContent= 'It is now '+ currPlayer+'s turn';  
                                        
               }
                
            }
        
        }
        
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

function checkwinner(gameHistory,){
    const wincombo= [[0,1,2], [3,4,5], [6,7,8],[0,3,6],[1,4,7], [2,5,8], [0,4,8], [2,4,6]];


    for (const combo of wincombo){
        const[l,m,n]=combo;
        if (gameHistory[l]&& gameHistory[l]===gameHistory[m]&& gameHistory[l]=== gameHistory[n]){
            return true;
        }
        
    }
     return false;
};

button.addEventListener('click',() =>{
    gameHistory=["","","","","","","","",""];
    showboxes.forEach(function(box){
        box.textContent='';
        box.classList.remove('X','O');
    });
    statusText.textContent='Move your mouse over a square and click to play as X or O.';
    statusText.add.classList('#status');
    
})
};
});
