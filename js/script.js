let botao = document.querySelector('.bloco-de-poema');
let poema = document.querySelector('.poema');

function showButton(){
    if(botao.classList.contains('open')){
    botao.classList.remove('open')
    }   else {
        botao.classList.add('open')
    }

    if(poema.classList.contains('show')){
        poema.classList.remove('show')
    }   else {
        poema.classList.add('show')
    }
}