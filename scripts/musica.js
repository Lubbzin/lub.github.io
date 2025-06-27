const musica = document.getElementById('musica-fundo');
const controleSom = document.getElementById('controle-som');

// Configuração inicial
musica.volume = 0.4;

// Controle de som
controleSom.addEventListener('click', () => {
    if (musica.paused) {
        musica.play()
            .then(() => {
                controleSom.classList.add('som-ativo');
                controleSom.innerHTML = '🔊';
            })
            .catch(e => console.log("Erro ao reproduzir áudio:", e));
    } else {
        musica.pause();
        controleSom.classList.remove('som-ativo');
        controleSom.innerHTML = '🔇';
    }
});

// Iniciar música após interação do usuário
document.body.addEventListener('click', function iniciarMusica() {
    if (musica.paused) {
        musica.play().catch(e => console.log(e));
    }
    document.body.removeEventListener('click', iniciarMusica);
}, { once: true });