document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinksContainer = document.querySelector('.nav-links'); // The container with hidden md:block

    if (hamburger && navLinksContainer) {
        hamburger.addEventListener('click', () => {
            // Wuxuu beddelayaa "hidden" class-ka. Tani waxay u ogolaanaysaa in menu-ga
            // uu soo muuqdo mobile-ka. Wuxuu si fiican u shaqaynayaa haddii navbar-ka HTML-ka lagu qoro "hidden md:block".
            navLinksContainer.classList.toggle('hidden');
        });
    }

    // Waxaad halkan ku dari kartaa JS-ka loogu talagalay form validation, sliders, ama is-dhexgalka kale.
    
    // Tusaale: Xidhitaanka foomamka is-diiwaangelinta haddii meel ka baxsan la riixo. (singup.html)
    const singUpForm = document.getElementById('singup-form');
    if (singUpForm) {
        // Waxaad ku dari kartaa logic validation halkan
    }
});