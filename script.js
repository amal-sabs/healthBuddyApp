document.addEventListener('DOMContentLoaded', () => {
  let overlay = document.getElementById('image-overlay');
  let overlayImage = document.getElementById('overlay-img');

  if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    document.body.appendChild(overlay);
  } else if (overlay.parentElement !== document.body) {
    document.body.appendChild(overlay);
  }

  if (!overlayImage) {
    overlayImage = document.createElement('img');
    overlay.appendChild(overlayImage);
  }

  const openOverlay = (imageSrc, imageAlt, useWhiteBackground = false) => {
    overlayImage.src = imageSrc;
    overlayImage.alt = imageAlt || 'Zoomed image';
    overlayImage.classList.toggle('overlay-image-white-bg', useWhiteBackground);
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeOverlay = () => {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  document.addEventListener('click', (event) => {
    const clickedImage = event.target.closest('img.zoomable');

    if (clickedImage) {
      const useWhiteBackground = clickedImage.classList.contains('zoomable-card');
      openOverlay(clickedImage.currentSrc || clickedImage.src, clickedImage.alt, useWhiteBackground);
      return;
    }

    if (event.target === overlay) {
      closeOverlay();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && overlay.classList.contains('active')) {
      closeOverlay();
    }
  });

  const faders = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  });
  faders.forEach((element) => observer.observe(element));

  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => nav.classList.toggle('active'));
    document.querySelectorAll('#nav a').forEach((link) => {
      link.addEventListener('click', () => nav.classList.remove('active'));
    });
  }

  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav a');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 150;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach((anchor) => {
      anchor.classList.remove('active');
      if (anchor.getAttribute('href') === `#${current}`) {
        anchor.classList.add('active');
      }
    });
  });
});
