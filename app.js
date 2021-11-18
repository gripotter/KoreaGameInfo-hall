const idx1=document.querySelector("#idx1");
const idx2=document.querySelector("#idx2");
const idx3=document.querySelector("#idx3");


//idx1 호버링
function HandleMouseEnterIdx1(){
    idx1.style.fontSize="110px";
    idx1.style.color="rgb(214, 28, 75)";
}
function HandleMouseLeaveIdx1(){
    idx1.style.fontSize="100px";
    idx1.style.color="white";
}
idx1.addEventListener("mouseenter",HandleMouseEnterIdx1);
idx1.addEventListener("mouseleave",HandleMouseLeaveIdx1);

//idx2 호버링
function HandleMouseEnterIdx2(){
    idx2.style.fontSize="110px";
    idx2.style.color="rgb(214, 28, 75)";
}
function HandleMouseLeaveIdx2(){
    idx2.style.fontSize="100px";
    idx2.style.color="white";
}
idx2.addEventListener("mouseenter",HandleMouseEnterIdx2);
idx2.addEventListener("mouseleave",HandleMouseLeaveIdx2);

//idx3 호버링
function HandleMouseEnterIdx3(){
    idx3.style.fontSize="110px";
    idx3.style.color="rgb(214, 28, 75)";
}
function HandleMouseLeaveIdx3(){
    idx3.style.fontSize="100px";
    idx3.style.color="white";
}
idx3.addEventListener("mouseenter",HandleMouseEnterIdx3);
idx3.addEventListener("mouseleave",HandleMouseLeaveIdx3);