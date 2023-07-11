



function chapterOne() {
    console.log("test");
    let pageAnimation = document.querySelector(".pageturnani")
    pageAnimation.style.display= "inline-flex";

}

function chapterTwo() {
    console.log("test");
    let pageAnimation = document.querySelector(".pageturnani")
    pageAnimation.style.display= "inline-flex";

}

function chapterThree() {
    console.log("test");
    let pageAnimation = document.querySelector(".pageturnani")
    pageAnimation.style.display= "inline-flex";

}

function chapterFour() {
    console.log("test");
    let pageAnimation = document.querySelector(".pageturnani")
    pageAnimation.style.display= "inline-flex";

}
function chapterOne1() {
    console.log("test-1");
    let pageAnimation = document.querySelector(".pageturnani")
    pageAnimation.style.display= "inline-flex";
}
function chapterTwo1() {
    console.log("test-1");
    let pageAnimation = document.querySelector(".pageturnani")
    pageAnimation.style.display= "inline-flex";
}

//Gallery Junk//


let modal = document.querySelector(".modal");
let img1 = document.querySelector("#1/9i");
let modalImg1 =document.querySelector("#1/9");
img1.onclick = function(){
    modal.style.display= "block";
    modalImg1.src = this.src;
}

let span = document.querySelector(".close");
span.onclick = function() {
    modal.style.display = "none";
}