// puxando a função botao

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event){
        if (event.type === 'touchstart') event.preventDefault();
        const nav = document.getElementById('nav');
        nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

// Animações no scroll da pagina

const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate' ;

function animeScroll() {
        const windowTop = window.pageYOffset + ((window.innerHeight * 3 ) / 4);
        target.forEach(function(element){
                if((windowTop) > element.offsetTop) {
                        element.classList.add(animationClass);
                } else {
                        element.classList.remove(animationClass);
                }             
        })
}

animeScroll();

if(target.length) {
        window.addEventListener('scroll', deobunce(function(){
                animeScroll();
        }, 100 ));
}
