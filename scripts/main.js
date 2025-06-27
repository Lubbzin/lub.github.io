document.addEventListener('DOMContentLoaded', function() {
    // Elementos principais
    const comecarBtn = document.getElementById('comecar-jornada');
    const capaSection = document.getElementById('capa');
    const historiaSection = document.getElementById('nossa-historia');
    const galeriaSection = document.getElementById('galeria');
    const surpresaSection = document.getElementById('surpresa');
    const confettiBtn = document.getElementById('botao-confetti');
    
    // Iniciar efeitos
    sanguePulsante();
    
    // Navegação entre seções
    comecarBtn.addEventListener('click', () => {
        capaSection.classList.add('oculto');
        historiaSection.classList.remove('oculto');
        carregarMomentos();
    });
    
    // Carregar momentos da timeline
    function carregarMomentos() {
        const timeline = document.querySelector('.timeline-sangrenta');
        const momentos = [
            { data: "[Prelúdio]", descricao: "[Lembro que antes eu te achava meio bizarrinha, mas mesmo assim, muito gentil e gente fina! Achava que tu e o Torean namorava, bizarro.]", imagem: "momento1.webp" },
            { data: "[Introdução]", descricao: "[Pensava q sempre que você tentava me oferecer ajuda, falar comigo e os krl, c só tava sendo gentil atoa, não imagianva que você realmente se importassekkkkkkkkkkkkkk. Sou meio trouxa nessas coisas, desculpinha!]", imagem: "momento2.webp" },
            { data: "[Exposição]", descricao: "[Cara, e sendo bem honesto, fico muito feliz de ter conhecido você. Você é basicamente eu, só que com buceta! Acho engraçado o fato de ter sido o Murilo que fez a gente se aproximar, mas agradeço ele a isso!]", imagem: "momento3.webp" },
            { data: "[Interlúdio]", descricao: "[Só não te entendo em algumas coisas, pra ser bem honesto. Não entendo como você acha esse seu corpo perfeitinho, algo feio e gordo. Se eu pudesse, ficava admirando essa obra prima o dia inteiro, enquanto a gente conversa sobre nossas coisinhas bizarras de sempre!]", imagem: "momento4.webp" },
            { data: "[Clímax]", descricao: "[Eu adoro TUDO sobre você! Você me escuta quando eu falo, não me julga, e confia em mim pra contar suas experiências e fatos bizarrinhos ( Golfinho que o diga! ). Honestamente, você é literalmente tudo que eu já desejei. Mesmo sendo meio maluca as vezes, eu gosto disso. Toda vez que entro em call com você, me dá uma sensação de acolhimento q eu nunca senti antes.]", imagem: "momento5.webp" },
            { data: "[Desfecho]", descricao: "[Quero ficar contigo pra sempre. Quero fazer meu melhor pra você, sempre. Como eu te vejo? Como uma garota perfeita. Um sonho, conto de fadas! Também quero apertar essa gata gorda burra e fofinha!]", imagem: "momento6.webp" },
            { data: "[Epílogo]", descricao: "愛して、ファックして、そして私を殴って気絶させて :3", imagem: "momento7.webp" }
        ];
        
        momentos.forEach((momento, index) => {
            const divMomento = document.createElement('div');
            divMomento.className = 'momento';
            divMomento.innerHTML = `
                <div class="data-momento">${momento.data}</div>
                <p class="descricao-momento">${momento.descricao}</p>
                <img src="assets/imagens/${momento.imagem}" alt="Momento ${index + 1}" class="imagem-momento">
            `;
            timeline.appendChild(divMomento);
            
            // Ao clicar na imagem, avançar para galeria
            divMomento.querySelector('.imagem-momento').addEventListener('click', () => {
                historiaSection.classList.add('oculto');
                galeriaSection.classList.remove('oculto');
                carregarGaleria();
            });
        });
    }
    
    // Carregar galeria de fotos
    function carregarGaleria() {
        const galeria = document.querySelector('.galeria-gore');
        
        for (let i = 1; i <= 7; i++) {
            const item = document.createElement('div');
            item.className = 'item-galeria';
            item.innerHTML = `<img src="assets/imagens/momento${i}.webp" alt="Momento ${i}">`;
            galeria.appendChild(item);
            
            // Ao clicar no último item, ir para surpresa
            if (i === 7) {
                item.addEventListener('click', () => {
                    galeriaSection.classList.add('oculto');
                    surpresaSection.classList.remove('oculto');
                    carregarSurpresa();
                });
            }
        }
    }
    
    // Carregar seção de surpresa
    function carregarSurpresa() {
        const mensagemElement = document.querySelector('.mensagem-digitando');
        
        // Exemplo de mensagem (substitua pela sua)
        const mensagem = `Manu,\n\nAcho que nunca me senti tão eu e tão avontade de conversar com alguém igual eu sinto com você. Eu adoro absolutamente tudotudotudotudo sobre você. Mesmo eu sendo meio ruim em expressar meus sentimentos, jaq sempre reprimi eles, eu tento ao máximo mostrar que me importo e que gosto de você. Que eu quero ficar mais do seu lado, essa foi minha intenção com esse sitekkkkkkkk. Mostrar que não me importo só com seu corpo, ou que só falo com você porque acho engraçadinho. Queria mostrar que realmente me importo contigo.\n\nObrigado por ser essa pessoa maravilhosa, meu amor. Só espero para viver milhares de outros momentos sangrentos, bizarros, engraçados e doces ao seu lado!\n\nCom todo meu sangue e amor,\nLubb!`;
        
        typeWriter(mensagemElement, mensagem, 30);
    }
    
    // Botão de confetti
    confettiBtn.addEventListener('click', lancarConfetti);
    
    // Canvas para confetti
    const confettiCanvas = document.createElement('canvas');
    confettiCanvas.id = 'confetti-canvas';
    confettiCanvas.style.position = 'fixed';
    confettiCanvas.style.top = '0';
    confettiCanvas.style.left = '0';
    confettiCanvas.style.width = '100%';
    confettiCanvas.style.height = '100%';
    confettiCanvas.style.pointerEvents = 'none';
    confettiCanvas.style.zIndex = '1000';
    document.body.appendChild(confettiCanvas);
});