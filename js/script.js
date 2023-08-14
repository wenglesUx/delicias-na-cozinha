// outras variaveis
const cards = document.querySelector('.miniaturas')
const homeCd = document.querySelector('#home')

// funções de reset
function reset(){
  bkImg.innerHTML ="<img src='shot-professional-old-chef-dressed-uniform-holding-kitchen-spatula-tongs.jpg'>"
    homeCd.style.display = 'none'
    
    title.innerText =``
    qtt.innerText = ``
    ing.innerText = ''
    cards.style.marginTop='';
    //reset de botões modal

actbtn1.style.display ='none'
actbtn2.style.display ='none'
actbtn3.style.display ='none'
actbtn4.style.display ='none'


}
homeCd.addEventListener("click",reset)
// funções de animações
function hidder(){
    cards.style.marginTop='100%';
    cards.style.transition ='0.8s ease-in-out';
}


/*aplicação de variaveis BUTTONS cards*/
const  actCard1 = document.querySelector('#btn-cen');
const  actCard2 = document.querySelector('#btn-las');
const  actCard3 = document.querySelector('#btn-strog');
const  actCard4 = document.querySelector('#btn-fei');

/* varaiveis do header*/
const title = document.querySelector('#title')
const qtt = document.querySelector('#quantidade')
const ing = document.querySelector('#ingredientes')
const moreBtn = document.querySelector('#morebtn')
const bkImg = document.querySelector('#backImg')

// variaveis btns modal active
const  actbtn1 = document.querySelector('#morebtn1');
const  actbtn2 = document.querySelector('#morebtn2');
const  actbtn3 = document.querySelector('#morebtn3');
const  actbtn4 = document.querySelector('#morebtn4');

/*eventos*/
actCard1.addEventListener("click",card1) 
actCard2.addEventListener("click",card2) 
actCard3.addEventListener("click",card3) 
actCard4.addEventListener("click",card4) 


/*funções*/


function card1(){
hidder()
homeCd.style.display = 'block'
actbtn1.style.display='block'
title.innerHTML =`${'<h1>bolo de cenoura</h1>'}`
qtt.innerHTML = `${'<h3> Rede ate 8 Porções</h3>'}`




var ul = document.createElement("ul");
var ingredientes = [
"1 xícara de cenoura lavada, descascada e cortada em cubinhos", 
"2 ovos",
"½ xícara de açúcar",
"1 xícara de farinha de trigo",
"1 colher de chá de fermento em pó",
"1/3 xícara de calda de chocolate",
];

ingredientes.forEach(function(ingrediente) {
  var li = document.createElement("li");
  li.textContent = ingrediente;
  ul.appendChild(li); 
});

var divIngredientes = document.getElementById("ingredientes");
divIngredientes.appendChild(ul);

// função para trocar a imagem de fundo

bkImg.innerHTML ="<img src='https://assets.unileversolutions.com/recipes-v2/67405.jpg'>"


} 
function card2(){
    hidder()
    homeCd.style.display = 'block'
    actbtn2.style.display='block'
    title.innerHTML =`${'<h1>lasanha</h1>'}`
    qtt.innerHTML =`${'<h3>Rende ate 8 porções</h3>'}`

    // ingredientes
    var ul = document.createElement("ul");
var ingredientes = [
"1 massa de lasanha (pronta)", 
"500 g de queijo mussarela",
"1 massa de tomate pronta",
"pimenta-do-reino a gosto",
"500 g carne moída",
"sal a gosto",
"orégano a gosto"
];

ingredientes.forEach(function(ingrediente) {
  var li = document.createElement("li");
  li.textContent = ingrediente;
  ul.appendChild(li); 
});

var divIngredientes = document.getElementById("ingredientes");
divIngredientes.appendChild(ul);

// função para trocar a imagem de fundo

bkImg.innerHTML ="<img src='https://www.saboresajinomoto.com.br/uploads/images/recipes/Lasanha_tradicional.webp'>"


} 
function card3(){
    hidder()
    homeCd.style.display = 'block'
    actbtn3.style.display='block'
    title.innerHTML =`${'<h1>strogonof</h1>'}`
    qtt.innerHTML =`${'<h3>Rende ate 10 porções</h3>'}`

    // ingredientes
    var ul = document.createElement("ul");
var ingredientes = [
"3 peitos de frango cortados em cubos", 
"sal a gosto",
"1 cebola picada",
"1 colher de manteiga",
"1/3 copo de mostarda",
"1 copo de creme de leite",
"1 dente de alho picado",
"pimenta-do-reino a gosto",
"2 colheres (sopa) de maionese",
"1/2 copo de ketchup",
"1 copo de cogumelos",
"batata palha a gosto",
];

ingredientes.forEach(function(ingrediente) {
  var li = document.createElement("li");
  li.textContent = ingrediente;
  ul.appendChild(li); 
});

var divIngredientes = document.getElementById("ingredientes");
divIngredientes.appendChild(ul);

// função para trocar a imagem de fundo

bkImg.innerHTML ="<img src='https://www.mariareceita.com.br/wp-content/uploads/2022/03/receita-strogonoff-carne-simples-facil.jpg'>"


} 
function card4(){
    hidder()
    homeCd.style.display = 'block'
    actbtn4.style.display='block'
    title.innerHTML =`${'<h1>feijoada</h1>'}`
    qtt.innerHTML =`${'<h3>Rende ate 10 porções</h3>'}`

    // ingredientes
    var ul = document.createElement("ul");
var ingredientes = [
"200 gramas de carne-seca", 
"200 gramas de lombo de porco salgado",
"600 gramas de feijão preto",
"2 folhas de louro secas",
"250 gramas de costelas suínas",
"200 gramas de linguiça de paio",
"200 gramas de linguiça calabresa de porco",
"150 gramas de bacon defumado",
"1 cebola picada",
"4 dentes de alho picados",
"2 sachês de TEMPERO IDEAL KNORR MEU FEIJÃO",
"1 laranja",
];

ingredientes.forEach(function(ingrediente) {
  var li = document.createElement("li");
  li.textContent = ingrediente;
  ul.appendChild(li); 
});

var divIngredientes = document.getElementById("ingredientes");
divIngredientes.appendChild(ul);

// função para trocar a imagem de fundo

bkImg.innerHTML ="<img src='https://static.itdg.com.br/images/1200-630/4183f4a52eadb0d86eed283e54e0020c/355811-original.jpg'>"

} 
