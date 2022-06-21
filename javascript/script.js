'use strict';
const menuBtn = document.getElementById('menu-button');
const exitBtn = document.getElementById('exit-button');
const hiddenNav = document.querySelector('nav');
const body = document.querySelector('body');


function clickFunction() {
    if (hiddenNav.style.display === "block") {
      hiddenNav.style.display = "none";
    } else {
      hiddenNav.style.display = "block";
    }
  }



//   body.addEventListener('click', function(){
//     if (hiddenNav.style.display === "block") {
//         hiddenNav.style.display = "none";
//       } else {
//         hiddenNav.style.display = "block";
//       }
// })



// body.onclick = function() {
//     if (hiddenNav.style.display === "block") {
//          hiddenNav.style.display = "none";
//        } else {
//          hiddenNav.style.display = "block";
//        }
//   }