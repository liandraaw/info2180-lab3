"use strict";
// This is a fucntion that will allow the biard to pop up when the page is loaded
document.addEventListener("DOMContentLoaded", function() {
var showboxes = document.querySelectorAll("#board > div");

showboxes.forEach(function(box){
    box.classList.add("square");
});
});
