let burger=document.getElementById('burger');
let ul=document.querySelector('nav ul');

burger.addEventListener('click',() =>{
    ul.classList.toggle('show');
})
// burger.addEventListener("click",function () {
//     ul.classList.toggle('show');
// });
// let stopFlash=document.getElementById('stopFlash');
// stopFlash.addEventListener("mouseover",function count() {
//     stopFlash.classList.toggle('stopFlashing');
// })


var cheerUp=document.getElementById('cheerUp-button');
var thankForCheer=document.getElementById('thankForCheer');

cheerUp.addEventListener("click",function ShowText() {
    console.log("thankForCheerUp");
    thankForCheer.style.color="#fff";
})


let con0=document.getElementById('con0');
let deleteCon0=document.getElementById('delete-page-animation');

let text1=document.getElementById('ani-title1');
let text2=document.getElementById('ani-title2');
let button=document.getElementById('delete-page-animation');


function changePage() {
    setTimeout(function(){ 
    con0.style.display='none';
    }, 3000);
}

function showPage() {
    setTimeout(function(){ 
            con0.style.opacity=1;
    }, 4600);
}

function showText1() {
    setTimeout(function(){ 
        text1.style.opacity=1;
        text1.style.transform="translateX(0%)"
        // text1.classList.toggle('flashing');
    }, 6700);
}
function flashingText1() {
    setTimeout(function(){ 
        text1.classList.toggle('flashing');
    }, 6600);
}
function showText2() {
    setTimeout(function(){ 
        text2.style.opacity=1;
        text2.style.transform="translateX(0%)"
        // text2.classList.toggle('flashing');
    }, 11700);
}
function flashingText2() {
    setTimeout(function(){ 
        text2.classList.toggle('flashing');
    }, 11600);
}
function showButton() {
    setTimeout(function(){ 
        button.style.opacity=1;
        button.style.transform="translateX(0%)"
    }, 13700);
}



deleteCon0.addEventListener("click",function () {
    con0.classList.toggle('opacityAnimation');
    changePage();
})


// click-copy-text
// function copy() {
//     var copyText = document.querySelector("#input");
//     copyText.select();
//     document.execCommand("copy");
//   }
  
//   document.querySelector("#copy").addEventListener("click", copy);




// function changePage() {
//     if (con0.style.opacity=="0") {
//         alert('change');
//         con0.style.display='none';
//     }
// }
// var intervalId = window.setInterval(function(){
//     changePage()
// }, 0.1);









// let mainNav = document.getElementById('js-menu');
// let navBarToggle = document.getElementById('js-nav-toggle');

// navBarToggle.addEventListener("click",function () {
//     mainNav.classList.toggle('active');
// });