// The Cosmic Mirror — Navigation & Form Handlers

document.addEventListener('DOMContentLoaded', function () {
  // ===== HAMBURGER MENU TOGGLE =====
  const menuBtn = document.getElementById('menu-toggle');
  const nav = document.querySelector('nav');

  // Create mobile menu overlay if it doesn't exist
  let menu = document.getElementById('mobile-menu-overlay');
  if (!menu && menuBtn) {
    menu = document.createElement('div');
    menu.id = 'mobile-menu-overlay';
    menu.className = 'fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-lg flex flex-col items-center justify-center gap-8 opacity-0 pointer-events-none transition-all duration-300';
    menu.setAttribute('role', 'navigation');
    menu.setAttribute('aria-label', 'Mobile menu');
    menu.innerHTML = `
      <a href="index.html" class="text-xl text-slate-300 hover:text-cosmic-gold transition-colors uppercase tracking-widest">Home</a>
      <a href="about.html" class="text-xl text-slate-300 hover:text-cosmic-gold transition-colors uppercase tracking-widest">My Story</a>
      <a href="services.html" class="text-xl text-slate-300 hover:text-cosmic-gold transition-colors uppercase tracking-widest">Services</a>
      <a href="resources.html" class="text-xl text-slate-300 hover:text-cosmic-gold transition-colors uppercase tracking-widest">Resources</a>
      <a href="https://calendly.com/papabrosio360/cosmic-mirror-evaluation" target="_blank" rel="noopener noreferrer" class="px-8 py-3 bg-cosmic-gold text-slate-950 font-medium rounded-full">Book a Reading</a>
    `;
    document.body.appendChild(menu);
  }

  if (menuBtn && menu) {
    menuBtn.addEventListener('click', function () {
      const isOpen = menu.classList.contains('opacity-100');
      if (isOpen) {
        menu.classList.remove('opacity-100', 'pointer-events-auto');
        menu.classList.add('opacity-0', 'pointer-events-none');
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.classList.remove('active');
      } else {
        menu.classList.remove('opacity-0', 'pointer-events-none');
        menu.classList.add('opacity-100', 'pointer-events-auto');
        menuBtn.setAttribute('aria-expanded', 'true');
        menuBtn.classList.add('active');
      }
    });

    // Close menu when a link is clicked
    const menuLinks = menu.querySelectorAll('a');
    menuLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.remove('opacity-100', 'pointer-events-auto');
        menu.classList.add('opacity-0', 'pointer-events-none');
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.classList.remove('active');
      });
    });
  }

  // ===== LEAD MAGNET FORM HANDLER =====
  const leadForm = document.getElementById('lead-magnet-form');
  if (leadForm) {
    leadForm.addEventListener('submit', function (e) {
      e.preventDefault();
      // In production, integrate with Formspree, Buttondown, or similar
      // For now: show a non-blocking confirmation
      const button = this.querySelector('button[type="submit"]');
      const originalText = button.textContent;
      button.textContent = 'Thanks! Redirecting…';
      button.disabled = true;

      // Simulate brief processing then redirect to Calendly for continuity
      setTimeout(function () {
        window.location.href = 'https://calendly.com/papabrosio360/cosmic-mirror-evaluation';
      }, 1200);
    });
  }
});