home_page();
document.getElementById("my_pren").onclick=my_pren_page;
document.getElementById("prenota").onclick=pren_page;
document.getElementById("close_wind_ov").onclick=exit_

let prenotazione;
let codice;
let timeout;

/*Funzione per chiudere la window*/
    function exit_(){
        let over=document.getElementById("overlay_cont");
        over.classList.remove("overlay");
        over.classList.add("hidden");
        let elementi=document.querySelectorAll(".blurred");
        elementi.forEach((elementi) => {
                            elementi.classList.remove("blurred");
                        });
        clearTimeout(timeout);
        my_pren_page();
    }

/*FUNZIONE PER ELIMINARE UNA PRENOTAZIONE*/
        function del_pren(){
            let pressed=document.activeElement;
            codice=-pressed['id'];
            let div=`<div id="divDel">
                    <p>Sicuro di voler eliminare la prenotazione?</p>
                    <button type="button" id="No" class="choise_but">No</button>
                    <button type="submit" id="Si" class="choise_but">Si</button>
                </div>`;
            let cont=document.getElementById("inner");
            cont.textContent="";
            cont.insertAdjacentHTML("beforeend",div);
            document.getElementById("No").onclick=exit_;
            document.getElementById("Si").onclick=elimina_append;
            let over=document.getElementById("overlay_cont");
            over.classList.remove("hidden");
            over.classList.add("overlay");
            let elementi=document.querySelectorAll(".overlay~*");
            elementi.forEach((elementi) => {
                                elementi.classList.add("blurred");
                            });
        }

/* FUNZIONE CHE COMUNICA ALL'UTENTE SE LA PRENOTAZIONE E' STATA ELIMINATA */
        function elimina_append(){
    let url="./php/delete.php?n_ord=" + codice;
    let delet;
   fetch(url)
    .then(response => response.json())
    .then(data =>{
            delet=data;
            let cont=document.getElementById("inner");
            let msg;
            if(!delet.res){
                msg=`<p>Impossibile effettuare l'eliminazione</p>`;
            }else{
                 msg=`<p>Eliminazione effettuata con successo</p>`;
            }
            timeout=setTimeout(exit_,5000);
            cont.textContent=" ";
            cont.insertAdjacentHTML("beforeend",msg);
        })
    .catch((error)=>{
        console.error('Errore', error);
    });
}

/* FUNZIONE DI MODIFICA PRENOTAZIONE*/
        function mod_pren(){
            let button=document.activeElement;
            codice=button.id;
            let mod=document.getElementById("form_cont");
            let cont=document.getElementById("gest_cont");
            if(mod.className=="dinamic" && button.className=="selected"){
                cont.textContent='';
                cont.classList.remove("showed");
                cont.classList.add("hidden");
                mod.classList.remove("dinamic");
                button.classList.remove("selected");
                button.classList.add("modify");
            }else{
                mod.classList.add("dinamic");
                cont.classList.remove("hidden");
                cont.classList.add("showed");
                let sel_but=document.querySelectorAll(".selected");
                sel_but.forEach(sel_but=>{
                    sel_but.classList.remove("selected");
                    sel_but.classList.add("modify");
                });
                button.classList.remove("modify");
                button.classList.add("selected");
                cont.textContent='';
                let form=`<form name="modifica" method="POST" onsubmit="return modifica_append()" id="formMod">
                            <h3>Modifica ordine numero ${codice}</h3>
                            <label for="data_arrivo">Data di Arrivo</label>
                            <input type="date" id="data_arrivo" name="data_arrivo" required>
                            <br>
                            <label for="data_partenza">Data di partenza</label>
                            <input type="date" name="data_partenza" id="data_partenza" required>
                            <br>
                            <label for="adulti">Adulti</label>
                            <select id="adulti" name="adulti">
                                <option value="0" selected>0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <br>
                            <label for="bambini">Bambini</label>
                            <select id="bambini" name="bambini">
                                <option value="0" selected>0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <br>
                            <label for="tipo">Tipo camera</label>
                            <select id="tipo" name="tipo">
                                <option value="Standard" selected>Standard</option>
                                <option value="Premium">Premium</option>
                                <option value="Excelsior">Excelsior</option>
                            </select>
                            <br>
                            <input type="submit" id="req_mod" value="Richiedi Modifica">
                        </form>`;
                       cont.insertAdjacentHTML("beforeend",form);
            }
        }

/* FUNZIONE CHE COMUNICA ALL'UTENTE SE LA PRENOTAZIONE E' STATA MODIFICATA */
    function modifica_append(){
        let errore=valid_pren("formMod");
            if(!errore)
                return false;
        let form=document.getElementById("formMod");
        let formData=new FormData(form);
        formData.append("n_ord",codice);
        fetch("./php/modify.php", {
            method: "POST",
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            let div;
            if(data){
                 div=`<div id="divMod">
                    Prenotazione modificata con successo
                    </div>`;
            }else{
                div=`<div id="divMod">
                    Non è stato possibile modificare la prenotazione
                    </div>`;
            }
            let cont=document.getElementById("inner");
            cont.textContent="";
            cont.insertAdjacentHTML("beforeend",div);
            let over=document.getElementById("overlay_cont");
            over.classList.remove("hidden");
            over.classList.add("overlay");
            timeout=setTimeout(exit_,5000);
        })
        .catch(error => {
            console.error("Error:", error);
        });
        return false;
    }
/*FUNZIONE CHE MOSTRA LE PRENOTAZIONI DELL'UTENTE*/
        function my_pren_page(){
        
            let pren=document.getElementById("prenota");
            pren.style.opacity='0.5';
            let my_pren=document.getElementById  ("my_pren");
            my_pren.style.opacity='1';
            
            let titolo=document.getElementById("titolo");
            titolo.textContent="Le mie prenotazioni";
            let cont=document.getElementById("form_cont");
            cont.textContent='';

            fetch('./php/show_pren.php',{
                    method:'POST',
                    headers:{
                        'Content-Type':'application/json'}
                    })
            .then(response => response.json())
            .then(data=>{
                prenotazione=data;
                if(prenotazione.not_found==true){
                    let not_found=`<br><br><h4>Non sono ancora state effettuate prenotazioni</h4>`;
                    cont.insertAdjacentHTML("beforeend", not_found);
                }else{
                    let tabella=`<table>
                                <thead>
                                    <tr>
                                        <td>Data di arrivo</td>
                                        <td>Data di partenza</td>
                                        <td>Camera</td>
                                        <td>Prezzo</td>
                                        <td>Numero Ordine</td>
                                        <td></td>
                                    </tr>
                                </thead>
                                <tbody>
                                        ${genera_row(prenotazione)}
                                </tbody>
                            </table>`;           
                    cont.insertAdjacentHTML("beforeend", tabella);
                    let gest=document.getElementById("gest_cont");
                    gest.textContent="";
                    gest.classList.remove("showed");
                    gest.classList.add("hidden");
                    cont.classList.remove("dinamic");
                    ins_event(prenotazione);
                }
            })
          .catch((error)=>{
               console.error('Errore', error);
          })
        }

/*GENERO RIGHE PER OGNI PRENOTAZIONE*/
        function genera_row(){
            let righe='';
            prenotazione.forEach(prenotazione => {
                let row=`<tr>
                        <td>${prenotazione.arrivo}</td>
                        <td>${prenotazione.partenza}</td>
                        <td>${prenotazione.tipo}</td>
                        <td>${prenotazione.prezzo}</td>
                        <td >${prenotazione.codice}</td>
                        <td><button type="button" id="${prenotazione.codice}" value="${prenotazione.codice}" class="modify">Modifica Prenotazione</button> <br>
                        <button type="button" id="-${prenotazione.codice}" value="-${prenotazione.codice}" class="modify">Elimina Prenotazione</button></td>
                    </tr>`;
                righe+=row;
            });
            return righe;
        }
/*EVENT PER LA MODIFICA DELLA PRENOTAZIONE*/
        function ins_event(){
            prenotazione.forEach(prenotazione=>{
                let elem=document.getElementById(prenotazione.codice);
                let temp=document.getElementById("-" + prenotazione.codice);
                elem.addEventListener("click",mod_pren);
                temp.addEventListener("click",del_pren);
            });
        }
/*FUNZIONI PER GENERAZIONE DINAMICA HOMEPAGE RISERVATA */
        function pren_page(){
            let pren=document.getElementById("prenota");
            pren.style.opacity='1';
            let my_pren=document.getElementById("my_pren");
            my_pren.style.opacity='0.5';
            let cont=document.getElementById("gest_cont");
            cont.textContent='';
            cont.classList.remove("showed");
            cont.classList.add("hidden");
            home_page();
        }
        function home_page(){
            let titolo=document.getElementById("titolo");
            titolo.textContent="Prenota il tuo soggiorno";
            let cont=document.getElementById("form_cont");
            cont.textContent='';
            let form =`
            <form action="./php/pren_window.php" method="POST" onsubmit="return valid_pren('reg_form')" id="reg_form">
                 <label for="data_arrivo">Data di arrivo</label>
                 <input type="date" id="data_arrivo" name="data_arrivo" required>
                <br>
                 <label for="data_partenza">Data di partenza</label>
                 <input type="date" id="data_partenza" name="data_partenza" required>
                <br>
                <label for="adulti">Adulti</label>
                <select id="adulti" name="adulti">
                    <option value="0" selected>0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <br>
                <label for="bambini">Bambini</label>
                <select id="bambini" name="bambini">
                    <option value="0" selected>0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <br>
                 <input type="submit" id="req" value="Richiedi Camera">
            </form>`;
            
        cont.insertAdjacentHTML("beforeend",form);
        }