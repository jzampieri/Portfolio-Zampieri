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

window.sr = ScrollReveal({ reset: true});

sr.reveal('.container', {
        rotate: {x: 0, y: 90, z: 0},        
        duration: 3000
});