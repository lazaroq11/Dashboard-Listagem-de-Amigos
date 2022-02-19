const baseURL =  "http://localhost:3000";
let FormUser = document.forms.formUser;
let listUser = [];
let userClick;
formUser.addEventListener("submit",(e) =>{
    e.preventDefault();
    
    const{name,age,university} = FormUser;

    const user = {
        name:name.value,
        age:age.value,
        university:university.value
    };
    console.log(user);
   
    if(name.value == "" || age.value == "" || university.value == "" ){
    if(name.value == "" ){
        alert("Campo Nome Obrigatório")
    }

    if(age.value == ""){
        alert('Campo Idade Obrigatório')
    }

    if(university.value == ""){
        alert('Campo Universidade Obrigatório')
    }
 
    
}
    else{
        postUser(user);
      
       
    }
});

async function postUser(user) {
    let response = await fetch(`${baseURL}/user`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(user),
    });
    userResponse = await response.json();
    getUser();
}

async function getUser() {
    const list = document.querySelector(".lista");
    list.innerHTML = "";

    let response = await fetch(`${baseURL}/user`);
    let userList = await response.json();
    listUser = userList;
    console.log(userList);
   
 
    
   userList.forEach(users => {
    const card = document.createElement("div");
    const main = document.querySelector(".lista");
    card.setAttribute("identificador",users.id);
    const name = document.createElement("h3");
    name.textContent = users.name;
    card.appendChild(name);

    const age = document.createElement("p");
    age.textContent = users.age;
    card.appendChild(age);

    const university = document.createElement("p");
    university.textContent = users.university;
    card.appendChild(university);

    const del = document.createElement("p");
    del.innerHTML = "<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M19 4H15.5L14.5 3H9.5L8.5 4H5V6H19V4ZM6 7V19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6ZM14 14V18H10V14H8L12 10L16 14H14Z' fill='black'/></svg>"
    del.classList.add("del");
    card.appendChild(del);


    const edit = document.createElement("p");
    edit.innerHTML = "<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04V7.04Z' fill='black'/></svg>"
    edit.classList.add("edit");
    card.appendChild(edit);

    main.appendChild(card);
    
});

   console.log(userList);
   targetUser();

}

function targetUser(){
    let list = document.querySelectorAll(".lista div");
    
    list.forEach((item)=>{
        let del = item.querySelector(".del");
        let edit = item.querySelector(".edit");
    
       del.addEventListener("click",()=>{
        deleteUser(item.getAttribute("identificador"))
        })
    
        edit.addEventListener("click",()=>{
            console.log(listUser)
            let userClicked = listUser.find(
                (user)=>user.id == item.getAttribute("identificador")
            );
            
            userClick = userClicked;
            
        })
        
    })
}

async function deleteUser(id){
    let response = await fetch(`${baseURL}/user/${id}`, {
        method: "DELETE",
      });
      userResponse = await response.json();
      
}



async function editUser(user,id){
    let response = await fetch(`${baseURL}/user/${id}`, {
        method: "PUT",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(user),
      });
      userResponse = await response.json();
    
      
}
  
formEdit.addEventListener("submit",(e) =>{
    e.preventDefault();

    const nameEdit = document.querySelector("input[name ='nameEdit']")
    const ageEdit = document.querySelector("input[name ='ageEdit']")
    const universityEdit = document.querySelector("input[name ='universityEdit']")
    const{nameEdit,ageEdit,universityEdit} = formEdit;

    const user = {
        name:nameEdit.value,
        age:ageEdit.value,
        university:universityEdit.value
    };
    console.log(user);
   
    if(nameEdit.value == "" || ageEdit.value == "" || universityEdit.value == "" ){
    if(nameEdit.value == "" ){
        alert("Campo Nome Obrigatório")
    }

    if(ageEdit.value == ""){
        alert('Campo Idade Obrigatório')
    }

    if(university.value == ""){
        alert('Campo Universidade Obrigatório')
    }
 
    
}
    else{
        console.log(userClick);
        editUser(user,userClick.id);
      
       
    }
});

getUser();