const h1Contador = document.getElementById('valorContador');
const btnIncrementar = document.getElementById('btnIncrementar');
const btnResetar = document.getElementById('btnResetar');

let contagem = 0;

function adicionar() {
    contagem = contagem + 1; 

    h1Contador.textContent = contagem;
}

function zerarContagem() {
    contagem = 0;

    h1Contador.textContent = contagem;
}

btnIncrementar.addEventListener('click', adicionar);
btnResetar.addEventListener('click', zerarContagem);