let scelta;
genera_page();

/** FUNZIONE CHE MOSTRA LA CAMERE CHE L'UTENTE PUO' SCEGLIERE */
function genera_page(){
    fetch('./prenota.php', {
        method:'POST',
       headers: { 'Content-Type':'application/json'}
        })
    .then(response => response.json())
    .then(data =>{
        scelta=data;
        let tabella_cont=document.getElementById("tabella_cont");
        if(scelta.not_found==true){
            let not_found=`<div class="desc_cont">
                              <img src="../img/excelsior.jpg" alt="Stanza" class="im_desc"></p>
                              <div class="art_cont">
                                  <article class="art">
                                      <h2>Si è verificato un problema</h2>
                                      Sembra che non ci siano camere disponibili nel periodo da lei selezionato.\n
                                      La preghiamo di riprovare più tardi o di contattare direttamente la struttura.
                                      Grazie, Tuscany Country Resort.
                                      <br>
                                      <br>
                                      <a class="end_but" href="../area_riservata.php">Torna alla Home</a>
                                      </article>
                               </div>
                          </div> <br>`;
            tabella_cont.insertAdjacentHTML("beforeend",not_found);
        }else{
          let tabella=`${generaRow(scelta)}`;
             tabella_cont.insertAdjacentHTML("beforeend",tabella);
             let button=document.querySelectorAll(".choise_but");
             button.forEach(button=>{
                 button.onclick=compl_form;
             });
        }
    })
    .catch((error)=>{
      console.error('Errore', error);
    })
}

function generaRow(){
    let righe='';
    
    scelta.forEach(scelta => {
        let url;
        let descrizione;
        if(scelta.tipo=="Excelsior"){
            url="../img/excelsior.jpg";
            descrizione="La più lussuosa delle nostre camere, pensata per fornire un'esperienza regale ai nostri ospiti";
        }else if(scelta.tipo=="Premium"){
            url="../img/premium.webp";
            descrizione="Camera molto bella e funzionale, per chi ha bisogno di spazio senza rinunciare alle comodità"
        }else{
            url="../img/standard.jpg";
            descrizione="La camera standard fornisce un ottimo compromesso per chi vuol fare una comoda esperienza, senza spendere troppo";
        }
        let riga=`<div class="desc_cont">
                        <img src="${url}" alt="Stanza ${scelta.tipo}" class="im_desc"></p>
                        <div class="art_cont">
                            <article class="art">
                                <h2>${scelta.tipo}</h2>
                                ${descrizione}\n
                                <p>Prezzo soggiorno:€<a class="${scelta.id}">${scelta.prezzo}</a></p>
                                <button type="submit" class="choise_but" id="${scelta.id}"> Seleziona</button>
                            </article>
                         </div>
                    </div> <br>`;
                    
        righe+=riga;
    });
    return righe;
}

/** FUNZIONE CHE CONVALIDA LA RICHIESTA DI ELIMINAZIONE */
function compl_form(){
    let pressed=document.activeElement;
    if( pressed.className=="choise_but"){
        pressed.classList.remove("choise_but");
        pressed.classList.add("active");
        let div=`<div id="divDel">
            <p>Sicuro di confermare la prenotazione?</p>
            <button type="button" id="No" class="choise_but">No</button>
            <button type="submit" id="Si" class="choise_but">Si</button>
        </div>`;
        let overlay=document.getElementById("overlay_cont");
        overlay.classList.remove("hidden");
        overlay.classList.add("overlay");
        let cont=document.getElementById("inner");
        cont.textContent="";
        cont.insertAdjacentHTML("beforeend",div);
        document.getElementById("No").onclick=exit_;
        document.getElementById("close_wind_ov").onclick=exit_;
        document.getElementById("Si").onclick=send_data;
        }
    else{
        let dis_but=document.querySelectorAll(".choise_but");
        dis_but.forEach(dis_but=>{
            dis_but.removeAttribute("disable");
        });
        pressed.classList.remove("active");
        pressed.classList.add("choise_but");
        exit_();
    }
}

/*Funzione per chiudere la window*/
function exit_(){
let over=document.getElementById("overlay_cont");
over.classList.remove("overlay");
over.classList.add("hidden");
let elementi=document.querySelectorAll(".active");
elementi.forEach((elementi) => {
                elementi.classList.remove("active");
                elementi.classList.add("choise_but");
            });
}
/** INVIO LA SCELTA DELL'UTENTE AL DATABASE */
function send_data(){
    let selected=document.querySelector(".active");
    let id=selected.id;
    let price_collection=document.getElementsByClassName(id);
    let price=price_collection[0].textContent;
    let esito;
    let send={
        "id":id,
        "prezzo":price
    };

    fetch('./ins_pren.php',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(send)})
    .then(response => response.json())
    .then(data =>{
            esito=data;
            let div;
            if(esito){
                 div=`<div id="divDel" class="overlay">
                    <p>Prenotazione Effettuata!</p>
                    <a class="end_but" href="../area_riservata.php">Torna alla Home</a>
                    <a class="end_but" href="./logout.php">Logout</a>
                </div>`;
            }else{
                div=`<div id="divDel" class="overlay">
                        <p>Impossibile Effetuare la Prenotazione</p>
                        <a class="end_but" href="../area_riservata.php">Torna alla Home</a>
                        <a class="end_but" href="./logout.php">Logout</a>
                    </div>`;
            }
            let cont=document.getElementById("inner");
            cont.textContent="";
            cont.insertAdjacentHTML("beforeend",div);
            let elementi=document.querySelectorAll(".overlay~*");
            elementi.forEach((elementi) => {
                    elementi.classList.add("blurred");
                });
    })
  .catch((error)=>{
     console.error('Errore', error);
  });

}

