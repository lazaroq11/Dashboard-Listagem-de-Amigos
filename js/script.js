(()=>{
    const baseURL =  "http://localhost:3003";
    let modalDel = document.querySelector("#modalDel")
    let modal = document.querySelector("#modal");
    let listUser = [];
    
    
    async function getUser(){
        let response = await fetch(`${baseURL}/friends`);
        let userList = await response.json();
        listUser = userList;

        userList.forEach(friends=>{
            const card = document.createElement("div");
            const main = document.querySelector(".ListTable")
            
            card.classList.add("AskTips")
            card.setAttribute("identifier",friends.id);
                  
            const name = document.createElement("p");
            name.classList.add("nome");
            name.textContent = friends.name;
            card.appendChild(name);
        
            const email = document.createElement("p");
            email.classList.add("email");
            email.textContent = friends.email;
            card.appendChild(email);
            
            const gender = document.createElement("p");
            gender.classList.add("genero");
            gender.textContent = friends.gender;
            card.appendChild(gender);

            const description = document.createElement("p");
            description.classList.add("descricao");
            description.textContent = friends.description;
            card.appendChild(description);

            const edit = document.createElement("p");
            edit.innerHTML = "<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04V7.04Z' fill='black'/></svg>"
            edit.classList.add("editar");
            card.appendChild(edit);
            
            const del = document.createElement("p");
            del.innerHTML = "<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M19 4H15.5L14.5 3H9.5L8.5 4H5V6H19V4ZM6 7V19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6ZM14 14V18H10V14H8L12 10L16 14H14Z' fill='black'/></svg>"
            del.classList.add("deletar");
            card.appendChild(del);


            main.appendChild(card);
        })

        openModalEdit();
        openModalDel();
    }

    function openModalEdit(){
        document.querySelectorAll(".editar").forEach(btEdit=>{
            btEdit.addEventListener("click",()=>{
                if(modal.style.display == ""){
                    modal.style.display = "flex"
                }else{
                    modal.style.display = ""
                }
            })   
        })
    }

    function openModalDel(){
       document.querySelectorAll(".deletar").forEach(btDel=>{
            btDel.addEventListener("click",()=>{
                if(modalDel.style.display==""){
                    modalDel.style.display = "flex"
                    console.log(btDel.parentNode.getAttribute("identifier"));
                    let friendID = btDel.parentNode.getAttribute("identifier")
                    let friend = listUser.find(cardID => cardID.id == friendID);
                    console.log(friend);
                    popularModalDelete(friend);
                }else{
                    modalDel.style.display = ""
                }
            })
        })
    }

    function popularModalDelete(friend){
        let btDel = document.querySelector(".modal-container-del .btDel");
        let titulo = document.querySelector(".modal-container-del h3");

        titulo.textContent = "Tem certeza de que deseja excluir "+friend.name+" ?";
        btDel.setAttribute("identifier", friend.id);

        btDel.addEventListener("click",()=>{ 
            modalDel = document.querySelector(".modal-container-del");
            modalDel.style.display = ""
            deleteFriend(friend.id);     
        })       
    }

    function closeModais(){
        document.querySelectorAll(".botaoFechar").forEach(btFecha=>{
            btFecha.addEventListener("click",()=>{
                if(modal.style.display == ""){
                    modal.style.display = "flex"
                }else{
                    modal.style.display = ""
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
    }


    async function deleteFriend(userId){
        let response = await fetch(`${baseURL}/friends/${userId}`, {
            method: "DELETE",
          });
          userResponse = await response.json();
    }


    function init(){
        getUser();
        closeModais();
       
          
    }

    init(); 
    
    
})();
