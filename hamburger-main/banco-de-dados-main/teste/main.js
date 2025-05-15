document. addEventListener('DOMcontentloaded' , function() {
    const hamburger = document. getElementById('hamburger');
    const navmenu = document.getElementById('navmenu');

    hamburger.addEventListener('click' , function() {
        hamburger.classList.toggle('active');
        navmenu.classList.toggle('active');
    });
    // Fechar o menu quando um item for clicado 
    const itens = document.querySelectorAll('nav-item');
    navItem.forEach(item => {
        item.addEventListener('click' , function() {
            hamburger.classList.remove('active');
            navmenu.classList.remove('active');
             });
         });     
    });