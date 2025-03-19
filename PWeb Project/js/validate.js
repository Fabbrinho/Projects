   
   /* FUNZIONI DI UTILITA'*/
   function clear_wrong(){
    let sbaglio=document.querySelectorAll(".wrong");
    sbaglio.forEach(sbaglio => {
        sbaglio.classList.remove("wrong");
    });
   }

   function open_wind(msg){
    let cont=document.getElementById("reg_form_cont");
    if(cont==null)
        cont=document.getElementById("pren_cont");
    if(cont==null)
        cont=document.getElementById("kit_title");
    cont.insertAdjacentHTML("beforeend",msg);
    setTimeout(close_wind,9000);
    document.getElementById("close_wind").onclick=close_wind;
   }
   
   function close_wind(){
    let wind=document.querySelector("#alert_div");
    if(wind!=null){
        wind.remove();
        clearTimeout();
    }
   }
/*----------------------------------------------- */

   /*FUNZIONE CHE VALIDA I CAMPI DI UN FORM LATO CLIENT*/
   function validate_field(){
        let nome=document.reg_form.nome.value;
        let cognome=document.reg_form.cognome.value;
        let dataN=document.reg_form.data.value;
        let codF=document.reg_form.codFiscale.value;
        let cell=document.reg_form.cell.value;
        let email=document.reg_form.email.value;
        let password=document.reg_form.passwd.value;
        let conferma=document.reg_form.conf_passwd.value;
        let nome_validateTwo=/[A-Za-z]+/;
        let nome_validateOne=/^[^\d\s]+$/;

        clear_wrong();

        let errore=true;
        if(!nome_validateOne.test(nome) || !nome_validateTwo.test(nome)){
            reg_form.nome.classList.add("wrong");
            errore=false;
        }
        if(!nome_validateOne.test(cognome) || !nome_validateTwo.test(cognome)){
            reg_form.cognome.classList.add("wrong");
            errore=false;
        }
        let data=new Date(dataN);
        let dataMargin=new Date('01/01/1910');
        if(data<dataMargin){
            reg_form.data.classList.add("wrong");
            errore=false;
        }

        let cod_validate=/^(?:[A-Z][AEIOU][AEIOUX]|[AEIOU]X{2}|[B-DF-HJ-NP-TV-Z]{2}[A-Z]){2}(?:[\dLMNP-V]{2}(?:[A-EHLMPR-T](?:[04LQ][1-9MNP-V]|[15MR][\dLMNP-V]|[26NS][0-8LMNP-U])|[DHPS][37PT][0L]|[ACELMRT][37PT][01LM]|[AC-EHLMPR-T][26NS][9V])|(?:[02468LNQSU][048LQU]|[13579MPRTV][26NS])B[26NS][9V])(?:[A-MZ][1-9MNP-V][\dLMNP-V]{2}|[A-M][0L](?:[1-9MNP-V][\dLMNP-V]|[0L][1-9MNP-V]))[A-Z]$/i;

        if(!cod_validate.test(codF)){
            reg_form.codFiscale.classList.add("wrong");
            errore=false;
        }
        if(isNaN(cell) || cell.length<10){
            reg_form.cell.classList.add("wrong");
            errore=false;
        }
        let email_validate=/^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-]{2,})+.)+([a-zA-Z0-9]{2,})+$/;
        if(!email_validate.test(email)){
            reg_form.email.classList.add("wrong");
            errore=false;
        }
        let pswd_msg="";
        if (password.length < 6 ) 
        {   
            reg_form.passwd.classList.add("wrong");
            pswd_msg=`<p>La password deve essere lunga almeno 6 caratteri</p>`;
            errore=false;
        }
        //Effettua il controllo sul campo CONFERMA PASSWORD
         if (password != conferma) {
            document.reg_form.conf_passwd.value = "";
            reg_form.conf_passwd.classList.add("wrong");
            errore=false;
            pswd_msg=pswd_msg+`<p>Le due password non corrispondono</p>`;
         }
         if(!errore){
            let msg=`<div id="alert_div"> <button id="close_wind" class="close_wind"><img id="close_img" src="../img/close_img.png" alt="chiudi finestra"></button> 
                    <p>Sono presenti degli errori nella compilazione dei campi</p>
                    ${pswd_msg}  
                    </div>`;
            open_wind(msg);
            }
        return errore;  
}
/*FUNZIONE CHE CONTROLLA CHE NON SI REGISTRINO DUE UTENTI UGUALI*/
function double_user_check(){
    let errore=validate_field();
    if(!errore){
        return false;
    }
    let cod=document.reg_form.codFiscale.value;
    let email=document.reg_form.email.value;
    let send={
        "cod":cod,
        "email":email
    };
    let res;
    fetch('./double_user.php',{
            method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(send)
    })
    .then(response =>response.json())
    .then(data=>{
            res=data;
            console.log(data,res);
            if(res){
                document.reg_form.action = "./registration.php"; 
                document.reg_form.submit();
            }else{
                let msg=`<div id="alert_div"> <button id="close_wind" class="close_wind"><img id="close_img" src="../img/close_img.png" alt="chiudi finestra"></button> 
                <p>Esiste già un utente con questi dati</p>   
                </div>`;
                open_wind(msg);
            }
    })
    .catch((error)=>{
        console.error('Errore', error);
     });
    return false;
}

/*Funzione che controlla validità di utente e password*/
    function validate_user(id){
        let form=document.getElementById(id);
        let email=form.email.value;
        let pswd=form.pswd.value;
        let errore=true;
        let url="./php/login.php";
        let src="./img/close_img.png";
        if(form.id=="login_form" || form.id=="login_form_extern"){
            url="./login.php";
            src="../img/close_img.png";
        }
        clear_wrong();
        let email_validate=/^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-]{2,})+.)+([a-zA-Z0-9]{2,})+$/;
        if(!email_validate.test(email)){
            form.email.classList.add("wrong");
            errore=false;
        }
        if (pswd.length < 6 ) {   
            form.pswd.classList.add("wrong");
            errore=false;
        }
        if(errore){
            let send={
                "email":email, 
                "pswd":pswd
            };
            fetch(url,{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(send)}) 
            .then(response => response.json())
            .then(data=>{
                    if(data.res){
                        if(url=="./php/login.php")
                            form.action="./area_riservata.php";
                        else
                            form.action="../area_riservata.php";
                        form.submit();  
                    }else{
                        let msg=`<div id="alert_div"> <button id="close_wind" class="close_wind"><img id="close_img" src=${src} alt="chiudi finestra"></button>
                                <p>Credenziali Errate o Utente Non Registrato</p>   
                                </div>`;
                                open_wind(msg);
                    }
            })
           .catch((error)=>{
              console.error('Errore', error);
           });
        }else{
            let msg=`<div id="alert_div"> <button id="close_wind" class="close_wind"><img id="close_img" src=${src} alt="chiudi finestra"></button> 
            <p>Sono presenti degli errori nella compilazione dei campi</p>   
            </div>`;
            open_wind(msg);
        }
        return false;
}

/*FUNZIONE CHE CONTROLLA I DATI INSERITI NEL FORM DI PRENOTAZIONE*/
function valid_pren(id){
    let form=document.getElementById(id);
    let arrivo=form.data_arrivo.value;
    let partenza=form.data_partenza.value;
    let adulti=form.adulti.value;
    let bambini=form.bambini.value;
    let errore=true;
    clear_wrong();
    let dataArrivo=new Date(arrivo);
    let dataPartenza=new Date(partenza);
    let today=new Date();
    if(dataArrivo<today || dataArrivo>dataPartenza || arrivo==partenza){
        form.data_arrivo.classList.add("wrong");
        form.data_partenza.classList.add("wrong");
        errore=false;
    }
    if(adulti==0 && bambini==0){
        form.adulti.classList.add("wrong");
        form.bambini.classList.add("wrong");
        errore=false;
    }
    if(!errore){
        let msg=`<div id="alert_div"> <button id="close_wind" class="close_wind"><img id="close_img" src="./img/close_img.png" alt="chiudi finestra"></button>
       <p>Sono presenti errori nella compilazione dei campi</p>   
       </div>`;
       open_wind(msg);
    }

    return errore;
}
