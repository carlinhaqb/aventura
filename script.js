const avanca = document.querySelectorAll('btn.proximo');
const reniciarBtn = document.getElementById('btn-reiniciar');

avanca.forEach(button => {
    button.addEventlistener('click', function () {
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');
        atual.classList.remove('ativo');
        const proximoElemento = document.getElementById(proximoPasso);

        if (proximoElemento) {
            proximoElemento.classList.add('ativo');
        } else {
            console.error(`Elemento com ID "${proximoPasso}" nao encontrado`)
        }
    })
});


// reinicia o jogo ao clicar no botão de reinicio
if (reiniciarBtn) {
    reiniciarBtn.addEventListener('click', () => {
        const atual = document.querySelector('.ativo');
        atual.classList.remove('ativo');
        document.getElementByid('passo-0').classList.add('ativo');
    });
}
