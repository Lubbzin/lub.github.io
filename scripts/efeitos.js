// Efeito de digitação
function typeWriter(elemento, texto, velocidade = 50) {
    let i = 0;
    elemento.innerHTML = '';
    function digitar() {
        if (i < texto.length) {
            elemento.innerHTML += texto.charAt(i);
            i++;
            setTimeout(digitar, velocidade);
        }
    }
    digitar();
}

// Confetti personalizado
function lancarConfetti() {
    const confettiSettings = { 
        target: 'confetti-canvas',
        max: 200,
        size: 1.5,
        animate: true,
        colors: [[255, 42, 109], [209, 0, 71], [255, 255, 255]],
        props: ['circle', 'square', 'triangle', 'line'],
        clock: 30
    };
    
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
    
    // Parar após 5 segundos
    setTimeout(() => {
        confetti.clear();
    }, 5000);
}

// Efeito de sangue pulsante
function sanguePulsante() {
    const sangue = document.querySelector('.sangue-efeito');
    setInterval(() => {
        sangue.style.opacity = Math.random() * 0.1 + 0.05;
    }, 2000);
}