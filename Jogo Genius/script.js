let order = [];
let clickOrder = [];
let score= 0;

// 0 = verde , 1 = vermelhor , 2 = amarelo , 3 = azul 

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//cria ordem aleatoria de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random()*4);
    order[order.length] = colorOrder;
    clickOrder = [];

    for (let i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//Acende a procima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() =>{
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected')
    });
}

//checa se os botoes clicados sao os memso da origem gerados no jogo
let checkOrder = () => {
    for(let i in clickOrder){
        if(clickOrder[i] != order[i]){
            gameOver();
            break;
        }
    }
    if(clickOrder.length == order.length){
        alert(`Pontuação: ${score}\n Você acertou: Iniciando próximo nível! `)
        nextLevel();
    }
}

//função para click do usuario

let click = (color) =>{
    clickOrder[clickOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() =>{
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250) ;
}

//função que retorna a cor

let createColorElement = (color) =>{
    if(color == 0 ){
        return green;
    } else if (color == 1){
        return red;
    } else if ( color == 2){
        return yellow;
    }else if (color == 3){
        return blue;
    }
}

//função para proximo level

let nextLevel = () => {
    score++;
    shuffleOrder();
}

//função para game over

let gameOver = () => {
    alert(` Pontuação: ${score}\n Você perdeu o jogo \n clique em ok para iniciar um novo jogo`);
    order = [];
    clickOrder = [];

    playGame();
}

let playGame = () => {
    alert(`Bem vindo ao Genesis" Iniciando o jogo`);
    score = 0;

    nextLevel();
}


green.onclick = () => click(0);
red.onclick = () => click(1)
yellow.onclick = () => click(2)
blue.onclick = () => click(3)

playGame();