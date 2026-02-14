/* ============================================
   HINDU WEDDING INVITATION - JAVASCRIPT
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  initPetals();
  initCountdown();
  initShareButton();
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
    // Bride's side
    brideFamily: "👰 Bride's Side (Kanya Paksh)",
    brideFull: 'Mansi Gupta',
    brideLineage1: 'Daughter of (Suputri)',
    brideParents: 'Smt. Manoja Gupta & Shri Santosh Gupta',
    brideLineage2: 'Granddaughter of',
    brideGrandparents: 'Smt. Jadawati Gupta & Late Shri Bhartalal Gupta',
    // Groom's side
    groomFamily: "🤵 Groom's Side (Var Paksh)",
    groomFull: 'Shaurabh Gupta',
    groomLineage1: 'Son of (Suputra)',
    groomParents: 'Smt. Sunita Gupta & Shri Sunil Gupta',
    groomLineage2: 'Family Elder',
    groomElder: 'Shri Jagaharlal Gupta',
    groomProfession: '💼 Administrator – J.L. Gupta Academy',
    // Couple
    coupleIntro: 'Request the pleasure of your company at the wedding of',
    // Events
    ceremoniesTitle: 'Wedding Ceremonies',
    mangalik: 'Mangalik Karyakram',
    mangalikSub: 'Haldi, Mehendi & Dwarachar',
    eventTiming1: '18 Feb 2026 · Wednesday',
    mangalikVenue: '📍 Residence, Shahpur',
    vivah: 'Shubh Vivah',
    vivahSub: 'Wedding Ceremony',
    eventTiming2: '19 Feb 2026 · Thursday',
    vidaai: 'Pratah Vidai',
    vidaiSub: 'Farewell Ceremony',
    eventTiming3: '20 Feb 2026 · Friday',
    // Date
    saveDate: 'Save the Date',
    monthYear: 'February 2026',
    dayName: 'Thursday',
    muhurat: 'Shubh Muhurat',
    muhuratTime: 'Evening · Auspicious Hour',
    calendarBtn: '📅 Add to Calendar',
    callBtn: 'Call',
    // Countdown
    countdownLabel: 'Counting Down To The Big Day',
    days: 'Days',
    hours: 'Hours',
    minutes: 'Minutes',
    seconds: 'Seconds',
    // Venue
    venueLabel: '📍 Wedding Venue',
    venueName: 'Siddheshwar Upvan (Marriage Hall)',
    mapBtn: '📍 View on Map',
    // Host
    hostLabel: '🙏 Host (Nimit)',
    hostName: 'Santosh Gupta',
    // Coordinators
    coordLabel: '🤝 Coordinators (Uttardayi)',
    coord1: 'Manoj Gupta',
    coord2: 'Pramod Gupta',
    coord3: 'Ashok Gupta',
    // Closing
    closingBlessing: '~ With Love & Blessings ~',
    rsvpText: 'For any queries, please contact',
  },
  hi: {
    langBtn: 'English',
    ganeshText: 'श्री गणेशाय नमः',
    // Bride's side
    brideFamily: '👰 कन्या पक्ष',
    brideFull: 'मानसी गुप्ता',
    brideLineage1: 'सुपुत्री',
    brideParents: 'श्रीमती मनोजा गुप्ता एवं श्री संतोष गुप्ता',
    brideLineage2: 'पौत्री',
    brideGrandparents: 'श्रीमती जदावती गुप्ता एवं स्व. श्री भरतलाल गुप्ता',
    // Groom's side
    groomFamily: '🤵 वर पक्ष',
    groomFull: 'शौरभ गुप्ता',
    groomLineage1: 'सुपुत्र',
    groomParents: 'श्रीमती सुनीता गुप्ता एवं श्री सुनील गुप्ता',
    groomLineage2: 'परिवार के बड़े',
    groomElder: 'श्री जगाहरलाल गुप्ता',
    groomProfession: '💼 प्रशासक – जे.एल. गुप्ता अकादमी',
    // Couple
    coupleIntro: 'आपको हमारे परिवार के शुभ विवाह समारोह में सादर आमंत्रित करते हैं',
    // Events
    ceremoniesTitle: 'विवाह संस्कार',
    mangalik: 'मांगलिक कार्यक्रम',
    mangalikSub: 'हल्दी, मेहंदी एवं द्वारचार',
    eventTiming1: '18 फरवरी 2026 · बुधवार',
    mangalikVenue: '📍 निवास स्थान, शाहपुर',
    vivah: 'शुभ विवाह',
    vivahSub: 'विवाह संस्कार',
    eventTiming2: '19 फरवरी 2026 · गुरुवार',
    vidaai: 'प्रातः विदाई',
    vidaiSub: 'विदाई संस्कार',
    eventTiming3: '20 फरवरी 2026 · शुक्रवार',
    // Date
    saveDate: 'तिथि सुरक्षित करें',
    monthYear: 'फरवरी 2026',
    dayName: 'गुरुवार',
    muhurat: 'शुभ मुहूर्त',
    muhuratTime: 'संध्या · शुभ समय',
    calendarBtn: '📅 कैलेंडर में जोड़ें',
    callBtn: 'कॉल करें',
    // Countdown
    countdownLabel: 'शुभ दिन की उलटी गिनती',
    days: 'दिन',
    hours: 'घंटे',
    minutes: 'मिनट',
    seconds: 'सेकंड',
    // Venue
    venueLabel: '📍 विवाह स्थल',
    venueName: 'सिद्धेश्वर उपवन (विवाह हॉल)',
    mapBtn: '📍 मानचित्र पर देखें',
    // Host
    hostLabel: '🙏 निमित्त',
    hostName: 'संतोष गुप्ता',
    // Coordinators
    coordLabel: '🤝 उत्तरदायी',
    coord1: 'मनोज गुप्ता',
    coord2: 'प्रमोद गुप्ता',
    coord3: 'अशोक गुप्ता',
    // Closing
    closingBlessing: '~ स्नेह एवं आशीर्वाद सहित ~',
    rsvpText: 'किसी भी जानकारी के लिए संपर्क करें',
  }
};

// HTML-based translations (contain <br> or <span> tags)
const htmlTranslations = {
  en: {
    blessingText: 'With the blessings of Lord Ganesha &amp; our beloved elders,<br>we cordially invite you to celebrate the auspicious occasion of the marriage of<span class="sanskrit">|| शुभ विवाह ||</span>',
    groomAddress: 'Gram / Gaur – Maharajganj<br>District – Jaunpur',
    groomName: 'Shaurabh<span class="role-label">The Groom</span>',
    brideName: 'Mansi<span class="role-label">The Bride</span>',
    venueAddress: 'Machlishahar, Mariyahu Road<br>Jaunpur, Uttar Pradesh',
    hostAddress: 'Gram / Gaur – Shahpur<br>Sikrara, District – Jaunpur',
    closingMsg: 'Your gracious presence and blessings will make this occasion even more memorable.<br>We look forward to celebrating this joyous occasion with you!',
  },
  hi: {
    blessingText: 'श्री गणेश जी एवं हमारे पूज्य बड़ों के आशीर्वाद से,<br>हम आपको इस शुभ विवाह के अवसर पर सादर आमंत्रित करते हैं<span class="sanskrit">|| शुभ विवाह ||</span>',
    groomAddress: 'ग्राम / गौर – महाराजगंज<br>जिला – जौनपुर',
    groomName: 'शौरभ<span class="role-label">दूल्हा</span>',
    brideName: 'मानसी<span class="role-label">दुल्हन</span>',
    venueAddress: 'मछलीशहर, मरियाहू रोड<br>जौनपुर, उत्तर प्रदेश',
    hostAddress: 'ग्राम / गौर – शाहपुर<br>सिकरारा, जिला – जौनपुर',
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
    const swayAnims = ['petalFall', 'petalSway1', 'petalSway2', 'petalSway3'];
    const chosenAnim = swayAnims[Math.floor(Math.random() * swayAnims.length)];
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.fontSize = (0.8 + Math.random() * 1.2) + 'rem';
    petal.style.animationName = chosenAnim;
    petal.style.animationDuration = (8 + Math.random() * 12) + 's';
    petal.style.animationDelay = Math.random() * 5 + 's';
    petal.style.opacity = 0.3 + Math.random() * 0.4;
    container.appendChild(petal);

    const duration = parseFloat(petal.style.animationDuration) + parseFloat(petal.style.animationDelay);
    setTimeout(() => {
      petal.remove();
      createPetal();
    }, duration * 1000);
  }

  for (let i = 0; i < maxPetals; i++) {
    setTimeout(() => createPetal(), i * 600);
  }
}

/* Petal sway variations injected into page */
(function injectPetalStyles() {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes petalSway1 {
      0%   { transform: translateY(-10vh) rotate(0deg) translateX(0);     opacity: 0.7; }
      25%  { transform: translateY(25vh) rotate(72deg) translateX(40px);  opacity: 0.6; }
      50%  { transform: translateY(50vh) rotate(144deg) translateX(-30px); opacity: 0.5; }
      75%  { transform: translateY(75vh) rotate(252deg) translateX(35px); opacity: 0.35; }
      100% { transform: translateY(110vh) rotate(360deg) translateX(-15px); opacity: 0; }
    }
    @keyframes petalSway2 {
      0%   { transform: translateY(-10vh) rotate(0deg) translateX(0);     opacity: 0.6; }
      30%  { transform: translateY(30vh) rotate(108deg) translateX(-35px); opacity: 0.55; }
      60%  { transform: translateY(60vh) rotate(216deg) translateX(25px); opacity: 0.4; }
      100% { transform: translateY(110vh) rotate(360deg) translateX(10px); opacity: 0; }
    }
    @keyframes petalSway3 {
      0%   { transform: translateY(-10vh) rotate(0deg) translateX(0);     opacity: 0.65; }
      20%  { transform: translateY(20vh) rotate(60deg) translateX(50px);  opacity: 0.6; }
      50%  { transform: translateY(50vh) rotate(180deg) translateX(-40px); opacity: 0.45; }
      80%  { transform: translateY(80vh) rotate(300deg) translateX(20px); opacity: 0.3; }
      100% { transform: translateY(110vh) rotate(360deg) translateX(-5px); opacity: 0; }
    }
  `;
  document.head.appendChild(style);
})();

/* ---- Countdown Timer ---- */
function initCountdown() {
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

/* ---- Share on WhatsApp ---- */
function initShareButton() {
  const btn = document.getElementById('shareBtn');

  btn.addEventListener('click', () => {
    const shareText = encodeURIComponent(
      '💍 You are cordially invited to the wedding of Shaurabh & Mansi!\n\n' +
      '📅 19th February 2026 (Thursday)\n' +
      '📍 Siddheshwar Upvan, Machlishahar, Jaunpur\n\n' +
      '🌟 Open the invitation card:\n' +
      (window.location.href.startsWith('file:') ? 'https://mansi-weds-shaurabh.vercel.app' : window.location.href)
    );
    window.open('https://wa.me/?text=' + shareText, '_blank');
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

  const sections = document.querySelectorAll(
    '.family-section, .couple-section, .event-section, .venue-section, .events-timeline, .closing-section, .countdown-section'
  );

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top > window.innerHeight) {
      section.style.opacity = '0';
      section.style.transform = 'translateY(30px)';
      section.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
      observer.observe(section);
    }
  });
}
