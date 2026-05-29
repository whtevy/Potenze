include.createIcons();

const header = document.querySelector('.header');

window.addEventListener('scroll', () => {

    if(window.scrollY > 80){

        header.classList.add('scroll-header');

    }else{

        header.classList.remove('scroll-header');

    }

});

function salvarOrigem(){

    sessionStorage.setItem(
        "paginaOrigem",
        window.location.href
    );

}