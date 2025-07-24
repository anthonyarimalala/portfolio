window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if(window.scrollY > 50) { // si on a scrollé plus de 50px
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  let lastScrollTop = 0;
  const header = document.querySelector(".header");

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // Si l'écran est petit (mobile/tablette)
    if (window.innerWidth <= 768) {
      if (currentScroll > lastScrollTop && currentScroll > 50) {
        // Scroll vers le bas → cacher
        header.classList.add("hide-on-scroll");
      } else {
        // Scroll vers le haut → montrer
        header.classList.remove("hide-on-scroll");
      }
    } else {
      // Sur grand écran, ne jamais cacher le header
      header.classList.remove("hide-on-scroll");
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // éviter valeurs négatives
  });