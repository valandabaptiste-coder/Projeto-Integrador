let tamanhoFonte = 110; // Porcentagem inicial da fonte

const btnAumentar = document.getElementById('btn-aumentar');
const btnDiminuir = document.getElementById('btn-diminuir');
const btnContraste = document.getElementById('btn-contraste');
const btnVoz = document.getElementById('btn-voz');

// 1. Aumentar Tamanho da Fonte
btnAumentar.addEventListener('click', () => {
  if (tamanhoFonte < 170) {
    tamanhoFonte += 10;
    document.body.style.fontSize = `${tamanhoFonte}%`;
  }
});

// 2. Diminuir Tamanho da Fonte
btnDiminuir.addEventListener('click', () => {
  if (tamanhoFonte > 90) {
    tamanhoFonte -= 10;
    document.body.style.fontSize = `${tamanhoFonte}%`;
  }
});

// 3. Alternar Modo de Alto Contraste
btnContraste.addEventListener('click', () => {
  document.body.classList.toggle('alto-contraste');
});

// 4. Recursos de Síntese de Voz (Web Speech API) para Leitura do Conteúdo
let sinteseVoz = window.speechSynthesis;
let lendo = false;

btnVoz.addEventListener('click', () => {
  if (lendo) {
    sinteseVoz.cancel();
    lendo = false;
    btnVoz.innerText = "Ouvir Texto 🔊";
  } else {
    const elementosTexto = document.querySelectorAll('.leitura-texto, h2, h3');
    let textoCompleto = "";
    
    elementosTexto.forEach(el => {
      textoCompleto += el.innerText + ". ";
    });

    const mensagem = new SpeechSynthesisUtterance(textoCompleto);
    mensagem.lang = 'pt-BR';
    mensagem.rate = 0.95; // Velocidade de fala ajustada para clareza

    mensagem.onend = () => {
      lendo = false;
      btnVoz.innerText = "Ouvir Texto 🔊";
    };

    sinteseVoz.speak(mensagem);
    lendo = true;
    btnVoz.innerText = "Parar Leitura ⏹️";
  }
});