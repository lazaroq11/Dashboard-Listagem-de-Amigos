let btEdit = document.querySelector(".AskTips .editar")

let modal = document.querySelector("#modal");
let contador = 0;
 

    btEdit.addEventListener("click",()=>{
        contador++;
        if(modal.style.display == ""){
            modal.style.display = "flex"
        }else{
            modal.style.display = ""
        }

    })