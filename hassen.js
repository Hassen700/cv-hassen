    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    reveals.forEach(el => observer.observe(el));

    const btn = document.querySelector('.navToggle');
    const mnav = document.getElementById('mnav');

    function closeMenu(){
      document.body.classList.remove('mnav-open');
      btn.setAttribute('aria-expanded', 'false');
    }

    btn.addEventListener('click', () => {
      const isOpen = document.body.classList.toggle('mnav-open');
      btn.setAttribute('aria-expanded', String(isOpen));
    });

    mnav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

    window.addEventListener('keydown', (e) => {
      if(e.key === 'Escape') closeMenu();
    });