/*
AF - Avaliação Final - Linguagens de Programação
Tema do Projeto: Iconic Motors
Aluno 1: Gabriel da Silva Puente RA: 252098
Aluno 2: Guilherme Ferreira Agostinho  RA:251982
Professor: Abimael de Oliveira
*/
/* validação do formulário */
const formulario = document.querySelector('#formContato');

if(formulario){

    formulario.addEventListener('submit', function(event){

        event.preventDefault();

        alert("Mensagem enviada com sucesso!");

    });

}

/* efeito ao passar o mouse em cima das fotos da galeria */
const cards = document.querySelectorAll('.card');

cards.forEach(function(card) {
    card.addEventListener('mouseenter', function() {
        card.classList.add('card-destaque-js');
    });

    card.addEventListener('mouseleave', function() {
        card.classList.remove('card-destaque-js');
    });
});


/* Botão voltar ao topo */

const btnTopo = document.querySelector('#btnTopo');

if (btnTopo) {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            btnTopo.classList.add('mostrar');
        } else {
            btnTopo.classList.remove('mostrar');
        }
    });

    btnTopo.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}