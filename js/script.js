const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(()=> {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() =>{
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    //Pega o estilo que foi computado na imagem do Mario e passa o elemento que quer pegar
    // que no caso é a imagem do Mario. Assim, você pode acessar qualquer propriedade CSS
    // que esteja aplicado no Mario. O + tenta converter para NUMERO
    //console.log(marioPosition);

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){

        pipe.style.animation = 'none'; //Para a animação do cano
        pipe.style.left = `${pipePosition}px`; //Passa a posição do deslocamento esquerdo

        mario.style.animation = 'none'; //Para a animação do mario
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '75px';
        mario.style.left = '50px';
        
        clearInterval(loop);

    }


},10);

document.addEventListener('keydown', jump);

