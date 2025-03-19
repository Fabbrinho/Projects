document.getElementById("accWindow").onclick=show_login;

/** FUNZIONE CHE MOSTRA LA FINESTRA DI LOGIN */
function show_login(){
    let elem=document.getElementById("overlay_cont");
    let tenda=document.getElementById("tenda");
    let body=document.getElementsByTagName("body");
    if(elem.className=="hidden"){
        elem.classList.remove("hidden");
        elem.classList.add("overlay");
        if(elem.parentElement==body[0])
            tenda.src="../img/tenda_su.png";
        else
            tenda.src="./img/tenda_su.png";
    }else if(elem.className="overlay"){
        elem.classList.remove("overlay");
        elem.classList.add("hidden");
        if(elem.parentElement==body[0])
            tenda.src="../img/tenda.png";
        else
            tenda.src="./img/tenda.png";
    }
}
