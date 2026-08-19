let tamanhoFonte = 100;

const btnAumentar = document.getElementById('btn-aumentar');
const btnDiminuir = document.getElementById('btn-diminuir');
const btnContraste = document.getElementById('btn-contraste');

// Ajuste dinâmico do tamanho do texto
btnAumentar.addEventListener('click', () => {
if (tamanhoFonte < 150) {
tamanhoFonte += 10;
document.body.style.fontSize = `${tamanhoFonte}%`;
}
});

btnDiminuir.addEventListener('click', () => {
if (tamanhoFonte > 80) {
tamanhoFonte -= 10;
document.body.style.fontSize = `${tamanhoFonte}%`;
}
});

// Alternar Modo Alto Contraste
btnContraste.addEventListener('click', () => {
document.body.classList.toggle('alto-contraste');
});