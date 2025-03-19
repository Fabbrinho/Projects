    /*Transizioni su index.php*/ 

changeBack();
document.getElementById("standard").onclick=room;
document.getElementById("premium").onclick=room;
document.getElementById("excelsior").onclick=room;
window.onscroll = function() {scrool()};

function scrool(){
    let desc= document.getElementById("desc_cont");
    let art=document.getElementById("art_cont");
    let img=document.getElementById("im_desc");
    let title=document.getElementById("room_title");
    if(document.documentElement.scrollTop == 500){
        let button=``;
    }
    if (document.documentElement.scrollTop > 350 && document.documentElement.scrollTop<1000){
        desc.style.opacity="1";
        art.style.opacity="1";
        img.style.opacity="1";
    }
    if(document.documentElement.scrollTop>600 && document.documentElement.scrollTop<1200){
        title.style.left="40%";
        title.style.opacity="1";
    }
    if(document.documentElement.scrollTop<50 || document.documentElement.scrollTop>1100){
        desc.style.opacity="0";
        art.style.opacity="0";
        img.style.opacity="0";
    }
    if(document.documentElement.scrollTop<50 || document.documentElement.scrollTop>1500){
        title.style.left="0";
    }
    
}
function room(){
    let elem=document.activeElement;
    let sel=document.querySelectorAll(".selected");
    let cont=document.getElementById("room");
    sel.forEach(sel => {
        sel.classList.remove("selected");
        sel.classList.add("notselected"); 
    });
    elem.classList.remove("notselected");
    elem.classList.add("selected");
    if(elem.id=="standard"){
        cont.style.backgroundImage="url('./img/standard.jpg')";
    }else if(elem.id=="premium"){
        cont.style.backgroundImage="url('./img/premium.webP')";
    }else{
        cont.style.backgroundImage="url('./img/excelsior.jpg')";
    }
}

function changeBack () {
setTimeout('changeBack1()',15000);
}
function changeBack3(){
    document.getElementById("img3").id='img1';
    setTimeout('changeBack1()',15000);
}
function changeBack2(){
    document.getElementById("img2").id='img3';
    setTimeout('changeBack3()',15000);
}

function changeBack1(){
    document.getElementById("img1").id='img2';
    setTimeout('changeBack2()',15000);
}