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
  let timeout;

  function showHeader() {
    const header = document.querySelector('.header');
    header.classList.remove('hidden');

    // Réinitialiser le timer
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      header.classList.add('hidden');
    }, 1500); // 2 secondes
  }

  // Montrer le header au démarrage
  window.addEventListener('load', showHeader);
  window.addEventListener('scroll', showHeader);
  window.addEventListener('mousemove', showHeader);