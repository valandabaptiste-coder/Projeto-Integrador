/**
 * Altera o tamanho da fonte global da página.
 * @param {number} delta - Quantidade em píxeis para somar ou subtrair.
 */
function alterarFonte(delta) {
    const body = document.body;
    const currentSize = parseFloat(window.getComputedStyle(body).fontSize);
    const newSize = currentSize + delta;
    
    // Limite mínimo de 12px e máximo de 28px para preservação de layout
    if (newSize >= 12 && newSize <= 28) {
        body.style.fontSize = `${newSize}px`;
    }
}

/**
 * Alterna a classe CSS de Alto Contraste no elemento body.
 */
function alternarContraste() {
    document.body.classList.toggle('alto-contraste');
}

/**
 * Utiliza a API SpeechSynthesis para ler o texto principal da página.
 */
function lerTexto() {
    // Interrompe qualquer leitura anterior ativa
    window.speechSynthesis.cancel();

    const conteudo = document.getElementById('conteudo-principal').innerText;
    const utterance = new SpeechSynthesisUtterance(conteudo);

    utterance.lang = 'pt-BR';
    utterance.rate = 1.0; // Velocidade da fala
    utterance.pitch = 1.0; // Tom da voz

    window.speechSynthesis.speak(utterance);
}

/**
 * Cancela a leitura de voz em andamento.
 */
function pararLeitura() {
    window.speechSynthesis.cancel();
}