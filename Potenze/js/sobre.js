include.createIcons();

const header =
document.querySelector('.header');

window.addEventListener('scroll', () => {

    if(window.scrollY > 80){

        header.classList.add('scroll-header');

    }else{

        header.classList.remove('scroll-header');

    }

});


const reveals =
document.querySelectorAll(
'.about-text, .about-image, .number-card, .history-left, .history-right, .gallery-item, .benefit-card, .banner-content'
);

function reveal(){

    const trigger =
    window.innerHeight * 0.85;

    reveals.forEach((item, index) => {

        const top =
        item.getBoundingClientRect().top;

        if(top < trigger){

            setTimeout(() => {

                item.classList.add('active');

            }, index * 100);

        }

    });

}

window.addEventListener(
'scroll',
reveal
);

reveal();