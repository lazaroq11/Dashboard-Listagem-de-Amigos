const amiguitos = [
    {
            nome: "Bruno Pitta",
            nickName: "Bad Luck For You",
            description:
              "Bruno Pitta, desenvolvedor Front End Pleno, atualmente trabalhando na VX Case, além de trabalhar como monitor no curso da cubos academy em parceria com o ifood. Atualmente estudando Next. Não menos importante, mas ama bastante dark souls e é jogador de mago em qualquer RPG.",
            descricaoModal:
              "Desenvolvedor Front End Pleno, atualmente trabalhando na VX Case, além de trabalhar como monitor no curso da cubos academy em parceria com o ifood. Atualmente estudando Next. Não menos importante, mas ama bastante dark souls e é jogador de mago em qualquer RPG.Estou habituado com html, css e javascript, além de ter experiência em projetos com angular, vue e React, apesar de ter clara preferência pelo último, devido a isso que decidi escolher o next.Possuo pouco mais de 2 anos de experiência e não estou aberto a novas propostas de trabalho no momento!",
            imgUser: "./img/Rectangle 19.png",
            atividadesFavoritas: [
              "./img/league-of-legends.jpg",
              "./img/yugioh.jpg",
              "./img/darksouls.jpg",
              "./img/pokemon.png",
            ],
          },
          
          {
            nome: "Vitor Manoel",
            nickName: "CremosinhoBA",
            description:
              "Vitor Manoel, desenvolvedor em desenvolvimento, atualmente fazendo pesquisa na UNEB-ACSO. Atualmente estudando tecnologias web. Não menos importante, mas ama bastante linguagens baixo nível e é joga em emuladores de super nintendo ao sentir nostalgia.",
            descricaoModal:
              "Vitor Manoel, desenvolvedor em desenvolvimento, atualmente fazendo pesquisa na UNEB-ACSO. Atualmente estudando tecnologias web. Não menos importante, mas ama bastante linguagens baixo nível e é joga em emuladores de super nintendo ao sentir nostalgia. Abertot a propostas de trabalho, estou habituado com html e css, conhecendo também o básico de programação web utilizando PHP. Costumo escrever algoritmos de baixo nível para realização de desafios e projetos de graduação utilizando C,C++ e Python.",
            imgUser: "./img/vitor/profile.jpeg",
            atividadesFavoritas: [
              "./img/vitor/activity.png",
              "./img/vitor/activity1.png",
              "./img/vitor/activity2.png",
              "./img/vitor/activity3.png",
            ],
          },
      
     { 
      nome: "Suco de Fruta",     
      description:
      "Em 2013 não saberia o que escrever aqui e agora tenho a sensação de que ainda estou em 2013.Só posso dizer que palavras não bastam pra me descrever seria necessário algo maior. Enfim, não curto muitas coisas mas sei que gosto do dia de ação de graças, de andar com um hollywood atrás da orelha (não fumo) e de me mexer como se tivesse uma arma na cintura. Se querem saber não curto pessoas carecas, se nem o cabelo delas as aguenta quem sou eu para. No meu tempo livre curto uma luta livre, já fiz parte do time de Corleone, gosto também de cantar no ventilador, e me vestir como Prince pra atrair umas meninas, outra coisa que passei a curtir foi apanhar do Caruso .Não me julguem me entendam. Pra Tasha um tchau",
      nickName: "OTalDoSucoDeFruta",
      descricaoModal:"Em 2013 não saberia o que escrever aqui e agora tenho a sensação de que ainda estou em 2013.Só posso dizer que palavras não bastam pra me descrever seria necessário algo maior. Enfim, não curto muitas coisas mas sei que gosto do dia de ação de graças, de andar com um hollywood atrás da orelha (não fumo) e de me mexer como se tivesse uma arma na cintura. Se querem saber não curto pessoas carecas, se nem o cabelo delas as aguenta quem sou eu para. No meu tempo livre curto uma luta livre, já fiz parte do time de Corleone, gosto também de cantar no ventilador, e me vestir como Prince pra atrair umas meninas, outra coisa que passei a curtir foi apanhar do Caruso .Não me julguem me entendam. Pra Tasha um tchau",
      imgUser: "./img/sucodefruta.jpg",
      atividadesFavoritas: ["./img/ventilador.jpg","./img/vestido.jpg","./img/lutando.jpg","./img/caruso.jpg"]

    },
]; 

let sideMenu = document.querySelector(".left-panel")
let description = document.querySelector(".description")
let nick = document.querySelector(".nickName")
let userImg = document.querySelector(".imgUser")
let btNext = document.querySelector(".arrowNext")
let btBack = document.querySelector(".arrowBack")
let nomeModal = document.querySelector(".nomeModal")
let descrModal = document.querySelector(".paragModal")
let btModal = document.querySelector(".linkModal")
let contadorAmiguitos = 0;

btNext.addEventListener("click",()=>{
  
    contadorAmiguitos++;
    
      if(contadorAmiguitos >= amiguitos.length){
      contadorAmiguitos = 0;
      }
      description.textContent = amiguitos[contadorAmiguitos].description
      nick.textContent = amiguitos[contadorAmiguitos].nickName
      userImg.src = amiguitos[contadorAmiguitos].imgUser
      
})

btBack.addEventListener("click",()=>{
  
  contadorAmiguitos--;
  
    if(contadorAmiguitos < 0 ){
    contadorAmiguitos = amiguitos.length - 1;
    }
    description.textContent = amiguitos[contadorAmiguitos].description
    nick.textContent = amiguitos[contadorAmiguitos].nickName
    userImg.src = amiguitos[contadorAmiguitos].imgUser
    
})

btModal.addEventListener("click", ()=>{
   
   alert(contadorAmiguitos)
   nomeModal.textContent = amiguitos[contadorAmiguitos].nome
   descrModal.textContent = amiguitos[contadorAmiguitos].descricaoModal



  
})

function showSideMenu(){
  
    if(sideMenu.style.display == ""){
    sideMenu.style.display = "flex"
  
    

    }else{
        sideMenu.style.display = ""
     
    }

}