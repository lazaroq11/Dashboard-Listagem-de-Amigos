
let modalEdit = document.querySelector("#modal");
let nome = document.querySelector(".formEdit  .nameEdit")
let email = document.querySelector(".formEdit  .emailEdit")
let genero = document.querySelector(".formEdit  .generoEdit")
let descricao = document.querySelector(".formEdit  .descEdit")
let requiredCamp = document.querySelector(".formEdit .reqCamp")
let modalDel = document.querySelector("#modalDel")



   
    document.querySelectorAll(".AskTips .editar").forEach(btEdit=>{
    btEdit.addEventListener("click",()=>{
       
        if(modal.style.display == ""){
            modal.style.display = "flex"
        }else{
            modal.style.display = ""
        }

    })
})
    document.querySelectorAll(".botaoFechar").forEach(btFecha=>{
    btFecha.addEventListener("click",()=>{
        if(modal.style.display == ""){
            modal.style.display = "flex"
        }else{
            modal.style.display = ""
        }
    })
})
    document.querySelectorAll(".AskTips .deletar").forEach(btDel=>{
    btDel.addEventListener("click",()=>{
       if(modalDel.style.display==""){
           modalDel.style.display = "flex"
       }else{
           modalDel.style.display = ""
       }
    })
})
    document.querySelectorAll(".modal-container-del .btCanc").forEach(btCanc=>{
    btCanc.addEventListener("click",()=>{
        if(modalDel.style.display==""){
            modalDel.style.display = "flex"
        }else{
            modalDel.style.display = ""
        }
    })
})
    