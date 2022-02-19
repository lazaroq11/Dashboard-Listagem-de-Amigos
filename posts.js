let arrayPockemons = [];
let arrayUrls = [];
let arrayAttributes = [];
let baseURL = "https://pokeapi.co/api/v2/"

function getPockemon(){
const dataArray = fetch("https://pokeapi.co/api/v2/pokemon?limit=12000");
dataArray.then((response) => response.json())
.then((data) =>{
    arrayPockemons = data.results;
    arrayPockemons.forEach((item) =>{
        const urlPockemon = fetch(`${item.url}`);
        urlPockemon.then((response) => response.json())
        .then((data) =>{
            
            createHTML(data);
        })
});
});
}

getPockemon();
function createHTML(item){
    const galeria = document.querySelector(".galeria");
        
        let card = document.createElement("div");
        let postTitle = document.createElement("h3");
        
        let postUser = document.createElement("p");
        let image = document.createElement("img");
    
        card.classList.add("post_card");
        postTitle.classList.add("title");
        postUser.classList.add("user_id");

        galeria.appendChild(card);
        card.appendChild(postTitle);
        card.appendChild(postUser);
        card.appendChild(image);

        image.src = item.sprites.front_default;
        postTitle.textContent = item.name;
        console.log(item.sprites.front_default)
        item.types.forEach((item)=>{
        console.log(item.type.name)
        let postContent = document.createElement("div");
        postContent.classList.add("content");
        card.appendChild(postContent);
        postContent.textContent = item.type.name;
        postContent.classList.add(item.type.name);   
        })
        
        
   
}
