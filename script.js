/* ============================================
   HINDU WEDDING INVITATION - JAVASCRIPT
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  initPetals();
  initCountdown();
  initMusicToggle();
  initScrollAnimations();
});

/* ---- Floating Flower Petals ---- */
function initPetals() {
  const container = document.getElementById('petalsContainer');
  const petalSymbols = ['🌸', '🌺', '🪷', '✿', '❀', '🌼'];
  const maxPetals = 15;

  function createPetal() {
    const petal = document.createElement('span');
    petal.classList.add('petal');
    petal.textContent = petalSymbols[Math.floor(Math.random() * petalSymbols.length)];
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.fontSize = (0.8 + Math.random() * 1.2) + 'rem';
    petal.style.animationDuration = (8 + Math.random() * 12) + 's';
    petal.style.animationDelay = Math.random() * 5 + 's';
    petal.style.opacity = 0.3 + Math.random() * 0.4;
    container.appendChild(petal);

    // Remove petal after animation completes
    const duration = parseFloat(petal.style.animationDuration) + parseFloat(petal.style.animationDelay);
    setTimeout(() => {
      petal.remove();
      createPetal(); // Create a new one
    }, duration * 1000);
  }

  for (let i = 0; i < maxPetals; i++) {
    setTimeout(() => createPetal(), i * 600);
  }
}

/* ---- Countdown Timer ---- */
function initCountdown() {
  // ⚠️ UPDATE THIS DATE to the actual wedding date
  const weddingDate = new Date('2026-04-15T09:00:00').getTime();

  const daysEl = document.getElementById('countDays');
  const hoursEl = document.getElementById('countHours');
  const minutesEl = document.getElementById('countMinutes');
  const secondsEl = document.getElementById('countSeconds');

  function updateCountdown() {
    const now = new Date().getTime();
    const diff = weddingDate - now;

    if (diff <= 0) {
      daysEl.textContent = '🎊';
      hoursEl.textContent = '🎉';
      minutesEl.textContent = '💒';
      secondsEl.textContent = '💍';
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

/* ---- Music Toggle (Placeholder) ---- */
function initMusicToggle() {
  const btn = document.getElementById('musicToggle');
  let playing = false;

  // You can add an <audio> element and control it here
  // const audio = new Audio('path-to-wedding-music.mp3');
  // audio.loop = true;

  btn.addEventListener('click', () => {
    playing = !playing;
    btn.classList.toggle('playing', playing);
    btn.textContent = playing ? '🔊' : '🎶';

    // Uncomment when audio is added:
    // if (playing) { audio.play(); } else { audio.pause(); }
  });
}

/* ---- Scroll-triggered Animations ---- */
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe sections that should animate on scroll
  const sections = document.querySelectorAll(
    '.family-section, .couple-section, .event-section, .venue-section, .events-timeline, .closing-section, .countdown-section'
  );

  sections.forEach(section => {
    // Only apply scroll animation if element is below the fold
    const rect = section.getBoundingClientRect();
    if (rect.top > window.innerHeight) {
      section.style.opacity = '0';
      section.style.transform = 'translateY(30px)';
      section.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
      observer.observe(section);
    }
  });
}
