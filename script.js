/* ============================================
   HINDU WEDDING INVITATION - JAVASCRIPT
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  initPetals();
  initCountdown();
  initMusicToggle();
  initScrollAnimations();
  initLanguageToggle();
});

/* ============================================
   LANGUAGE TRANSLATIONS
   ============================================ */
const translations = {
  en: {
    langBtn: 'हिन्दी',
    ganeshText: 'Shree Ganeshaya Namah',
    groomFamily: "Groom's Family",
    groomParents: "Shri. Father's Name & Smt. Mother's Name",
    brideFamily: "Bride's Family",
    brideParents: "Shri. Father's Name & Smt. Mother's Name",
    coupleIntro: 'Request the pleasure of your company at the wedding of',
    saveDate: 'Save the Date',
    monthYear: 'February 2026',
    dayName: 'Thursday',
    muhurat: 'Shubh Muhurat',
    countdownLabel: 'Counting Down To The Big Day',
    days: 'Days',
    hours: 'Hours',
    minutes: 'Minutes',
    seconds: 'Seconds',
    venueLabel: 'Wedding Venue',
    venueName: 'Venue Name Here',
    mapBtn: '📍 View on Map',
    ceremoniesTitle: 'Wedding Ceremonies',
    haldi: 'Haldi',
    sangeet: 'Sangeet',
    baraat: 'Baraat',
    pheras: 'Pheras',
    reception: 'Reception',
    vidaai: 'Vidaai',
    eventTiming1: 'Date & Time',
    eventTiming2: 'Date & Time',
    eventTiming3: 'Date & Time',
    eventTiming4: 'Date & Time',
    eventTiming5: 'Date & Time',
    eventTiming6: '20th Feb, 2026',
    closingBlessing: '~ With Love & Blessings ~',
    rsvpText: 'For any queries, please contact',
  },
  hi: {
    langBtn: 'English',
    ganeshText: 'श्री गणेशाय नमः',
    groomFamily: 'वर पक्ष',
    groomParents: 'श्री. पिता का नाम एवं श्रीमती. माता का नाम',
    brideFamily: 'कन्या पक्ष',
    brideParents: 'श्री. पिता का नाम एवं श्रीमती. माता का नाम',
    coupleIntro: 'आपको हमारे परिवार के शुभ विवाह समारोह में सादर आमंत्रित करते हैं',
    saveDate: 'तिथि सुरक्षित करें',
    monthYear: 'फरवरी 2026',
    dayName: 'गुरुवार',
    muhurat: 'शुभ मुहूर्त',
    countdownLabel: 'शुभ दिन की उलटी गिनती',
    days: 'दिन',
    hours: 'घंटे',
    minutes: 'मिनट',
    seconds: 'सेकंड',
    venueLabel: 'विवाह स्थल',
    venueName: 'स्थल का नाम यहाँ',
    mapBtn: '📍 मानचित्र पर देखें',
    ceremoniesTitle: 'विवाह संस्कार',
    haldi: 'हल्दी',
    sangeet: 'संगीत',
    baraat: 'बारात',
    pheras: 'फेरे',
    reception: 'स्वागत समारोह',
    vidaai: 'विदाई',
    eventTiming1: 'तिथि एवं समय',
    eventTiming2: 'तिथि एवं समय',
    eventTiming3: 'तिथि एवं समय',
    eventTiming4: 'तिथि एवं समय',
    eventTiming5: 'तिथि एवं समय',
    eventTiming6: '20 फरवरी, 2026',
    closingBlessing: '~ स्नेह एवं आशीर्वाद सहित ~',
    rsvpText: 'किसी भी जानकारी के लिए संपर्क करें',
  }
};

// HTML-based translations (contain <br> or <span> tags)
const htmlTranslations = {
  en: {
    blessingText: 'With the blessings of Lord Ganesha &amp; our beloved elders,<br>we cordially invite you to celebrate the auspicious occasion of the marriage of<span class="sanskrit">|| शुभ विवाह ||</span>',
    groomAddress: 'Family Address Line 1<br>City, State',
    brideAddress: 'Family Address Line 1<br>City, State',
    groomName: 'Groom<span class="role-label">The Groom</span>',
    brideName: 'Bride<span class="role-label">The Bride</span>',
    venueAddress: 'Full Address Line 1,<br>City, State — PIN Code',
    closingMsg: 'Your gracious presence and blessings will make this occasion even more memorable.<br>We look forward to celebrating this joyous occasion with you!',
  },
  hi: {
    blessingText: 'श्री गणेश जी एवं हमारे पूज्य बड़ों के आशीर्वाद से,<br>हम आपको इस शुभ विवाह के अवसर पर सादर आमंत्रित करते हैं<span class="sanskrit">|| शुभ विवाह ||</span>',
    groomAddress: 'पारिवारिक पता पंक्ति 1<br>शहर, राज्य',
    brideAddress: 'पारिवारिक पता पंक्ति 1<br>शहर, राज्य',
    groomName: 'वर<span class="role-label">दूल्हा</span>',
    brideName: 'कन्या<span class="role-label">दुल्हन</span>',
    venueAddress: 'पूरा पता पंक्ति 1,<br>शहर, राज्य — पिन कोड',
    closingMsg: 'आपकी शुभ उपस्थिति एवं आशीर्वाद इस अवसर को और भी यादगार बना देंगे।<br>हम इस शुभ अवसर को आपके साथ मनाने के लिए उत्सुक हैं!',
  }
};

let currentLang = 'en';

/* ---- Language Toggle ---- */
function initLanguageToggle() {
  const btn = document.getElementById('langToggle');

  btn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'hi' : 'en';
    applyTranslations(currentLang);

    // Update html lang attribute
    document.documentElement.lang = currentLang;

    // Update button title
    btn.title = currentLang === 'en' ? 'Switch to Hindi' : 'Switch to English';
  });
}

function applyTranslations(lang) {
  // Text-only translations (textContent)
  const textEls = document.querySelectorAll('[data-i18n]');
  textEls.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key] !== undefined) {
      el.textContent = translations[lang][key];
    }
  });

  // HTML translations (innerHTML - for elements with <br> or nested tags)
  const htmlEls = document.querySelectorAll('[data-i18n-html]');
  htmlEls.forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (htmlTranslations[lang] && htmlTranslations[lang][key] !== undefined) {
      el.innerHTML = htmlTranslations[lang][key];
    }
  });
}

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
  const weddingDate = new Date('2026-02-19T09:00:00').getTime();

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
