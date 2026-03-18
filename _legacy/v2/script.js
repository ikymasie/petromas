/* =============================================================
   PETROMAS — Website JavaScript
   Features: Preloader, Navbar, Mobile Menu, Particles, AOS,
             Counter Animation, Google Maps, Form Validation,
             Back-to-top, Ticker, Smooth Scroll
   ============================================================= */

'use strict';

/* ── 1. PRELOADER ─────────────────────────────────────────── */
(function initPreloader() {
  const preloader = document.getElementById('preloader');
  if (!preloader) return;

  window.addEventListener('load', () => {
    setTimeout(() => {
      preloader.classList.add('hidden');
      document.body.style.overflow = '';
    }, 2000);
  });

  document.body.style.overflow = 'hidden';
})();


/* ── 2. NAVBAR: Scroll + Mobile Menu ─────────────────────── */
(function initNavbar() {
  const navbar       = document.getElementById('navbar');
  const hamburger    = document.getElementById('hamburger');
  const mobileMenu   = document.getElementById('mobile-menu');
  const navLinks     = document.querySelectorAll('.nav-link');
  const mobileLinks  = document.querySelectorAll('.mobile-link');
  const sections     = document.querySelectorAll('section[id]');

  if (!navbar) return;

  // Scroll: toggle scrolled class + active link
  function onScroll() {
    const scrolled = window.scrollY > 60;
    navbar.classList.toggle('scrolled', scrolled);

    // Back to top
    const btt = document.getElementById('back-to-top');
    if (btt) btt.classList.toggle('visible', window.scrollY > 400);

    // Active nav link
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 120) {
        current = sec.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Create overlay div for mobile
  const overlay = document.createElement('div');
  overlay.className = 'mobile-overlay';
  document.body.appendChild(overlay);

  function closeMobile() {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    overlay.classList.remove('show');
    document.body.style.overflow = '';
  }

  function openMobile() {
    mobileMenu.classList.add('open');
    hamburger.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    overlay.classList.add('show');
    document.body.style.overflow = 'hidden';
  }

  hamburger.addEventListener('click', () => {
    mobileMenu.classList.contains('open') ? closeMobile() : openMobile();
  });
  overlay.addEventListener('click', closeMobile);
  mobileLinks.forEach(l => l.addEventListener('click', closeMobile));
})();


/* ── 3. SMOOTH SCROLL (fallback for older browsers) ────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});


/* ── 4. AOS — Custom Intersection Observer ───────────────── */
(function initAOS() {
  const elements = document.querySelectorAll('[data-aos]');
  if (!elements.length) return;

  const delays = {};
  elements.forEach(el => {
    const delay = parseInt(el.getAttribute('data-aos-delay') || 0, 10);
    delays.set ? delays.set(el, delay) : (delays[el] = delay);
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el    = entry.target;
        const delay = parseInt(el.getAttribute('data-aos-delay') || 0, 10);
        setTimeout(() => el.classList.add('aos-animate'), delay);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(el => observer.observe(el));
})();


/* ── 5. COUNTER ANIMATION ────────────────────────────────── */
(function initCounters() {
  const statNumbers = document.querySelectorAll('.stat-number[data-count]');
  if (!statNumbers.length) return;

  function easeOutQuart(t) { return 1 - Math.pow(1 - t, 4); }

  function animateCounter(el) {
    const target   = parseInt(el.getAttribute('data-count'), 10);
    const duration = 2000;
    const start    = performance.now();

    function update(now) {
      const elapsed  = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased    = easeOutQuart(progress);
      const current  = Math.round(eased * target);

      el.textContent = current.toLocaleString();
      if (progress < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(el => observer.observe(el));
})();


/* ── 6. HERO PARTICLES ───────────────────────────────────── */
(function initParticles() {
  const container = document.getElementById('particles');
  if (!container) return;

  const count = window.innerWidth < 700 ? 12 : 22;

  function createParticle() {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 6 + 3;
    p.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${Math.random() * 100}%;
      animation-duration: ${8 + Math.random() * 12}s;
      animation-delay: ${Math.random() * 8}s;
      opacity: ${0.2 + Math.random() * 0.5};
    `;
    container.appendChild(p);
  }

  for (let i = 0; i < count; i++) createParticle();
})();


/* ── 7. BACK TO TOP ──────────────────────────────────────── */
(function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();


/* ── 8. CONTACT FORM VALIDATION ──────────────────────────── */
(function initContactForm() {
  const form       = document.getElementById('contact-form');
  const submitBtn  = document.getElementById('submit-btn');
  const successDiv = document.getElementById('form-success');

  if (!form) return;

  function validateEmail(s) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
  }

  function showError(fieldId, msg) {
    const input = document.getElementById(fieldId);
    const error = document.getElementById(`${fieldId}-error`);
    if (input) input.classList.add('error');
    if (error) error.textContent = msg;
  }

  function clearError(fieldId) {
    const input = document.getElementById(fieldId);
    const error = document.getElementById(`${fieldId}-error`);
    if (input) input.classList.remove('error');
    if (error) error.textContent = '';
  }

  function validate() {
    let valid = true;
    const name    = document.getElementById('name');
    const email   = document.getElementById('email');
    const message = document.getElementById('message');

    clearError('name'); clearError('email'); clearError('message');

    if (!name || name.value.trim().length < 2) {
      showError('name', 'Please enter your full name.');
      valid = false;
    }
    if (!email || !validateEmail(email.value.trim())) {
      showError('email', 'Please enter a valid email address.');
      valid = false;
    }
    if (!message || message.value.trim().length < 15) {
      showError('message', 'Message must be at least 15 characters.');
      valid = false;
    }
    return valid;
  }

  // Real-time validation
  ['name', 'email', 'message'].forEach(fieldId => {
    const el = document.getElementById(fieldId);
    if (!el) return;
    el.addEventListener('blur', validate);
    el.addEventListener('input', () => clearError(fieldId));
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!validate()) return;

    submitBtn.classList.add('loading');
    submitBtn.disabled = true;

    // Simulate an async form submission (replace with actual fetch/API call)
    setTimeout(() => {
      submitBtn.classList.remove('loading');
      submitBtn.disabled = false;
      form.reset();
      successDiv.textContent = '✓ Thank you! Your enquiry has been received. Our team will be in touch within 2 business hours.';
      successDiv.classList.add('visible');
      setTimeout(() => successDiv.classList.remove('visible'), 8000);
    }, 1800);
  });
})();


/* ── 9. GOOGLE MAPS ──────────────────────────────────────── */
/* Called automatically by the Maps JS API after loading */
function initMap() {

  // Custom dark-navy style for the main operations map
  const navyMapStyle = [
    { elementType: 'geometry', stylers: [{ color: '#1e1c55' }] },
    { elementType: 'labels.text.fill', stylers: [{ color: '#a0a8c0' }] },
    { elementType: 'labels.text.stroke', stylers: [{ color: '#1e1c55' }] },
    { featureType: 'administrative', elementType: 'geometry.stroke', stylers: [{ color: '#2D2A77' }] },
    { featureType: 'administrative.land_parcel', elementType: 'labels.text.fill', stylers: [{ color: '#64748b' }] },
    { featureType: 'road', elementType: 'geometry', stylers: [{ color: '#2d4a6e' }] },
    { featureType: 'road.arterial', elementType: 'labels.text.fill', stylers: [{ color: '#90aac0' }] },
    { featureType: 'road.highway', elementType: 'geometry', stylers: [{ color: '#2D2A77' }] },
    { featureType: 'road.highway', elementType: 'labels.text.fill', stylers: [{ color: '#b4c4d8' }] },
    { featureType: 'transit', elementType: 'geometry', stylers: [{ color: '#2f3948' }] },
    { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#12105a' }] },
    { featureType: 'water', elementType: 'labels.text.fill', stylers: [{ color: '#5090c0' }] },
    { featureType: 'poi', stylers: [{ visibility: 'off' }] },
    { featureType: 'landscape', elementType: 'geometry', stylers: [{ color: '#23215e' }] }
  ];

  // Pulsing lime marker SVG
  function limeMarkerSvg(size = 14) {
    return {
      path: google.maps.SymbolPath.CIRCLE,
      scale: size,
      fillColor: '#82C341',
      fillOpacity: 0.95,
      strokeColor: '#ffffff',
      strokeWeight: 2,
    };
  }
  function blueMarkerSvg(size = 10) {
    return {
      path: google.maps.SymbolPath.CIRCLE,
      scale: size,
      fillColor: '#60a5fa',
      fillOpacity: 0.9,
      strokeColor: '#ffffff',
      strokeWeight: 1.5,
    };
  }
  function goldMarkerSvg(size = 8) {
    return {
      path: google.maps.SymbolPath.CIRCLE,
      scale: size,
      fillColor: '#fbbf24',
      fillOpacity: 0.85,
      strokeColor: '#ffffff',
      strokeWeight: 1.5,
    };
  }

  // ── MAIN OPERATIONS MAP ──
  const mainMapEl = document.getElementById('petromas-map');
  if (mainMapEl) {
    const mainMap = new google.maps.Map(mainMapEl, {
      center: { lat: -28.4793, lng: 26.7861 }, // Centre of South Africa
      zoom: 6,
      styles: navyMapStyle,
      disableDefaultUI: true,
      zoomControl: true,
      gestureHandling: 'cooperative',
      backgroundColor: '#1e1c55',
    });

    const infoWindow = new google.maps.InfoWindow();

    function addMarker(map, lat, lng, icon, title, description) {
      const marker = new google.maps.Marker({
        position: { lat, lng },
        map,
        icon,
        title,
        animation: google.maps.Animation.DROP,
      });

      marker.addListener('click', () => {
        infoWindow.setContent(`
          <div class="info-window-content">
            <h4>${title}</h4>
            <p>${description}</p>
          </div>
        `);
        infoWindow.open(map, marker);
      });

      // Animate pulsing ring
      const pulse = new google.maps.Marker({
        position: { lat, lng },
        map,
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          scale: icon.scale + 8,
          fillColor: icon.fillColor,
          fillOpacity: 0.15,
          strokeColor: icon.fillColor,
          strokeWeight: 1,
        },
        clickable: false,
      });

      return marker;
    }

    // Headquarters
    addMarker(mainMap, -26.1052, 28.0560, limeMarkerSvg(14),
      'Petromas HQ – Johannesburg', 'Head Office & National Command Centre');

    // Regional Depots
    const depots = [
      { lat: -33.9249, lng: 18.4241, name: 'Cape Town Depot', desc: 'Western Cape Regional Depot' },
      { lat: -29.8587, lng: 31.0218, name: 'Durban Depot', desc: 'KwaZulu-Natal Regional Depot' },
      { lat: -25.7479, lng: 28.2293, name: 'Pretoria Depot', desc: 'Gauteng Secondary Depot' },
      { lat: -25.6742, lng: 27.2317, name: 'Rustenburg Depot', desc: 'North West Mining Hub Depot' },
      { lat: -23.9045, lng: 29.4689, name: 'Polokwane Depot', desc: 'Limpopo Regional Depot' },
      { lat: -26.3054, lng: 27.8400, name: 'Carletonville Depot', desc: 'Mining Belt Operations Base' },
    ];
    depots.forEach(d => addMarker(mainMap, d.lat, d.lng, blueMarkerSvg(10), d.name, d.desc));

    // Partner Sites
    const partners = [
      { lat: -32.2968, lng: 26.4194, name: 'Queenstown Partner', desc: 'Eastern Cape Partner Site' },
      { lat: -28.7282, lng: 24.7499, name: 'Kimberley Partner', desc: 'Northern Cape Partner Site' },
      { lat: -27.4698, lng: 29.9810, name: 'Newcastle Partner', desc: 'KwaZulu-Natal Partner Site' },
      { lat: -26.7145, lng: 27.0965, name: 'Klerksdorp Partner', desc: 'North West Partner Site' },
      { lat: -29.6006, lng: 17.8892, name: 'Springbok Partner', desc: 'Namaqualand Partner Site' },
      { lat: -30.5595, lng: 22.9375, name: 'Loxton Partner', desc: 'Karoo Partner Site' },
    ];
    partners.forEach(p => addMarker(mainMap, p.lat, p.lng, goldMarkerSvg(8), p.name, p.desc));

    // Add subtle coverage circle around HQ
    new google.maps.Circle({
      center: { lat: -26.1052, lng: 28.0560 },
      radius: 250000, // 250 km radius
      map: mainMap,
      fillColor: '#82C341',
      fillOpacity: 0.04,
      strokeColor: '#82C341',
      strokeOpacity: 0.15,
      strokeWeight: 1,
    });
  }

  // ── CONTACT MAP (HQ only) ──
  const contactMapEl = document.getElementById('contact-map');
  if (contactMapEl) {
    const contactMap = new google.maps.Map(contactMapEl, {
      center: { lat: -26.1052, lng: 28.0560 },
      zoom: 13,
      styles: navyMapStyle,
      disableDefaultUI: true,
      gestureHandling: 'none',
      backgroundColor: '#1e1c55',
    });

    new google.maps.Marker({
      position: { lat: -26.1052, lng: 28.0560 },
      map: contactMap,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 12,
        fillColor: '#82C341',
        fillOpacity: 1,
        strokeColor: '#ffffff',
        strokeWeight: 3,
      },
      title: 'Petromas Head Office',
    });
  }
}

// Fallback if Maps API errors
window.gm_authFailure = function () {
  console.warn('Google Maps authentication failed. Please check your API key.');
  document.querySelectorAll('#petromas-map, #contact-map').forEach(el => {
    el.style.background = '#1e1c55';
    el.style.display = 'flex';
    el.style.alignItems = 'center';
    el.style.justifyContent = 'center';
    el.innerHTML = '<p style="color:rgba(255,255,255,.5);font-family:Montserrat,sans-serif;font-size:.85rem;padding:20px;text-align:center;">Map failed to load.<br/>Please check Maps API key.</p>';
  });
};


/* ── 10. NAVBAR HIDE ON FAST SCROLL DOWN ─────────────────── */
(function initNavbarAutoHide() {
  let lastY = 0;
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    const currentY = window.scrollY;
    if (currentY > 150) {
      navbar.style.transform = currentY > lastY ? 'translateY(-100%)' : 'translateY(0)';
    } else {
      navbar.style.transform = 'translateY(0)';
    }
    navbar.style.transition = 'transform 0.35s cubic-bezier(.4,0,.2,1), background 0.3s, padding 0.3s, box-shadow 0.3s';
    lastY = currentY;
  }, { passive: true });
})();


/* ── 11. SERVICE CARD KEYBOARD NAVIGATION ───────────────── */
document.querySelectorAll('.service-card[tabindex="0"]').forEach(card => {
  card.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      card.querySelector('h3')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });
});
