let btEdit = document.querySelector(".AskTips .editar")
let btDel = document.querySelector(".AskTips .deletar")
let btCanc = document.querySelector(".modal-container-del .btCanc")
let btFecha = document.querySelector(".botaoFechar")
let modalEdit = document.querySelector("#modal");
let modalDel = document.querySelector("#modalDel")

let contador = 0;
 

    btEdit.addEventListener("click",()=>{
       
        if(modal.style.display == ""){
            modal.style.display = "flex"
        }else{
            modal.style.display = ""
        }

    })
    
    btFecha.addEventListener("click",()=>{
        if(modal.style.display == ""){
            modal.style.display = "flex"
        }else{
            modal.style.display = ""
        }
    })

    btDel.addEventListener("click",()=>{
       if(modalDel.style.display==""){
           modalDel.style.display = "flex"
       }else{
           modalDel.style.display = ""
       }
    })

    btCanc.addEventListener("click",()=>{
        if(modalDel.style.display==""){
            modalDel.style.display = "flex"
        }else{
            modalDel.style.display = ""
        }
    })