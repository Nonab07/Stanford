/**
 * STANFORD Educational Center - Main JavaScript
 * Functional Teacher Pagination, Modals, Lightbox, Mobile Nav, Phone Mask, ScrollSpy,
 * Light/Dark Theme Switcher, and Trilingual i18n (RU, EN, UZ) with Device Language Auto-Detection
 */

// Current Language State
let currentLang = "ru";

// Teachers State (Load More)
let teachersVisibleCount = 3;
const teachersStep = 3;

// Helper: Escape HTML strings
function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Get current teachers list according to language
function getTeachersList() {
  if (window.multilingualTeachers && window.multilingualTeachers[currentLang]) {
    return window.multilingualTeachers[currentLang];
  }
  if (window.multilingualTeachers && window.multilingualTeachers.ru) {
    return window.multilingualTeachers.ru;
  }
  return [];
}

// Render Teacher Cards (Theme & Language responsive)
function renderTeachers() {
  const container = document.getElementById("teachers-cards-container");
  if (!container) return;

  const teachersList = getTeachersList();
  if (teachersVisibleCount > teachersList.length) {
    teachersVisibleCount = teachersList.length;
  }
  if (teachersVisibleCount < 3 && teachersList.length >= 3) {
    teachersVisibleCount = 3;
  }

  const teachersToDisplay = teachersList.slice(0, teachersVisibleCount);
  const t = (window.translations && window.translations[currentLang]) || window.translations.ru;

  container.innerHTML = teachersToDisplay.map((teacher, index) => {
    const certsHtml = teacher.certificates.map((cert, certIdx) => `
      <button 
        type="button" 
        onclick="openTeacherCertificate(${teacher.id}, ${certIdx})"
        class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-amber-50 dark:bg-[#1A1A1A] text-amber-800 dark:text-amber-300 border border-amber-300/80 dark:border-[#FFB800]/25 hover:border-[#FFB800] hover:bg-amber-100 dark:hover:bg-[#222222] transition-all cursor-pointer group/cert shadow-xs"
        title="${escapeHtml(t.teachersCertHint)}"
      >
        <svg class="w-3.5 h-3.5 text-[#FF6B00] dark:text-[#FFB800] group-hover/cert:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
        <span>${escapeHtml(cert.badge)}</span>
      </button>
    `).join("");

    return `
      <div class="bg-white dark:bg-[#141414] rounded-2xl p-6 border border-neutral-200 dark:border-neutral-800 hover:border-[#FF6B00]/70 dark:hover:border-[#FF6B00]/60 transition-all duration-300 flex flex-col justify-between group hover:shadow-[0_12px_35px_-10px_rgba(255,107,0,0.22)] shadow-sm dark:shadow-none animate-fade-in" style="animation-delay: ${(index % 3) * 80}ms">
        <div>
          <!-- Teacher Photo with Geometric Frame & Badge -->
          <div class="relative mb-5 overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 group-hover:border-[#FF6B00]/40 transition-colors">
            <div class="aspect-[4/3] w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900">
              <img 
                src="${teacher.photo}" 
                alt="${teacher.name}" 
                class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter grayscale-[10%] group-hover:grayscale-0"
                loading="lazy"
              />
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/40 dark:from-[#141414] via-transparent to-transparent opacity-60"></div>
            
            <div class="absolute bottom-3 right-3">
              <span class="text-[11px] font-mono text-white dark:text-neutral-400 bg-black/75 px-2 py-0.5 rounded border border-neutral-700/60 dark:border-neutral-800 backdrop-blur-sm">
                ID 0${teacher.id}
              </span>
            </div>
          </div>

          <!-- Subject + Experience Orange-Yellow Badge -->
          <div class="mb-3">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold bg-[#FFB800]/15 text-[#B45309] dark:text-[#FFB800] border border-[#FFB800]/30 shadow-xs">
              <span class="w-1.5 h-1.5 rounded-full bg-[#FF6B00]"></span>
              <span>${escapeHtml(teacher.badgeText)}</span>
            </span>
          </div>

          <!-- Full Name -->
          <h3 class="text-xl sm:text-2xl font-bold font-display text-neutral-900 dark:text-white mb-2 group-hover:text-[#FF6B00] transition-colors">
            ${escapeHtml(teacher.name)}
          </h3>

          <!-- Bio -->
          <p class="text-neutral-600 dark:text-[#A3A3A3] text-sm leading-relaxed mb-6 line-clamp-3">
            ${escapeHtml(teacher.bio)}
          </p>
        </div>

        <!-- Credentials & Action -->
        <div class="pt-4 border-t border-neutral-200 dark:border-neutral-800/80">
          <div class="text-[11px] uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-semibold mb-2.5 flex items-center justify-between">
            <span>${escapeHtml(t.teachersCertHeader)}</span>
            <span class="text-neutral-400 dark:text-neutral-500 text-[10px]">${escapeHtml(t.teachersCertHint)}</span>
          </div>

          <div class="flex flex-wrap gap-1.5 mb-5">
            ${certsHtml}
          </div>

          <button 
            type="button" 
            onclick="openTeacherEnroll(${teacher.id})"
            class="w-full py-2.5 px-4 rounded-xl text-sm font-semibold bg-neutral-100 dark:bg-[#1A1A1A] text-neutral-900 dark:text-white border border-neutral-300 dark:border-neutral-700/80 hover:border-[#FF6B00] hover:bg-[#FF6B00] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group/btn cursor-pointer"
          >
            <span>${escapeHtml(t.teachersCardBtn)}</span>
            <svg class="w-4 h-4 text-[#FF6B00] group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    `;
  }).join("");

  updateTeachersControlsUI();
}

// Handler for "Показать еще" / Load More Teachers button
function loadMoreTeachers() {
  const teachersList = getTeachersList();
  if (teachersVisibleCount < teachersList.length) {
    teachersVisibleCount = Math.min(teachersVisibleCount + teachersStep, teachersList.length);
    renderTeachers();
  }
}

// Update Teachers Controls UI (Counter & Load More Button visibility)
function updateTeachersControlsUI() {
  const teachersList = getTeachersList();
  const total = teachersList.length;
  const shown = Math.min(teachersVisibleCount, total);
  const t = (window.translations && window.translations[currentLang]) || window.translations.ru;

  // Counter text (e.g. "Показано 3 из 9 преподавателей")
  const counterEl = document.getElementById("teachers-page-info");
  if (counterEl) {
    const textTemplate = t.teachersCountInfo || "Показано {shown} из {total} преподавателей";
    counterEl.textContent = textTemplate
      .replace("{shown}", shown)
      .replace("{total}", total);
  }

  // Load More Button visibility (hide when all teachers are displayed)
  const loadMoreContainer = document.getElementById("teachers-load-more-container");
  if (loadMoreContainer) {
    if (shown >= total) {
      loadMoreContainer.classList.add("hidden");
    } else {
      loadMoreContainer.classList.remove("hidden");
    }
  }
}

// --- INTERNATIONALIZATION (i18n) ENGINE ---
function detectDefaultLanguage() {
  // 1. Check user previously saved choice
  const savedLang = localStorage.getItem("stanford_lang");
  if (savedLang && ["ru", "en", "uz"].includes(savedLang)) {
    return savedLang;
  }

  // 2. Check window initial from anti-flicker script
  if (window.__initialLang && ["ru", "en", "uz"].includes(window.__initialLang)) {
    return window.__initialLang;
  }

  // 3. Check system device language
  const browserLangs = navigator.languages ? [...navigator.languages] : [navigator.language || ""];
  for (const l of browserLangs) {
    if (!l) continue;
    const code = l.toLowerCase().split("-")[0];
    if (code === "ru") return "ru";
    if (code === "uz") return "uz";
    if (code === "en") return "en";
  }

  // 4. Default fallback: if system language is not ru or uz, use eng!
  return "en";
}

function applyTranslations(lang) {
  if (!window.translations || !window.translations[lang]) return;
  const dict = window.translations[lang];

  // 1. Text content replacement (data-i18n)
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  // 2. Placeholders replacement (data-i18n-placeholder)
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key] !== undefined) {
      el.setAttribute("placeholder", dict[key]);
    }
  });

  // 3. Titles / Tooltips (data-i18n-title)
  document.querySelectorAll("[data-i18n-title]").forEach(el => {
    const key = el.getAttribute("data-i18n-title");
    if (dict[key] !== undefined) {
      el.setAttribute("title", dict[key]);
    }
  });

  // 4. Form course selection options
  const optEnglish = document.querySelectorAll("option[value='english']");
  optEnglish.forEach(o => { o.textContent = dict.formCourseOptEnglish || "English Language (IELTS)"; });

  const optBioChem = document.querySelectorAll("option[value='biochem']");
  optBioChem.forEach(o => { o.textContent = dict.formCourseOptBioChem || "Biology & Chemistry (Medical)"; });

  const optMath = document.querySelectorAll("option[value='math']");
  optMath.forEach(o => { o.textContent = dict.formCourseOptMath || "Mathematics (SAT / Entrance)"; });

  const optConsult = document.querySelectorAll("option[value='consult']");
  optConsult.forEach(o => { o.textContent = dict.formCourseOptConsult || "Consultation"; });

  const optGeneral = document.querySelectorAll("option[value='general']");
  optGeneral.forEach(o => { o.textContent = dict.enrollModalOptGeneral || "Individual Program"; });

  const optOffline = document.querySelectorAll("option[value='offline']");
  optOffline.forEach(o => { o.textContent = dict.formFormatOptOffline || "On-campus (Almaty)"; });

  const optOnline = document.querySelectorAll("option[value='online']");
  optOnline.forEach(o => { o.textContent = dict.formFormatOptOnline || "Online"; });
}

function updateLanguageUI(lang) {
  const upper = lang.toUpperCase();

  // Desktop slidebar active code
  const codeEl = document.getElementById("active-lang-code");
  if (codeEl) codeEl.textContent = upper;

  // Mobile active badge
  const mobCodeEl = document.getElementById("mobile-active-lang");
  if (mobCodeEl) mobCodeEl.textContent = upper;

  // Desktop slidebar options (slide-down menu)
  document.querySelectorAll("[data-slide-btn]").forEach(btn => {
    const btnLang = btn.getAttribute("data-slide-btn");
    const checkEl = btn.querySelector(".desk-check");
    if (btnLang === lang) {
      btn.className = "w-full flex items-center justify-between px-3 py-2 rounded-xl bg-[#FF6B00]/15 text-[#FF6B00] dark:text-[#FF6B00] border border-[#FF6B00]/30 text-xs font-bold transition-all cursor-pointer text-left select-none";
      if (checkEl) checkEl.classList.remove("hidden");
    } else {
      btn.className = "w-full flex items-center justify-between px-3 py-2 rounded-xl text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-[#1A1A1A] hover:text-neutral-900 dark:hover:text-white border border-transparent text-xs font-semibold transition-all cursor-pointer text-left select-none";
      if (checkEl) checkEl.classList.add("hidden");
    }
  });

  // Mobile slidebar options
  document.querySelectorAll("[data-mob-slide-btn]").forEach(btn => {
    const btnLang = btn.getAttribute("data-mob-slide-btn");
    const checkEl = btn.querySelector(".mob-check");
    if (btnLang === lang) {
      btn.className = "lang-mob-item w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-[#FF6B00]/15 text-[#FF6B00] border border-[#FF6B00]/30 font-bold transition-all cursor-pointer text-left shadow-xs";
      if (checkEl) checkEl.classList.remove("hidden");
    } else {
      btn.className = "lang-mob-item w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-[#1A1A1A] font-semibold transition-all cursor-pointer text-left border border-transparent";
      if (checkEl) checkEl.classList.add("hidden");
    }
  });

  // Legacy buttons if present
  document.querySelectorAll("[data-lang-btn]").forEach(btn => {
    const btnLang = btn.getAttribute("data-lang-btn");
    if (btnLang === lang) {
      btn.className = "px-2.5 py-1 rounded-lg bg-[#FF6B00] text-white shadow-xs cursor-pointer font-bold";
    } else {
      btn.className = "px-2.5 py-1 rounded-lg text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white cursor-pointer font-bold";
    }
  });
}

// --- LANGUAGE SLIDEBAR INTERACTION ---
function toggleLangSlidebar(e) {
  if (e) e.stopPropagation();
  const menu = document.getElementById("lang-slidebar-menu");
  const trigger = document.getElementById("lang-trigger-btn");
  if (!menu) return;

  const isExpanded = menu.classList.contains("expanded");
  if (isExpanded) {
    menu.classList.remove("expanded");
    if (trigger) {
      trigger.setAttribute("aria-expanded", "false");
      trigger.classList.remove("active-dropdown");
    }
  } else {
    menu.classList.add("expanded");
    if (trigger) {
      trigger.setAttribute("aria-expanded", "true");
      trigger.classList.add("active-dropdown");
    }
  }
}

function selectLanguageWithSlidebar(lang, e) {
  if (e) e.stopPropagation();
  setLanguage(lang);

  // Smooth collapse after selection
  setTimeout(() => {
    const menu = document.getElementById("lang-slidebar-menu");
    const trigger = document.getElementById("lang-trigger-btn");
    if (menu) menu.classList.remove("expanded");
    if (trigger) {
      trigger.setAttribute("aria-expanded", "false");
      trigger.classList.remove("active-dropdown");
    }
  }, 160);
}

function toggleMobileLangSlidebar() {
  const container = document.getElementById("mobile-lang-container");
  const body = document.getElementById("mobile-lang-slidebar-body");
  const chevron = document.getElementById("mobile-lang-chevron");
  const badge = document.getElementById("mobile-active-lang");
  if (!body) return;

  const isExpanded = body.classList.contains("expanded");
  if (isExpanded) {
    body.classList.remove("expanded");
    if (chevron) chevron.classList.remove("expanded");
    if (container) container.classList.remove("expanded");
  } else {
    body.classList.add("expanded");
    if (chevron) chevron.classList.add("expanded");
    if (container) container.classList.add("expanded");
    if (badge) {
      badge.classList.remove("badge-pop");
      void badge.offsetWidth; // trigger reflow
      badge.classList.add("badge-pop");
    }
  }
}

function selectMobileLangAndCollapse(lang) {
  setLanguage(lang);
  const badge = document.getElementById("mobile-active-lang");
  if (badge) {
    badge.classList.remove("badge-pop");
    void badge.offsetWidth;
    badge.classList.add("badge-pop");
  }
  setTimeout(() => {
    const container = document.getElementById("mobile-lang-container");
    const body = document.getElementById("mobile-lang-slidebar-body");
    const chevron = document.getElementById("mobile-lang-chevron");
    if (body) body.classList.remove("expanded");
    if (chevron) chevron.classList.remove("expanded");
    if (container) container.classList.remove("expanded");
  }, 190);
}

function setLanguage(lang) {
  if (!["ru", "en", "uz"].includes(lang)) lang = "en";
  currentLang = lang;
  localStorage.setItem("stanford_lang", lang);
  document.documentElement.setAttribute("lang", lang);

  applyTranslations(lang);
  renderTeachers();
  updateLanguageUI(lang);
}

// --- THEME SWITCHER (LIGHT / DARK) ---
function getPreferredTheme() {
  const saved = localStorage.getItem("stanford_theme");
  if (saved) return saved;
  return "dark";
}

function applyTheme(theme) {
  const isDark = theme === "dark";
  if (isDark) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  localStorage.setItem("stanford_theme", theme);
  updateThemeIcons(isDark);
}

function toggleTheme() {
  const isCurrentlyDark = document.documentElement.classList.contains("dark");
  applyTheme(isCurrentlyDark ? "light" : "dark");
}

function updateThemeIcons(isDark) {
  const sunSvg = `
    <svg class="w-5 h-5 text-[#FFB800] transition-transform duration-300 hover:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  `;
  const moonSvg = `
    <svg class="w-5 h-5 text-neutral-700 transition-transform duration-300 hover:-rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  `;

  const t = (window.translations && window.translations[currentLang]) || window.translations.ru;
  const desktopBtn = document.getElementById("theme-toggle-btn");
  const mobileBtn = document.getElementById("mobile-theme-toggle-btn");

  if (desktopBtn) {
    desktopBtn.innerHTML = isDark ? sunSvg : moonSvg;
    desktopBtn.setAttribute("title", isDark ? t.themeLight : t.themeDark);
    desktopBtn.setAttribute("aria-label", isDark ? t.themeLight : t.themeDark);
  }

  if (mobileBtn) {
    mobileBtn.innerHTML = `
      <div class="flex items-center gap-2.5">
        ${isDark ? sunSvg : moonSvg}
        <span class="text-sm font-semibold text-neutral-800 dark:text-neutral-200">
          ${isDark ? t.themeLight : t.themeDark}
        </span>
      </div>
    `;
    mobileBtn.setAttribute("aria-label", isDark ? t.themeLight : t.themeDark);
  }
}

// --- CERTIFICATE DETAIL LIGHTBOX / MODAL ---
function openTeacherCertificate(teacherId, certIdx) {
  const teachersList = getTeachersList();
  const teacher = teachersList.find(t => t.id === teacherId);
  if (!teacher || !teacher.certificates || !teacher.certificates[certIdx]) return;
  const cert = teacher.certificates[certIdx];
  openCertificateDetail(teacher.name, cert.name, cert.issuer, cert.year, cert.badge);
}

function openTeacherEnroll(teacherId) {
  const teachersList = getTeachersList();
  const teacher = teachersList.find(t => t.id === teacherId);
  const t = (window.translations && window.translations[currentLang]) || window.translations.ru;
  if (!teacher) return;
  openEnrollModal(teacher.subject, `${t.teachersCardBtn}: ${teacher.name}`);
}

function openCertificateDetail(teacherName, certName, issuer, year, badge) {
  const modal = document.getElementById("cert-modal");
  if (!modal) return;

  const t = (window.translations && window.translations[currentLang]) || window.translations.ru;

  document.getElementById("cert-modal-teacher").textContent = teacherName;
  document.getElementById("cert-modal-title").textContent = certName;
  document.getElementById("cert-modal-issuer").textContent = issuer;
  document.getElementById("cert-modal-year").textContent = year;
  document.getElementById("cert-modal-badge").textContent = badge;
  document.getElementById("cert-modal-verified-text").textContent = t.certModalVerified;

  modal.classList.add("active");
  document.body.classList.add("overflow-hidden");
}

function closeCertificateModal() {
  const modal = document.getElementById("cert-modal");
  if (!modal) return;
  modal.classList.remove("active");
  document.body.classList.remove("overflow-hidden");
}

// --- WORK RESULT / STUDENT CERTIFICATE LIGHTBOX ---
function openResultLightbox(studentName, title, score, institution, examType, note) {
  const modal = document.getElementById("result-modal");
  if (!modal) return;

  document.getElementById("res-modal-student").textContent = studentName;
  document.getElementById("res-modal-title").textContent = title;
  document.getElementById("res-modal-score").textContent = score;
  document.getElementById("res-modal-inst").textContent = institution;
  document.getElementById("res-modal-type").textContent = examType;
  document.getElementById("res-modal-note").textContent = note;

  modal.classList.add("active");
  document.body.classList.add("overflow-hidden");
}

function closeResultModal() {
  const modal = document.getElementById("result-modal");
  if (!modal) return;
  modal.classList.remove("active");
  document.body.classList.remove("overflow-hidden");
}

// --- ENROLLMENT MODAL ---
function openEnrollModal(preferredCourse = "", extraComment = "") {
  const modal = document.getElementById("enroll-modal");
  if (!modal) return;

  const selectEl = document.getElementById("enroll-course-select");
  if (selectEl && preferredCourse) {
    const val = preferredCourse.toLowerCase();
    if (val.includes("англ") || val.includes("ielts") || val.includes("eng")) {
      selectEl.value = "english";
    } else if (val.includes("биол") || val.includes("хим") || val.includes("bio") || val.includes("chem")) {
      selectEl.value = "biochem";
    } else if (val.includes("матем") || val.includes("sat") || val.includes("math")) {
      selectEl.value = "math";
    } else {
      selectEl.value = "general";
    }
  }

  const commentInput = document.getElementById("enroll-comment-input");
  if (commentInput && extraComment) {
    commentInput.value = extraComment;
  }

  modal.classList.add("active");
  document.body.classList.add("overflow-hidden");

  // Focus on name input
  setTimeout(() => {
    const nameInput = document.getElementById("enroll-name");
    if (nameInput) nameInput.focus();
  }, 150);
}

function closeEnrollModal() {
  const modal = document.getElementById("enroll-modal");
  if (!modal) return;
  modal.classList.remove("active");
  document.body.classList.remove("overflow-hidden");
}

// --- MOBILE MENU ---
function openMobileMenu(e) {
  if (e) e.stopPropagation();
  const mobileMenu = document.getElementById("mobile-menu");
  if (!mobileMenu) return;
  mobileMenu.classList.add("open");
  mobileMenu.setAttribute("aria-hidden", "false");
  document.body.classList.add("overflow-hidden");
}

function closeMobileMenu(e) {
  if (e) e.stopPropagation();
  const mobileMenu = document.getElementById("mobile-menu");
  if (!mobileMenu) return;
  mobileMenu.classList.remove("open");
  mobileMenu.setAttribute("aria-hidden", "true");
  document.body.classList.remove("overflow-hidden");
}

function toggleMobileMenu(e) {
  if (e) e.stopPropagation();
  const mobileMenu = document.getElementById("mobile-menu");
  if (!mobileMenu) return;

  const isOpen = mobileMenu.classList.contains("open");
  if (isOpen) {
    closeMobileMenu(e);
  } else {
    openMobileMenu(e);
  }
}

// --- TOAST NOTIFICATION ---
function showToast(message) {
  const toast = document.getElementById("site-toast");
  const textEl = document.getElementById("toast-text");
  if (!toast || !textEl) return;

  textEl.textContent = message;
  toast.classList.remove("translate-y-24", "opacity-0");
  toast.classList.add("translate-y-0", "opacity-100");

  setTimeout(() => {
    toast.classList.remove("translate-y-0", "opacity-100");
    toast.classList.add("translate-y-24", "opacity-0");
  }, 4500);
}

// --- PHONE INPUT MASK (UZBEKISTAN +998) ---
function setupPhoneMask(input) {
  if (!input) return;

  input.addEventListener("input", () => {
    let raw = input.value.replace(/\D/g, "");
    if (!raw) {
      input.value = "";
      return;
    }

    // Auto-normalize Uzbek prefix
    if (raw.startsWith("998")) {
      // already starts with 998
    } else if (raw.startsWith("8")) {
      raw = "998" + raw.substring(1);
    } else {
      raw = "998" + raw;
    }

    // Limit to 12 digits: 998 + 9 local digits
    raw = raw.substring(0, 12);

    let formatted = "+998";
    if (raw.length > 3) {
      formatted += " (" + raw.substring(3, 5);
    }
    if (raw.length >= 5) {
      formatted += ") " + raw.substring(5, 8);
    }
    if (raw.length >= 8) {
      formatted += "-" + raw.substring(8, 10);
    }
    if (raw.length >= 10) {
      formatted += "-" + raw.substring(10, 12);
    }

    input.value = formatted;
  });

  input.addEventListener("focus", () => {
    if (!input.value) {
      input.value = "+998 (";
    }
  });

  input.addEventListener("blur", () => {
    if (input.value === "+998 (" || input.value === "+998" || input.value === "+998 ") {
      input.value = "";
    }
  });
}

// --- EXPOSE GLOBALS FOR INLINE ONCLICK HANDLERS ---
window.renderTeachers = renderTeachers;
window.loadMoreTeachers = loadMoreTeachers;
window.openCertificateDetail = openCertificateDetail;
window.openTeacherCertificate = openTeacherCertificate;
window.openTeacherEnroll = openTeacherEnroll;
window.closeCertificateModal = closeCertificateModal;
window.openResultLightbox = openResultLightbox;
window.closeResultModal = closeResultModal;
window.openEnrollModal = openEnrollModal;
window.closeEnrollModal = closeEnrollModal;
window.openMobileMenu = openMobileMenu;
window.closeMobileMenu = closeMobileMenu;
window.toggleMobileMenu = toggleMobileMenu;
window.toggleTheme = toggleTheme;
window.setLanguage = setLanguage;
window.toggleLangSlidebar = toggleLangSlidebar;
window.selectLanguageWithSlidebar = selectLanguageWithSlidebar;
window.toggleMobileLangSlidebar = toggleMobileLangSlidebar;
window.selectMobileLangAndCollapse = selectMobileLangAndCollapse;
window.showToast = showToast;

// --- INITIALIZE APPLICATION ---
document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize Theme from storage or preference
  const currentTheme = getPreferredTheme();
  applyTheme(currentTheme);

  // 2. Initialize Language from storage or device system language (default to eng if not ru or uz)
  const initialLang = detectDefaultLanguage();
  setLanguage(initialLang);

  // 3. Setup Phone Masks
  setupPhoneMask(document.getElementById("contact-phone"));
  setupPhoneMask(document.getElementById("enroll-phone"));

  // 4. Mobile Menu Listeners
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenuClose = document.getElementById("mobile-menu-close");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", openMobileMenu);
  }
  if (mobileMenuClose) {
    mobileMenuClose.addEventListener("click", closeMobileMenu);
  }
  mobileLinks.forEach(link => {
    link.addEventListener("click", closeMobileMenu);
  });

  // 5. Header background shadow on scroll
  const header = document.getElementById("main-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
      header.classList.add("bg-white/95", "dark:bg-[#0A0A0A]/95", "backdrop-blur-md", "border-b", "border-neutral-200", "dark:border-neutral-800/80", "shadow-md", "dark:shadow-2xl");
      header.classList.remove("bg-white/80", "dark:bg-[#0A0A0A]/80");
    } else {
      header.classList.remove("bg-white/95", "dark:bg-[#0A0A0A]/95", "shadow-md", "dark:shadow-2xl");
      header.classList.add("bg-white/80", "dark:bg-[#0A0A0A]/80");
    }
  });

  // 6. ScrollSpy - Active Navigation Link
  const navLinks = document.querySelectorAll("#desktop-nav a");
  const sections = ["hero", "about", "courses", "teachers", "alumni", "contacts"];

  function updateScrollSpy() {
    let currentSection = "hero";
    const scrollPosition = window.scrollY + 160;

    // Check if scrolled to bottom of page (guarantee contacts highlight)
    const isBottom = (window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 60);

    if (isBottom) {
      currentSection = "contacts";
    } else {
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
          // getBoundingClientRect().top + window.scrollY calculates true absolute page position
          const top = el.getBoundingClientRect().top + window.scrollY;
          if (top <= scrollPosition) {
            currentSection = id;
          }
        }
      });
    }

    navLinks.forEach(link => {
      const href = link.getAttribute("href")?.replace("#", "");
      if (href === currentSection) {
        link.classList.add("text-[#FF6B00]", "font-bold");
        link.classList.remove("text-neutral-600", "dark:text-neutral-300");
      } else {
        link.classList.remove("text-[#FF6B00]", "font-bold");
        link.classList.add("text-neutral-600", "dark:text-neutral-300");
      }
    });
  }

  window.addEventListener("scroll", updateScrollSpy, { passive: true });
  updateScrollSpy();

  // 7. Modal Backdrop click & Escape key listeners
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeEnrollModal();
      closeCertificateModal();
      closeResultModal();
      closeMobileMenu();
      const menu = document.getElementById("lang-slidebar-menu");
      const trigger = document.getElementById("lang-trigger-btn");
      if (menu && menu.classList.contains("expanded")) {
        menu.classList.remove("expanded");
        if (trigger) {
          trigger.setAttribute("aria-expanded", "false");
          trigger.classList.remove("active-dropdown");
        }
      }
    }
  });

  const modals = [
    document.getElementById("enroll-modal"),
    document.getElementById("cert-modal"),
    document.getElementById("result-modal")
  ];

  modals.forEach(m => {
    if (m) {
      m.addEventListener("click", (e) => {
        if (e.target === m) {
          closeEnrollModal();
          closeCertificateModal();
          closeResultModal();
        }
      });
    }
  });

  // 8. Handle Enroll Form in Modal
  const enrollForm = document.getElementById("enroll-form");
  if (enrollForm) {
    enrollForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const t = (window.translations && window.translations[currentLang]) || window.translations.ru;
      const submitBtn = enrollForm.querySelector("button[type='submit']");
      const originalText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="animate-spin h-5 w-5 text-white inline-block mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
        </svg>
        ${escapeHtml(t.formSubmitting)}
      `;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        enrollForm.reset();
        closeEnrollModal();
        showToast(t.formSuccessToast);
      }, 700);
    });
  }

  // 9. Handle Quick Contact Form (Section 5)
  const contactForm = document.getElementById("quick-contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const t = (window.translations && window.translations[currentLang]) || window.translations.ru;
      const submitBtn = contactForm.querySelector("button[type='submit']");
      const originalText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="animate-spin h-5 w-5 text-white inline-block mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
        </svg>
        ${escapeHtml(t.formSubmitting)}
      `;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        contactForm.reset();
        showToast(t.quickSuccessToast);
      }, 700);
    });
  }

  // 10. Lucide icons init if loaded
  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }

  // 11. Close desktop language slidebar when clicking outside
  document.addEventListener("click", (e) => {
    const slidebarWrapper = document.getElementById("lang-slidebar-wrapper");
    const menu = document.getElementById("lang-slidebar-menu");
    const trigger = document.getElementById("lang-trigger-btn");
    if (menu && menu.classList.contains("expanded")) {
      if (slidebarWrapper && !slidebarWrapper.contains(e.target)) {
        menu.classList.remove("expanded");
        if (trigger) {
          trigger.setAttribute("aria-expanded", "false");
          trigger.classList.remove("active-dropdown");
        }
      }
    }
  });
});
