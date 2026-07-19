document.addEventListener('DOMContentLoaded', () => {
    
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav');
 
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            const aberto = navMenu.classList.toggle('aberto');
            menuToggle.classList.toggle('ativo', aberto);
            menuToggle.setAttribute('aria-expanded', aberto);
        });
 
        // Fecha o menu automaticamente ao clicar em um link
        navMenu.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('aberto');
                menuToggle.classList.remove('ativo');
                menuToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // ===== SEÇÃO DE IMPACTO =====
    // Atualize apenas este número conforme novas mudas forem entregues.
    const ARVORES_PLANTADAS = 150;

    // Valores por árvore (conforme definido no projeto)
    const CARBONO_POR_ARVORE = 22;      // kg de carbono/ano por árvore
    const TEMPERATURA_POR_ARVORE = 8;   // °C de impacto na temperatura por árvore

    const carbonoTotal = ARVORES_PLANTADAS * CARBONO_POR_ARVORE;
    const temperaturaTotal = ARVORES_PLANTADAS * TEMPERATURA_POR_ARVORE * -1;

    const elArvores = document.getElementById('valor-arvores');
    const elCarbono = document.getElementById('valor-carbono');
    const elTemperatura = document.getElementById('valor-temperatura');

    // Efeito de contagem crescente (do 0 até o valor final)
    function animarContagem(elemento, valorFinal, sufixo = '') {
        if (!elemento) return;
        let atual = 0;
        const duracao = 1200; // ms
        const passos = 40;
        const incremento = valorFinal / passos;
        const intervaloTempo = duracao / passos;

        const intervalo = setInterval(() => {
            atual += incremento;
            if (atual >= valorFinal) {
                atual = valorFinal;
                clearInterval(intervalo);
            }
            elemento.textContent = Math.round(atual) + sufixo;
        }, intervaloTempo);
    }

    animarContagem(elArvores, ARVORES_PLANTADAS);
    animarContagem(elCarbono, carbonoTotal, ' kg');
    animarContagem(elTemperatura, temperaturaTotal, '°C');

});