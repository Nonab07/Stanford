/**
 * STANFORD Educational Center - Internationalization (i18n)
 * Languages: Russian (ru), English (en), Uzbek (uz)
 */

const translations = {
  ru: {
    // Header & Navigation
    centerSubtitle: "Учебный центр",
    navHome: "Главная",
    navAbout: "О нас",
    navCourses: "Курсы",
    navTeachers: "Преподаватели",
    navAlumni: "Выпускники",
    navContacts: "Контакты",
    btnEnroll: "Записаться",
    themeToggleTitle: "Сменить тему (Светлая / Темная)",
    themeLight: "Светлая тема",
    themeDark: "Темная тема",
    langSelectTitle: "Выбрать язык",

    // Hero
    heroBadge: "Набор на новый академический семестр открыт",
    heroTitlePrefix: "Твой путь в мировые вузы начинается в",
    heroOffer: "Премиальный учебный центр подготовки абитуриентов и школьников. Углубленный <span class=\"text-neutral-900 dark:text-white font-medium\">английский язык (IELTS)</span>, фундаментальная <span class=\"text-neutral-900 dark:text-white font-medium\">биология и химия</span> для медицинских вузов, а также профильная <span class=\"text-neutral-900 dark:text-white font-medium\">математика</span>.",
    heroCtaPrimary: "Записаться на бесплатный пробный урок",
    heroCtaSecondary: "Ознакомиться с курсами",
    heroStat1Label: "Поступление на грант и бюджет",
    heroStat2Label: "Успешных выпускников центра",
    heroStat3Label: "Средний результат IELTS",
    heroStat4Label: "Академического опыта и лидерства",
    heroStat4Val: "8+ лет",

    // About
    aboutBadge: "ОБ УЧЕБНОМ ЦЕНТРЕ",
    aboutTitle: "Фундаментальный подход. <br /><span class=\"text-gradient-orange\">Измеримый результат.</span>",
    aboutDesc: "Учебный центр «Stanford» основан преподавателями ведущих международных вузов с единой миссией: дать каждому студенту сильную академическую базу и уверенность при сдаче сложнейших международных и вступительных экзаменов.",
    aboutFeature1Title: "Мини-группы до 6 человек",
    aboutFeature1Desc: "Индивидуальный трекинг успеваемости каждого ученика, регулярные срезы знаний и обратная связь родителям.",
    aboutFeature2Title: "Авторские методики и лаборатории",
    aboutFeature2Desc: "Практические опыты по химии и биологии, разбор реальных заданий IELTS и олимпиадных задач прошлых лет.",
    aboutMissionBadge: "Наша миссия",
    aboutMissionText: "Сформировать критическое мышление и вывести абитуриентов в топ 1% мировых рейтингов.",
    aboutEnvBadge: "Образовательная среда",
    aboutEnvText: "Современные лектории, коворкинг для самостоятельной подготовки, доступ к закрытой цифровой библиотеке Stanford 24/7.",
    aboutStatTeachers: "Сертифицированные педагоги",
    aboutStatSupport: "Кураторская поддержка",
    aboutStatMock: "Пробные тесты каждую субботу",

    // Courses
    coursesBadge: "ПРОГРАММЫ ОБУЧЕНИЯ",
    coursesTitle: "Курсы для достижения <span class=\"text-gradient-orange\">максимальных баллов</span>",
    coursesDesc: "Интенсивные авторские программы, адаптированные под форматы современных международных и вступительных экзаменов.",
    coursesCardBtn: "Записаться на курс",
    
    // Course 1
    c1Track: "IELTS & General",
    c1Title: "Английский язык",
    c1Desc: "Комплексная подготовка от уровня Beginner до Advanced (C1) и таргетированный интенсив по сдаче IELTS на 7.5+. Разговорные клубы с носителями языка, тренинг Academic Writing и аудирования.",
    c1FormatLabel: "Формат:",
    c1FormatVal: "Офлайн или Онлайн (до 6 чел.)",
    c1DurLabel: "Длительность:",
    c1DurVal: "3 – 9 месяцев (3 р/нед по 90 мин)",
    c1ScoreLabel: "Mock Test:",
    c1ScoreVal: "Бесплатно каждую субботу",

    // Course 2
    c2TopChoice: "Топ выбор абитуриентов",
    c2Track: "Медицинский трек",
    c2Title: "Биология и Химия",
    c2Desc: "Специализированная программа для будущих врачей, биохимиков и фармацевтов. Глубокое понимание анатомии, генетики, органической химии, решение сложных расчетных задач и лабораторные практикумы.",
    c2FormatLabel: "Формат:",
    c2FormatVal: "Офлайн практикум в лаборатории",
    c2DurLabel: "Длительность:",
    c2DurVal: "6 – 12 месяцев (4 р/нед)",
    c2ScoreLabel: "Результат:",
    c2ScoreVal: "94% поступления на грант",

    // Course 3
    c3Track: "SAT & Вступительные",
    c3Title: "Математика",
    c3Desc: "Профильная математика высшего уровня сложности: параметры, стереометрия, комбинаторика, теория вероятностей, подготовка к SAT Math и внутренним экзаменам технических университетов (NU, МФТИ, ВШЭ).",
    c3FormatLabel: "Формат:",
    c3FormatVal: "Офлайн или Онлайн интенсив",
    c3DurLabel: "Длительность:",
    c3DurVal: "4 – 8 месяцев (3 р/нед по 90 мин)",
    c3ScoreLabel: "Средний балл:",
    c3ScoreVal: "SAT Math 760+ / ЕНТ 48+",


    // Teachers
    teachersBadge: "ЭКСПЕРТНЫЙ СОСТАВ",
    teachersTitle: "Преподаватели <span class=\"text-gradient-orange\">Stanford</span>",
    teachersDesc: "Наставники с международными сертификатами CELTA, PhD и личными рекордами 8.5 по IELTS и 800 по SAT Math.",
    teachersCountInfo: "Показано {shown} из {total} преподавателей",
    teachersBtnLoadMore: "Показать еще",
    teachersCertHeader: "Сертификаты и регалии",
    teachersCertHint: "клик для инфо",
    teachersCardBtn: "Записаться на занятие",

    // Alumni
    alumniBadge: "ИСТОРИИ УСПЕХА",
    alumniTitle: "Гордость центра: <span class=\"text-gradient-orange\">наши выпускники</span>",
    alumniDesc: "Реальные студенты, поступившие на гранты в ведущие университеты мира и сдавшие экзамены на высшие баллы.",
    alumniGrantLabel: "Грант",
    
    a1Name: "Алишер Сейткалиев",
    a1Uni: "University of Toronto (Канада)",
    a1Quote: "«Занимался на курсе IELTS у Александра Громова. За 5 месяцев поднял Writing с 6.0 до 7.5 и сдал общий экзамен на 8.0. Поступил на факультет Computer Science с грантом.»",
    a1Major: "Специальность: CS",
    a1Grant: "Грант $42,000",

    a2Name: "Камилла Валиева",
    a2Uni: "Медицинская Академия (Бюджет)",
    a2Quote: "«Благодаря курсу биологии и химии в Stanford я систематизировала знания и отработала лабораторные тесты. 189 баллов позволили выбрать лучший медицинский вуз на полный грант.»",
    a2Major: "Лечебное дело",
    a2Grant: "100% Бюджет",

    a3Name: "Арман Жумабеков",
    a3Uni: "KAIST (Южная Корея)",
    a3Quote: "«Математика в Stanford перевернула мое представление о решении задач. Сдал SAT Math на абсолютный максимум 800 баллов и прошел на полную стипендию в технологический институт KAIST.»",
    a3Major: "Mechanical Eng.",
    a3Grant: "Full Scholarship",

    a4Name: "Диана Ким",
    a4Uni: "Erasmus University Rotterdam",
    a4Quote: "«Невероятная атмосфера и поддержка кураторов. Подготовилась к Academic Speaking и сдала IELTS на феноменальные 8.5! Сейчас учусь в Нидерландах на программе International Business.»",
    a4Major: "Economics",
    a4Grant: "Вступила на бюджет",

    // Work Results / Proofs
    resultsBadge: "Официальные подтверждения",
    resultsTitle: "Примеры работ и подтвержденные результаты",
    resultsDesc: "Нажмите на сертификат для просмотра детального отчета",
    res1Title: "IELTS Academic: 8.5",
    res1Sub: "Скан официального бланка TRF",
    res2Title: "SAT Math: 800/800",
    res2Sub: "Scorecard College Board",
    res3Title: "Диплом олимпиады I ст.",
    res3Sub: "Биология и биохимия",
    res4Title: "NUET Math: 100/100",
    res4Sub: "Вступительный экзамен NU",

    // Contacts
    contactsBadge: "СВЯЗЬ С НАМИ",
    contactsTitle: "Контакты и локация <span class=\"text-gradient-orange\">Stanford</span>",
    contactsDesc: "Приглашаем вас на персональную консультацию и тестирование текущего уровня.",
    contactAddressLabel: "Адрес учебного центра",
    contactAddressVal: "г. Алматы, проспект Достык 89, БЦ «Stanford Plaza», 4 этаж",
    contactMetroHint: "Рядом станция метро «Абая» (5 мин пешком)",
    contactPhoneLabel: "Прямой телефон (звонок бесплатный)",
    contactHours: "Ежедневно: 08:30 – 21:00",
    contactEmailLabel: "Электронная почта",
    socialsLabel: "Официальные соцсети",

    // Form
    formTitle: "Быстрая запись на консультацию",
    formSubtitle: "Оставьте контактные данные для связи",
    formNameLabel: "Ваше имя",
    formNamePlaceholder: "Например, Арман",
    formPhoneLabel: "Номер телефона",
    formCourseLabel: "Интересующий курс",
    formCourseOptEnglish: "Английский язык (IELTS)",
    formCourseOptBioChem: "Биология и Химия (Медицинский)",
    formCourseOptMath: "Математика (SAT / Вступительные)",
    formCourseOptConsult: "Комплексная консультация",
    formFormatLabel: "Удобный формат",
    formFormatOptOffline: "Очно в центре (Алматы)",
    formFormatOptOnline: "Дистанционно онлайн",
    formSubmitBtn: "Записаться на бесплатный пробный урок",
    formConsent: "Нажимая кнопку, вы даете согласие на обработку персональных данных. Конфиденциальность гарантируется.",
    formSubmitting: "Отправка заявки...",
    formSuccessToast: "Заявка успешно принята! Координатор Stanford свяжется с вами в ближайшее время.",
    quickSuccessToast: "Спасибо за обращение! Наш менеджер перезвонит вам прямо сейчас.",

    // Modals
    modalClose: "Закрыть",
    enrollModalBadge: "STANFORD ACADEMY",
    enrollModalTitle: "Запись на курс",
    enrollModalDesc: "Заполните поля, чтобы закрепить за собой место в мини-группе",
    enrollModalNameLabel: "Имя и фамилия",
    enrollModalNamePlaceholder: "Ваше полное имя",
    enrollModalPhoneLabel: "Телефон для связи",
    enrollModalCourseLabel: "Выбранная дисциплина",
    enrollModalOptEnglish: "Английский язык & IELTS",
    enrollModalOptBioChem: "Биология и Химия (Медицинский трек)",
    enrollModalOptMath: "Математика (SAT / Вступительные)",
    enrollModalOptGeneral: "Индивидуальный подбор программы",
    enrollModalCommentLabel: "Пожелания или вопрос (необязательно)",
    enrollModalCommentPlaceholder: "Например: подготовка к сдаче IELTS в декабре",
    enrollModalSubmit: "Подтвердить запись",

    certModalBadge: "CERTIFIED",
    certModalTeacherPrefix: "Преподаватель:",
    certModalIssuerLabel: "Выдан организацией:",
    certModalYearLabel: "Год сертификации:",
    certModalStatusLabel: "Статус верификации:",
    certModalVerified: "Подтвержден",
    certModalCloseBtn: "Закрыть просмотр",

    resultModalScoreLabel: "Результат / Оценка:",
    resultModalBoardLabel: "Экзаменационная комиссия:",
    resultModalDetailLabel: "Детализация баллов:",
    resultModalCtaBtn: "Хочу такой же результат",
    resultModalCloseBtn: "Закрыть",

    // Footer
    footerSubtitle: "Академический учебный центр",
    footerCopy: "© 2026 Учебный центр «STANFORD». Все права защищены.",
    footerPrivacy: "Политика конфиденциальности",
    footerTerms: "Договор оферты",
    mapPinLabel: "STANFORD CENTER"
  },

  en: {
    // Header & Navigation
    centerSubtitle: "Educational Center",
    navHome: "Home",
    navAbout: "About",
    navCourses: "Courses",
    navTeachers: "Faculty",
    navAlumni: "Alumni",
    navContacts: "Contacts",
    btnEnroll: "Enroll",
    themeToggleTitle: "Toggle theme (Light / Dark)",
    themeLight: "Light Theme",
    themeDark: "Dark Theme",
    langSelectTitle: "Select language",

    // Hero
    heroBadge: "Admission for the new academic semester is now open",
    heroTitlePrefix: "Your journey to world-class universities begins at",
    heroOffer: "A premier academic preparatory center for university applicants and high school students. Advanced <span class=\"text-neutral-900 dark:text-white font-medium\">English (IELTS)</span>, fundamental <span class=\"text-neutral-900 dark:text-white font-medium\">Biology & Chemistry</span> for medical tracks, and specialized <span class=\"text-neutral-900 dark:text-white font-medium\">Mathematics</span>.",
    heroCtaPrimary: "Book a Free Trial Lesson",
    heroCtaSecondary: "Explore Courses",
    heroStat1Label: "Admitted on full grants & scholarships",
    heroStat2Label: "Successful graduates of the center",
    heroStat3Label: "Average IELTS Band Score",
    heroStat4Label: "Years of academic leadership",
    heroStat4Val: "8+ yrs",

    // About
    aboutBadge: "ABOUT THE ACADEMY",
    aboutTitle: "Fundamental Rigor. <br /><span class=\"text-gradient-orange\">Measurable Results.</span>",
    aboutDesc: "Stanford Educational Center was established by faculty members from top global institutions with a singular purpose: empowering students with deep conceptual mastery and unshakable confidence for international and entrance examinations.",
    aboutFeature1Title: "Mini-groups up to 6 students",
    aboutFeature1Desc: "Personalized progress tracking for every student, periodic diagnostic assessments, and detailed reporting to parents.",
    aboutFeature2Title: "Proprietary methods & laboratories",
    aboutFeature2Desc: "Hands-on biochemical lab practicums, systematic dissection of authentic IELTS items, and Olympiad-level problems.",
    aboutMissionBadge: "Our Mission",
    aboutMissionText: "To nurture critical thinking and elevate students into the top 1% percentile worldwide.",
    aboutEnvBadge: "Learning Environment",
    aboutEnvText: "Modern lecture theaters, dedicated coworking quiet rooms, and 24/7 access to Stanford's private digital library.",
    aboutStatTeachers: "Certified Master Teachers",
    aboutStatSupport: "Dedicated Curator Support",
    aboutStatMock: "Official Mock Tests Every Saturday",

    // Courses
    coursesBadge: "ACADEMIC PROGRAMS",
    coursesTitle: "Curricula Engineered for <span class=\"text-gradient-orange\">Maximum Scores</span>",
    coursesDesc: "Intensive proprietary syllabus calibrated to the demands of contemporary international admissions tests.",
    coursesCardBtn: "Enroll in Program",
    
    // Course 1
    c1Track: "IELTS & General",
    c1Title: "English Language",
    c1Desc: "Comprehensive pathway from Beginner to Advanced (C1) plus a targeted sprint for IELTS 7.5–8.5+. Debate clubs with native speakers, academic writing workshops, and active listening drills.",
    c1FormatLabel: "Format:",
    c1FormatVal: "On-campus or Online (up to 6 students)",
    c1DurLabel: "Duration:",
    c1DurVal: "3 – 9 months (3x/week, 90 mins)",
    c1ScoreLabel: "Mock Test:",
    c1ScoreVal: "Complimentary every Saturday",

    // Course 2
    c2TopChoice: "Top Applicant Choice",
    c2Track: "Pre-Med Track",
    c2Title: "Biology & Chemistry",
    c2Desc: "Specialized preparatory track for future physicians, biomedical researchers, and pharmacologists. Advanced anatomy, human genetics, organic chemistry, problem-solving clinics, and lab practicums.",
    c2FormatLabel: "Format:",
    c2FormatVal: "Laboratory practicum on campus",
    c2DurLabel: "Duration:",
    c2DurVal: "6 – 12 months (4x/week)",
    c2ScoreLabel: "Outcome:",
    c2ScoreVal: "94% state scholarship admission",

    // Course 3
    c3Track: "SAT & Entrance",
    c3Title: "Mathematics",
    c3Desc: "Advanced high-tier mathematics: algebraic parameters, stereometry, combinatorics, probability theory, SAT Math prep, and entrance examinations for competitive STEM faculties (NU, HSE, MIPT).",
    c3FormatLabel: "Format:",
    c3FormatVal: "On-campus or Online intensive",
    c3DurLabel: "Duration:",
    c3DurVal: "4 – 8 months (3x/week, 90 mins)",
    c3ScoreLabel: "Average Score:",
    c3ScoreVal: "SAT Math 760+ / Top 1%",


    // Teachers
    teachersBadge: "EXPERT FACULTY",
    teachersTitle: "Stanford <span class=\"text-gradient-orange\">Faculty Mentors</span>",
    teachersDesc: "Instructors with international CELTA, DELTA, and PhD credentials, personal scores of IELTS 8.5 and SAT Math 800.",
    teachersCountInfo: "Showing {shown} of {total} faculty members",
    teachersBtnLoadMore: "Show more",
    teachersCertHeader: "Credentials & Honors",
    teachersCertHint: "click for details",
    teachersCardBtn: "Book Lesson with Instructor",

    // Alumni
    alumniBadge: "SUCCESS STORIES",
    alumniTitle: "Pride of the Academy: <span class=\"text-gradient-orange\">Our Alumni</span>",
    alumniDesc: "Actual students admitted on major grants to top-tier international universities with outstanding scorecards.",
    alumniGrantLabel: "Grant",

    a1Name: "Alisher Seitkaliyev",
    a1Uni: "University of Toronto (Canada)",
    a1Quote: "“I trained in Alexander Gromov's IELTS intensive. In 5 months, my Writing jumped from 6.0 to 7.5, resulting in an overall 8.0. I secured admission to Computer Science with a substantial scholarship.”",
    a1Major: "Major: Computer Science",
    a1Grant: "$42,000 Grant Award",

    a2Name: "Kamilla Valiyeva",
    a2Uni: "State Medical Academy (Full Grant)",
    a2Quote: "“Thanks to Stanford’s Biology and Chemistry track, I consolidated high-level theory and laboratory problem sets. A 189 score allowed me to enter top medical school with 100% tuition coverage.”",
    a2Major: "General Medicine",
    a2Grant: "100% State Scholarship",

    a3Name: "Arman Zhumabekov",
    a3Uni: "KAIST (South Korea)",
    a3Quote: "“Mathematics at Stanford fundamentally transformed how I deconstruct problems. I achieved a perfect 800 in SAT Math and received a full presidential scholarship at KAIST.”",
    a3Major: "Mechanical Eng.",
    a3Grant: "Full Ride Scholarship",

    a4Name: "Diana Kim",
    a4Uni: "Erasmus University Rotterdam",
    a4Quote: "“An extraordinary academic environment and passionate mentoring. I prepared for Academic Speaking and scored an astonishing 8.5 overall! Currently studying International Economics in the Netherlands.”",
    a4Major: "Economics & Business",
    a4Grant: "Tuition Exemption",

    // Work Results / Proofs
    resultsBadge: "Official Verifications",
    resultsTitle: "Work Artifacts & Verified Scorecards",
    resultsDesc: "Click on any document to inspect the authenticated evaluation report",
    res1Title: "IELTS Academic: 8.5",
    res1Sub: "Official Test Report Form (TRF)",
    res2Title: "SAT Math: 800/800",
    res2Sub: "College Board Official Scorecard",
    res3Title: "Olympiad 1st Degree Diploma",
    res3Sub: "Biology & Biochemistry",
    res4Title: "NUET Math: 100/100",
    res4Sub: "Nazarbayev University Entrance Test",

    // Contacts
    contactsBadge: "CONNECT WITH US",
    contactsTitle: "Contacts & Campus <span class=\"text-gradient-orange\">Location</span>",
    contactsDesc: "We invite you for an academic consultation and diagnostic level assessment.",
    contactAddressLabel: "Campus Address",
    contactAddressVal: "Almaty, Dostyk Ave 89, 'Stanford Plaza' BC, 4th Floor",
    contactMetroHint: "Near 'Abay' Metro Station (5 min walk)",
    contactPhoneLabel: "Direct Phone Line (Toll-Free)",
    contactHours: "Daily: 08:30 AM – 09:00 PM",
    contactEmailLabel: "Admissions Email",
    socialsLabel: "Official Social Channels",

    // Form
    formTitle: "Quick Consultation Booking",
    formSubtitle: "Leave your contact information — our advisor will reach out to you",
    formNameLabel: "Your Name",
    formNamePlaceholder: "e.g., Alexander",
    formPhoneLabel: "Phone Number",
    formCourseLabel: "Course of Interest",
    formCourseOptEnglish: "English Language (IELTS)",
    formCourseOptBioChem: "Biology & Chemistry (Pre-Med)",
    formCourseOptMath: "Mathematics (SAT / Entrance)",
    formCourseOptConsult: "Comprehensive Consultation",
    formFormatLabel: "Preferred Format",
    formFormatOptOffline: "On-campus in Almaty",
    formFormatOptOnline: "Interactive Online",
    formSubmitBtn: "Book Free Trial Lesson",
    formConsent: "By submitting, you consent to the processing of personal data. Strict confidentiality is guaranteed.",
    formSubmitting: "Submitting request...",
    formSuccessToast: "Application successfully submitted! A Stanford admissions advisor will contact you shortly.",
    quickSuccessToast: "Thank you for reaching out! Our team is dialing your number right now.",

    // Modals
    modalClose: "Close",
    enrollModalBadge: "STANFORD ACADEMY",
    enrollModalTitle: "Course Enrollment",
    enrollModalDesc: "Secure your place in an exclusive cohort (limited to 6 students)",
    enrollModalNameLabel: "Full Name",
    enrollModalNamePlaceholder: "Your full name",
    enrollModalPhoneLabel: "Contact Phone",
    enrollModalCourseLabel: "Academic Program",
    enrollModalOptEnglish: "English Language & IELTS",
    enrollModalOptBioChem: "Biology & Chemistry (Pre-Med Track)",
    enrollModalOptMath: "Mathematics (SAT / University Entrance)",
    enrollModalOptGeneral: "Individual Custom Program",
    enrollModalCommentLabel: "Comments or Target Goals (optional)",
    enrollModalCommentPlaceholder: "e.g., IELTS exam scheduled for December",
    enrollModalSubmit: "Confirm Enrollment",

    certModalBadge: "VERIFIED CREDENTIAL",
    certModalTeacherPrefix: "Faculty Instructor:",
    certModalIssuerLabel: "Issuing Authority:",
    certModalYearLabel: "Certification Year:",
    certModalStatusLabel: "Verification Status:",
    certModalVerified: "Officially Verified",
    certModalCloseBtn: "Close Document",

    resultModalScoreLabel: "Score / Grade:",
    resultModalBoardLabel: "Examination Board:",
    resultModalDetailLabel: "Section Breakdown:",
    resultModalCtaBtn: "I Want The Same Result",
    resultModalCloseBtn: "Close",

    // Footer
    footerSubtitle: "Academic Educational Center",
    footerCopy: "© 2026 STANFORD Educational Center. All rights reserved.",
    footerPrivacy: "Privacy Policy",
    footerTerms: "Terms of Service",
    mapPinLabel: "STANFORD CENTER"
  },

  uz: {
    // Header & Navigation
    centerSubtitle: "O'quv markazi",
    navHome: "Bosh sahifa",
    navAbout: "Biz haqimizda",
    navCourses: "Kurslar",
    navTeachers: "O'qituvchilar",
    navAlumni: "Bitiruvchilar",
    navContacts: "Aloqa",
    btnEnroll: "Yozilish",
    themeToggleTitle: "Mavzuni almashtirish (Yorug' / Qorong'i)",
    themeLight: "Yorug' mavzu",
    themeDark: "Qorong'i mavzu",
    langSelectTitle: "Tilni tanlash",

    // Hero
    heroBadge: "Yangi akademik semestr uchun qabul ochiq",
    heroTitlePrefix: "Jahonning nufuzli oliygohlariga yo'lingiz",
    heroOffer: "Abituriyentlar va maktab o'quvchilari uchun premium o'quv markazi. Chuqurlashtirilgan <span class=\"text-neutral-900 dark:text-white font-medium\">ingliz tili (IELTS)</span>, tibbiyot oliygohlari uchun fundamental <span class=\"text-neutral-900 dark:text-white font-medium\">biologiya va kimyo</span>, hamda ixtisoslashtirilgan <span class=\"text-neutral-900 dark:text-white font-medium\">matematika</span>.",
    heroCtaPrimary: "Bepul sinov darsiga yozilish",
    heroCtaSecondary: "Kurslar bilan tanishish",
    heroStat1Label: "Davlat granti va budjetga kirish",
    heroStat2Label: "Muvaffaqiyatli bitiruvchilar soni",
    heroStat3Label: "O'rtacha IELTS natijasi",
    heroStat4Label: "Akademik yetakchilik tajribasi",
    heroStat4Val: "8+ yil",

    // About
    aboutBadge: "O'QUV MARKAZI HAQIDA",
    aboutTitle: "Fundamental yondashuv. <br /><span class=\"text-gradient-orange\">Aniq natija.</span>",
    aboutDesc: "«Stanford» o'quv markazi xalqaro nufuzli oliy o'quv yurtlari ustozlari tomonidan yagona maqsad bilan tashkil etilgan: har bir talabaga kuchli akademik bilim poydevori va murakkab imtihonlarda yuqori ishonch bag'ishlash.",
    aboutFeature1Title: "6 nafargacha mini-guruhlar",
    aboutFeature1Desc: "Har bir o'quvchining shaxsiy rivojlanish monitoringi, haftalik bilim nazorati va ota-onalar bilan muntazam hisobot.",
    aboutFeature2Title: "Mualliflik metodikasi va laboratoriyalar",
    aboutFeature2Desc: "Kimyo va biologiyadan amaliy tajribalar, real IELTS topshiriqlari hamda olimpiada masalalari chuqur tahlili.",
    aboutMissionBadge: "Bizning missiyamiz",
    aboutMissionText: "Tanqidiy fikrlashni shakllantirish va abituriyentlarni global reytingning eng kuchli 1% safiga olib chiqish.",
    aboutEnvBadge: "Ta'lim muhiti",
    aboutEnvText: "Zamonaviy lektoriyalar, mustaqil ta'lim uchun kovorking maydoni va Stanfordning yopiq raqamli kutubxonasiga 24/7 kirish.",
    aboutStatTeachers: "Sertifikatlangan ustozlar",
    aboutStatSupport: "Kuratorlik yordami",
    aboutStatMock: "Har shanba sinov imtihonlari",

    // Courses
    coursesBadge: "O'QUV DASTURLARI",
    coursesTitle: "Maksimal ballarga erishish uchun <span class=\"text-gradient-orange\">kurslar</span>",
    coursesDesc: "Zamonaviy xalqaro va kirish imtihonlari talablariga to'liq moslashtirilgan intensiv mualliflik dasturlari.",
    coursesCardBtn: "Kursga yozilish",
    
    // Course 1
    c1Track: "IELTS & General",
    c1Title: "Ingliz tili",
    c1Desc: "Beginner darajasidan Advanced (C1) darajagacha kompleks tayyorgarlik va IELTS 7.5+ topshirishga yo'naltirilgan intensiv. Chet ellik ustozlar bilan Speaking Club, Academic Writing va Listening mashg'ulotlari.",
    c1FormatLabel: "Format:",
    c1FormatVal: "Oflayn yoki Onlayn (6 kishigacha)",
    c1DurLabel: "Davomiyligi:",
    c1DurVal: "3 – 9 oy (haftasiga 3 marta 90 daq)",
    c1ScoreLabel: "Mock Test:",
    c1ScoreVal: "Har shanba mutlaqo bepul",

    // Course 2
    c2TopChoice: "Abituriyentlar tanlovi",
    c2Track: "Tibbiyot yo'nalishi",
    c2Title: "Biologiya va Kimyo",
    c2Desc: "Bo'lajak shifokorlar, bioximiklar va farmatsevtlar uchun maxsus tayyorgarlik dasturi. Anatomiya, genetika, organik kimyo, murakkab hisob-kitob masalalari va laboratoriya mashg'ulotlari.",
    c2FormatLabel: "Format:",
    c2FormatVal: "Laboratoriyada oflayn amaliyot",
    c2DurLabel: "Davomiyligi:",
    c2DurVal: "6 – 12 oy (haftasiga 4 marta)",
    c2ScoreLabel: "Natija:",
    c2ScoreVal: "94% davlat granti asosida qabul",

    // Course 3
    c3Track: "SAT & Kirish imtihonlari",
    c3Title: "Matematika",
    c3Desc: "Eng yuqori darajadagi profilli matematika: parametrlar, stereometriya, kombinatorika, ehtimollar nazariyasi, SAT Math hamda texnika oliygohlariga (NU, O'zMU, MIPT, HSE) kirish imtihonlariga tayyorlov.",
    c3FormatLabel: "Format:",
    c3FormatVal: "Oflayn yoki Onlayn intensiv",
    c3DurLabel: "Davomiyligi:",
    c3DurVal: "4 – 8 oy (haftasiga 3 marta 90 daq)",
    c3ScoreLabel: "O'rtacha ball:",
    c3ScoreVal: "SAT Math 760+ / DTM 100%",


    // Teachers
    teachersBadge: "EKSPERT O'QITUVCHILAR",
    teachersTitle: "Stanford <span class=\"text-gradient-orange\">ustozlari</span>",
    teachersDesc: "Xalqaro CELTA, PhD darajalariga ega, shaxsiy ko'rsatkichlari IELTS 8.5 va SAT Math 800 bo'lgan tajribali ustozlar.",
    teachersCountInfo: "{total} ustozdan {shown} tasi ko'rsatilmoqda",
    teachersBtnLoadMore: "Ko'proq ko'rsatish",
    teachersCertHeader: "Sertifikatlar va yutuqlar",
    teachersCertHint: "batafsil ma'lumot",
    teachersCardBtn: "Ustozga darsga yozilish",

    // Alumni
    alumniBadge: "MUVAFFAQIYAT HIKOYALARI",
    alumniTitle: "Markazimiz faxri: <span class=\"text-gradient-orange\">bitiruvchilarimiz</span>",
    alumniDesc: "Dunyoning yetakchi universitetlariga grant asosida qabul qilingan va eng yuqori ball to'plagan haqiqiy talabalar.",
    alumniGrantLabel: "Grant",

    a1Name: "Alisher Seitkaliyev",
    a1Uni: "University of Toronto (Kanada)",
    a1Quote: "«Aleksandr Gromovning IELTS intensiv kursida tahsil oldim. 5 oy ichida Writing balimni 6.0 dan 7.5 ga ko'tarib, umumiy 8.0 oldim. Computer Science fakultetiga grant bilan kirdim.»",
    a1Major: "Mutaxassislik: CS",
    a1Grant: "$42,000 Grant",

    a2Name: "Kamilla Valiyeva",
    a2Uni: "Davlat Tibbiyot Akademiyasi (Grant)",
    a2Quote: "«Stanforddagi biologiya va kimyo kursi yordamida bilimlarimni tizimlashtirdim va testlarni yechish tezligini oshirdim. 189 ball to'plab, eng yaxshi tibbiyot oliygohiga to'liq budjetga kirdim.»",
    a2Major: "Davolash ishi",
    a2Grant: "100% Davlat Granti",

    a3Name: "Arman Zhumabekov",
    a3Uni: "KAIST (Janubiy Koreya)",
    a3Quote: "«Stanforddagi matematika darslari masalalarni yechishga bo'lgan qarashimni o'zgartirdi. SAT Math bo'yicha maksimal 800 ball olib, Janubiy Koreyaning KAIST institutiga to'liq grantga kirdim.»",
    a3Major: "Mexanika muhandisligi",
    a3Grant: "To'liq Grant",

    a4Name: "Diana Kim",
    a4Uni: "Erasmus University Rotterdam",
    a4Quote: "«Ajoyib muhit va ustozlarning doimiy yordami. Academic Speakingga puxta tayyorlanib, 8.5 ball oldim! Hozirda Niderlandiyada International Business dasturida tahsil olyapman.»",
    a4Major: "Iqtisodiyot",
    a4Grant: "Budjet asosida qabul",

    // Work Results / Proofs
    resultsBadge: "Rasmiy tasdiqlar",
    resultsTitle: "Bitiruvchilar natijalari va sertifikatlar",
    resultsDesc: "Batafsil hisobotni ko'rish uchun sertifikat ustiga bosing",
    res1Title: "IELTS Academic: 8.5",
    res1Sub: "Rasmiy TRF sertifikati",
    res2Title: "SAT Math: 800/800",
    res2Sub: "College Board rasmiy hisoboti",
    res3Title: "I darajali olimpiada diplomi",
    res3Sub: "Biologiya va kimyo",
    res4Title: "NUET Math: 100/100",
    res4Sub: "NU kirish imtihoni natijasi",

    // Contacts
    contactsBadge: "BIZ BILAN ALOQA",
    contactsTitle: "Stanford manzili va <span class=\"text-gradient-orange\">aloqa</span>",
    contactsDesc: "Sizni shaxsiy konsultatsiya va bilim darajasini aniqlash testiga taklif qilamiz.",
    contactAddressLabel: "O'quv markazi manzili",
    contactAddressVal: "Olmaota shahri, Do'stlik shoh ko'chasi 89, 'Stanford Plaza' BM, 4-qavat",
    contactMetroHint: "'Abay' metro bekati yaqinida (5 daqiqa piyoda)",
    contactPhoneLabel: "To'g'ridan-to'g'ri telefon (qo'ng'iroq bepul)",
    contactHours: "Har kuni: 08:30 – 21:00",
    contactEmailLabel: "Elektron pochta",
    socialsLabel: "Rasmiy ijtimoiy tarmoqlar",

    // Form
    formTitle: "Konsultatsiyaga tezkor yozilish",
    formSubtitle: "Aloqa ma'lumotlaringizni qoldiring — mutaxassisimiz siz bilan bog'lanadi",
    formNameLabel: "Ismingiz",
    formNamePlaceholder: "Masalan, Jasur",
    formPhoneLabel: "Telefon raqamingiz",
    formCourseLabel: "Qiziqtirgan kurs",
    formCourseOptEnglish: "Ingliz tili (IELTS)",
    formCourseOptBioChem: "Biologiya va Kimyo (Tibbiyot)",
    formCourseOptMath: "Matematika (SAT / Kirish)",
    formCourseOptConsult: "Umumiy konsultatsiya",
    formFormatLabel: "Qulay format",
    formFormatOptOffline: "Markazda oflayn (Olmaota)",
    formFormatOptOnline: "Masofaviy onlayn",
    formSubmitBtn: "Bepul sinov darsiga yozilish",
    formConsent: "Tugmani bosish orqali siz shaxsiy ma'lumotlarni qayta ishlashga rozilik bildirasiz. Maxfiylik kafolatlanadi.",
    formSubmitting: "So'rov yuborilmoqda...",
    formSuccessToast: "Arizangiz muvaffaqiyatli qabul qilindi! Stanford koordinatori tez orada siz bilan bog'lanadi.",
    quickSuccessToast: "Murojaatingiz uchun rahmat! Mutaxassisimiz hoziroq sizga qo'ng'iroq qiladi.",

    // Modals
    modalClose: "Yopish",
    enrollModalBadge: "STANFORD AKADEMIYASI",
    enrollModalTitle: "Kursga yozilish",
    enrollModalDesc: "Mini-guruhda o'z o'rningizni band qilish uchun ma'lumotlarni to'ldiring",
    enrollModalNameLabel: "Ism va familiya",
    enrollModalNamePlaceholder: "To'liq ismingiz",
    enrollModalPhoneLabel: "Aloqa uchun telefon",
    enrollModalCourseLabel: "Tanlangan yo'nalish",
    enrollModalOptEnglish: "Ingliz tili & IELTS",
    enrollModalOptBioChem: "Biologiya va Kimyo (Tibbiyot yo'nalishi)",
    enrollModalOptMath: "Matematika (SAT / Kirish imtihonlari)",
    enrollModalOptGeneral: "Shaxsiy dastur tanlash",
    enrollModalCommentLabel: "Istak yoki savolingiz (ixtiyoriy)",
    enrollModalCommentPlaceholder: "Masalan: dekabr oyida IELTS topshirishga tayyorgarlik",
    enrollModalSubmit: "Yozilishni tasdiqlash",

    certModalBadge: "TASDIQLANGAN",
    certModalTeacherPrefix: "O'qituvchi:",
    certModalIssuerLabel: "Bergan tashkilot:",
    certModalYearLabel: "Sertifikat yili:",
    certModalStatusLabel: "Tekshiruv holati:",
    certModalVerified: "Rasman tasdiqlangan",
    certModalCloseBtn: "Yopish",

    resultModalScoreLabel: "Natija / Ball:",
    resultModalBoardLabel: "Imtihon komissiyasi:",
    resultModalDetailLabel: "Ballar tafsiloti:",
    resultModalCtaBtn: "Men ham shunday natija xohlayman",
    resultModalCloseBtn: "Yopish",

    // Footer
    footerSubtitle: "Akademik o'quv markazi",
    footerCopy: "© 2026 «STANFORD» o'quv markazi. Barcha huquqlar himoyalangan.",
    footerPrivacy: "Maxfiylik siyosati",
    footerTerms: "Ommaviy oferta",
    mapPinLabel: "STANFORD CENTER"
  }
};

// Teacher data across 3 languages
const multilingualTeachers = {
  ru: [
    {
      id: 1,
      name: "Александр Громов",
      subject: "Английский язык",
      experience: "Опыт 9 лет",
      badgeText: "Английский язык • Опыт 9 лет",
      photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
      bio: "Старший методист направления English. Подготовил более 280 студентов к сдаче IELTS на 7.5+. Регулярно проходит международные стажировки в Великобритании.",
      certificates: [
        { name: "IELTS Academic 8.5 (L:9.0, R:9.0)", issuer: "British Council", year: "2023", badge: "IELTS 8.5" },
        { name: "Cambridge CELTA (Grade A)", issuer: "Cambridge Assessment English", year: "2021", badge: "CELTA Pass A" },
        { name: "Delta Module 1 Certification", issuer: "Cambridge English", year: "2022", badge: "DELTA" }
      ]
    },
    {
      id: 2,
      name: "Д-р Елена Миронова",
      subject: "Биология и Анатомия",
      experience: "Опыт 12 лет",
      badgeText: "Биология • Опыт 12 лет",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
      bio: "Кандидат биологических наук, доцент. Эксперт по подготовке абитуриентов в медицинские университеты и к республиканским олимпиадам.",
      certificates: [
        { name: "Диплом Кандидата Биологических Наук", issuer: "ВАК / АН", year: "2018", badge: "PhD Biology" },
        { name: "Член жюри Республиканской олимпиады", issuer: "Министерство образования", year: "2021-2025", badge: "Эксперт олимпиад" },
        { name: "Методика преподавания биомедицины", issuer: "Сеченовский Университет", year: "2023", badge: "Med Track" }
      ]
    },
    {
      id: 3,
      name: "Михаил Савельев",
      subject: "Высшая Математика",
      experience: "Опыт 8 лет",
      badgeText: "Математика • Опыт 8 лет",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
      bio: "Выпускник механико-математического факультета, автор методики решения олимпиадных и вступительных задач. 42 ученика сдали SAT Math на 800 баллов.",
      certificates: [
        { name: "SAT Mathematics Subject: 800/800", issuer: "College Board USA", year: "2022", badge: "SAT Math 800" },
        { name: "Призер Международной олимпиады (IZhO)", issuer: "IZhO Committee", year: "2019", badge: "IZhO Winner" },
        { name: "Эксперт вступительных тестирований", issuer: "Центр Тестирования", year: "2024", badge: "Эксперт NUET/ЕНТ" }
      ]
    },
    {
      id: 4,
      name: "София Андерсон",
      subject: "Химия и Биохимия",
      experience: "Опыт 7 лет",
      badgeText: "Химия • Опыт 7 лет",
      photo: "https://images.unsplash.com/photo-1580894732454-defbe4fe8a04?auto=format&fit=crop&w=600&q=80",
      bio: "Магистр биоорганической химии. Автор интенсивного курса 'Химия с нуля до 95+ баллов за 6 месяцев'. 93% учеников поступают на бюджетные отделения.",
      certificates: [
        { name: "Диплом магистра химии с отличием", issuer: "КазНУ / МГУ", year: "2020", badge: "MSc Chemistry" },
        { name: "Сертификат тренера по химии", issuer: "Менделеевская олимпиада", year: "2023", badge: "Mendeleev Trainer" },
        { name: "Advanced Biochemistry Pedagogy", issuer: "Coursera / Johns Hopkins", year: "2022", badge: "BioChem Cert" }
      ]
    },
    {
      id: 5,
      name: "Данияр Каримов",
      subject: "Английский & Academic Writing",
      experience: "Опыт 6 лет",
      badgeText: "Английский язык • Опыт 6 лет",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
      bio: "Специалист по академическому письму и подготовке к зарубежным университетам (Лига Плюща, Russell Group). Степень Master of Science (Edinburgh).",
      certificates: [
        { name: "IELTS Academic 8.5 (Writing: 8.5)", issuer: "IDP Education", year: "2023", badge: "IELTS 8.5" },
        { name: "Master of Science in Education", issuer: "University of Edinburgh", year: "2021", badge: "Edinburgh MSc" },
        { name: "TESOL 150-hour Advanced Certificate", issuer: "World TESOL Academy", year: "2020", badge: "TESOL 150h" }
      ]
    },
    {
      id: 6,
      name: "Анна Белова",
      subject: "Профильная Математика",
      experience: "Опыт 10 лет",
      badgeText: "Математика • Опыт 10 лет",
      photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
      bio: "Ведущий преподаватель вступительных программ. Специализируется на геометрии, стереометрии и параметрических уравнениях повышенной сложности.",
      certificates: [
        { name: "Почетный педагог естественных наук", issuer: "Ассоциация педагогов", year: "2023", badge: "Top Educator" },
        { name: "Сертификация 'Сложные задачи стереометрии'", issuer: "Институт Развития Образования", year: "2022", badge: "Math Geometry" },
        { name: "Подготовка победителей олимпиад", issuer: "Городской отдел образования", year: "2024", badge: "Olympiad Coach" }
      ]
    },
    {
      id: 7,
      name: "Роберт Чен",
      subject: "Разговорный Английский (Native)",
      experience: "Опыт 8 лет",
      badgeText: "Английский язык • Опыт 8 лет",
      photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
      bio: "Преподаватель из Ванкувера (Канада). Ведет разговорные клубы, готовит к академическим собеседованиям и визовым интервью посольств.",
      certificates: [
        { name: "Cambridge CELTA Pass A", issuer: "University of Cambridge", year: "2019", badge: "CELTA (Pass A)" },
        { name: "BA in Communication & Linguistics", issuer: "University of British Columbia", year: "2017", badge: "UBC Degree" },
        { name: "Interview Preparation Specialist", issuer: "Global Education Network", year: "2023", badge: "Interview Coach" }
      ]
    },
    {
      id: 8,
      name: "Татьяна Волкова",
      subject: "Генетика и Биология",
      experience: "Опыт 11 лет",
      badgeText: "Биология • Опыт 11 лет",
      photo: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=600&q=80",
      bio: "Преподаватель молекулярной биологии и генетики. Помогла поступить более 150 ученикам в ведущие медицинские вузы СНГ и Европы.",
      certificates: [
        { name: "Магистр молекулярной биологии", issuer: "Национальный Университет", year: "2017", badge: "MSc Genetics" },
        { name: "Эксперт олимпиадных тестов по биохимии", issuer: "Научный комитет", year: "2022", badge: "Genetics Expert" },
        { name: "Автор пособия 'Сборник задач по генетике'", issuer: "Издательство Stanford", year: "2024", badge: "Author 2024" }
      ]
    },
    {
      id: 9,
      name: "Артем Романов",
      subject: "Олимпиадная Математика & SAT",
      experience: "Опыт 6 лет",
      badgeText: "Математика • Опыт 6 лет",
      photo: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80",
      bio: "Специалист по дискретной математике, алгоритмам и олимпиадной логике. Готовит к поступлению на факультеты Computer Science и Data Science.",
      certificates: [
        { name: "Диплом бакалавра прикладной математики МФТИ", issuer: "МФТИ", year: "2020", badge: "MIPT Math" },
        { name: "SAT Subject Test Math Level 2: 800/800", issuer: "College Board", year: "2021", badge: "SAT Math 800" },
        { name: "Финалист Всероссийской олимпиады по математике", issuer: "Оргкомитет ВКОШП", year: "2023", badge: "Olympiad Finalist" }
      ]
    }
  ],

  en: [
    {
      id: 1,
      name: "Alexander Gromov",
      subject: "English & IELTS Expert",
      experience: "9 Years Experience",
      badgeText: "English • 9 Yrs Experience",
      photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
      bio: "Senior Academic Coordinator for English. Mentored over 280 students to IELTS 7.5+. Regularly completes advanced pedagogical training in the UK.",
      certificates: [
        { name: "IELTS Academic 8.5 (L:9.0, R:9.0)", issuer: "British Council", year: "2023", badge: "IELTS 8.5" },
        { name: "Cambridge CELTA (Grade A)", issuer: "Cambridge Assessment English", year: "2021", badge: "CELTA Pass A" },
        { name: "Delta Module 1 Certification", issuer: "Cambridge English", year: "2022", badge: "DELTA" }
      ]
    },
    {
      id: 2,
      name: "Dr. Elena Mironova",
      subject: "Biology & Human Anatomy",
      experience: "12 Years Experience",
      badgeText: "Biology • 12 Yrs Experience",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
      bio: "PhD in Biological Sciences, Associate Professor. Foremost expert in prepping candidates for top medical colleges and national academic olympiads.",
      certificates: [
        { name: "Candidate of Biological Sciences Diploma (PhD)", issuer: "National Science Committee", year: "2018", badge: "PhD Biology" },
        { name: "National Biology Olympiad Jury Member", issuer: "Ministry of Education", year: "2021-2025", badge: "Olympiad Judge" },
        { name: "Biomedical Pedagogy Advanced Specialist", issuer: "Sechenov Medical University", year: "2023", badge: "Med Track" }
      ]
    },
    {
      id: 3,
      name: "Mikhail Savelyev",
      subject: "Advanced Mathematics & SAT",
      experience: "8 Years Experience",
      badgeText: "Mathematics • 8 Yrs Experience",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
      bio: "Faculty of Mechanics & Mathematics honors alumnus. Author of rapid-breakdown method for entrance problems; 42 students attained perfect 800 SAT Math scores.",
      certificates: [
        { name: "SAT Mathematics Subject: 800/800", issuer: "College Board USA", year: "2022", badge: "SAT Math 800" },
        { name: "International Zhautykov Olympiad Laureate", issuer: "IZhO Committee", year: "2019", badge: "IZhO Winner" },
        { name: "University Entrance Testing Senior Evaluator", issuer: "Testing Center", year: "2024", badge: "NUET / SAT Expert" }
      ]
    },
    {
      id: 4,
      name: "Sofia Anderson",
      subject: "Chemistry & Biochemistry",
      experience: "7 Years Experience",
      badgeText: "Chemistry • 7 Yrs Experience",
      photo: "https://images.unsplash.com/photo-1580894732454-defbe4fe8a04?auto=format&fit=crop&w=600&q=80",
      bio: "MSc in Bio-organic Chemistry. Creator of intensive 'Chemistry from Fundamentals to 95+ in 6 Months'. 93% of graduates enter state-funded degree seats.",
      certificates: [
        { name: "Master of Science in Chemistry with Distinction", issuer: "KazNU / MSU", year: "2020", badge: "MSc Chemistry" },
        { name: "Certified International Chemistry Olympiad Coach", issuer: "Mendeleev Olympiad", year: "2023", badge: "Mendeleev Trainer" },
        { name: "Advanced Biochemistry Pedagogy", issuer: "Coursera / Johns Hopkins", year: "2022", badge: "BioChem Cert" }
      ]
    },
    {
      id: 5,
      name: "Daniyar Karimov",
      subject: "English & Academic Writing",
      experience: "6 Years Experience",
      badgeText: "English • 6 Yrs Experience",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
      bio: "Specialist in Academic Writing and application essays for Ivy League and Russell Group universities. Holds an MSc in Education from University of Edinburgh.",
      certificates: [
        { name: "IELTS Academic 8.5 (Writing: 8.5)", issuer: "IDP Education", year: "2023", badge: "IELTS 8.5" },
        { name: "Master of Science in Education", issuer: "University of Edinburgh", year: "2021", badge: "Edinburgh MSc" },
        { name: "TESOL 150-hour Advanced Certificate", issuer: "World TESOL Academy", year: "2020", badge: "TESOL 150h" }
      ]
    },
    {
      id: 6,
      name: "Anna Belova",
      subject: "Specialized Mathematics",
      experience: "10 Years Experience",
      badgeText: "Mathematics • 10 Yrs Experience",
      photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
      bio: "Lead educator for university admissions. Focuses on spatial geometry, analytical trigonometry, and high-difficulty algebraic parameter systems.",
      certificates: [
        { name: "Distinguished Educator of Exact Sciences", issuer: "Pedagogical Association", year: "2023", badge: "Top Educator" },
        { name: "Advanced Solid Geometry Problems Certification", issuer: "Institute of Education", year: "2022", badge: "Math Geometry" },
        { name: "City & National Olympiad Coach Award", issuer: "Department of Education", year: "2024", badge: "Olympiad Coach" }
      ]
    },
    {
      id: 7,
      name: "Robert Chen",
      subject: "Conversational English (Native)",
      experience: "8 Years Experience",
      badgeText: "English • 8 Yrs Experience",
      photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
      bio: "Native speaker from Vancouver, Canada. Directs intensive speaking clubs, academic interview simulations, and visa counseling protocols.",
      certificates: [
        { name: "Cambridge CELTA Pass A", issuer: "University of Cambridge", year: "2019", badge: "CELTA (Pass A)" },
        { name: "BA in Communication & Linguistics", issuer: "University of British Columbia", year: "2017", badge: "UBC Degree" },
        { name: "Global Interview Preparation Specialist", issuer: "Global Education Network", year: "2023", badge: "Interview Coach" }
      ]
    },
    {
      id: 8,
      name: "Tatyana Volkova",
      subject: "Genetics & Cellular Biology",
      experience: "11 Years Experience",
      badgeText: "Biology • 11 Yrs Experience",
      photo: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=600&q=80",
      bio: "Molecular biology and genetics faculty mentor. Has guided over 150 students into premier medical and pharmacological academies in Europe and the CIS.",
      certificates: [
        { name: "Master of Science in Molecular Biology", issuer: "National University", year: "2017", badge: "MSc Genetics" },
        { name: "Biochemistry Olympiad Expert Committee", issuer: "Scientific Board", year: "2022", badge: "Genetics Expert" },
        { name: "Author of 'Advanced Genetics Problem Collection'", issuer: "Stanford Academic Press", year: "2024", badge: "Author 2024" }
      ]
    },
    {
      id: 9,
      name: "Artem Romanov",
      subject: "Olympiad Math & Computer Science",
      experience: "6 Years Experience",
      badgeText: "Mathematics • 6 Yrs Experience",
      photo: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80",
      bio: "Discrete math and algorithm logic coach. Trains candidates entering top CS and AI programs at MIPT, HSE, and international engineering schools.",
      certificates: [
        { name: "Bachelor in Applied Mathematics & Physics", issuer: "MIPT", year: "2020", badge: "MIPT Math" },
        { name: "SAT Subject Test Math Level 2: 800/800", issuer: "College Board", year: "2021", badge: "SAT Math 800" },
        { name: "All-Russian Team Olympiad Finalist", issuer: "VKOSH Committee", year: "2023", badge: "Olympiad Finalist" }
      ]
    }
  ],

  uz: [
    {
      id: 1,
      name: "Aleksandr Gromov",
      subject: "Ingliz tili & IELTS",
      experience: "9 yillik tajriba",
      badgeText: "Ingliz tili • 9 yillik tajriba",
      photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
      bio: "English yo'nalishi bo'yicha bosh metodist. 280 dan ortiq talabani IELTS 7.5+ ga tayyorlagan. Buyuk Britaniyada xalqaro malaka oshirgan.",
      certificates: [
        { name: "IELTS Academic 8.5 (L:9.0, R:9.0)", issuer: "British Council", year: "2023", badge: "IELTS 8.5" },
        { name: "Cambridge CELTA (Grade A)", issuer: "Cambridge Assessment English", year: "2021", badge: "CELTA Pass A" },
        { name: "Delta Module 1 Certification", issuer: "Cambridge English", year: "2022", badge: "DELTA" }
      ]
    },
    {
      id: 2,
      name: "D-r Elena Mironova",
      subject: "Biologiya & Anatomiya",
      experience: "12 yillik tajriba",
      badgeText: "Biologiya • 12 yillik tajriba",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
      bio: "Biologiya fanlari nomzodi (PhD), dotsent. Abituriyentlarni tibbiyot universitetlari hamda respublika olimpiadalariga tayyorlash bo'yicha yetakchi ekspert.",
      certificates: [
        { name: "Biologiya fanlari nomzodi diplomi (PhD)", issuer: "OAK / Fanlar Akademiyasi", year: "2018", badge: "PhD Biology" },
        { name: "Respublika olimpiadasi hakamlar hay'ati a'zosi", issuer: "Ta'lim vazirligi", year: "2021-2025", badge: "Olimpiada hakam" },
        { name: "Biotibbiyot o'qitish metodikasi", issuer: "Sechenov universiteti", year: "2023", badge: "Med Track" }
      ]
    },
    {
      id: 3,
      name: "Mixail Savelyev",
      subject: "Oliy Matematika & SAT",
      experience: "8 yillik tajriba",
      badgeText: "Matematika • 8 yillik tajriba",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
      bio: "Mexanika-matematika fakulteti bitiruvchisi. Masalalarni tezkor yechish mualliflik metodikasi asoschisi. 42 nafar shogirdi SAT Mathdan 800 ball olgan.",
      certificates: [
        { name: "SAT Mathematics Subject: 800/800", issuer: "College Board USA", year: "2022", badge: "SAT Math 800" },
        { name: "Xalqaro Jautikov olimpiadasi sovrindori", issuer: "IZhO qo'mitasi", year: "2019", badge: "IZhO sovrindori" },
        { name: "Kirish testlari bosh eksperti", issuer: "Test Markazi", year: "2024", badge: "NUET / SAT Ekspert" }
      ]
    },
    {
      id: 4,
      name: "Sofiya Anderson",
      subject: "Kimyo & Bioximiya",
      experience: "7 yillik tajriba",
      badgeText: "Kimyo • 7 yillik tajriba",
      photo: "https://images.unsplash.com/photo-1580894732454-defbe4fe8a04?auto=format&fit=crop&w=600&q=80",
      bio: "Bioorganik kimyo bo'yicha magistr. 'Kimyo 6 oyda noldan 95+ gacha' kursi muallifi. Shogirdlarining 93% davlat grantiga qabul qilinadi.",
      certificates: [
        { name: "Kimyo magistri diplomi (Imtiyozli)", issuer: "QazMU / MGU", year: "2020", badge: "MSc Chemistry" },
        { name: "Xalqaro Mendeleyev olimpiadasi murabbiyi", issuer: "Mendeleyev qo'mitasi", year: "2023", badge: "Mendeleev Trainer" },
        { name: "Advanced Biochemistry Pedagogy", issuer: "Coursera / Johns Hopkins", year: "2022", badge: "BioChem Cert" }
      ]
    },
    {
      id: 5,
      name: "Daniyar Karimov",
      subject: "Ingliz tili & Academic Writing",
      experience: "6 yillik tajriba",
      badgeText: "Ingliz tili • 6 yillik tajriba",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
      bio: "Akademik insho yozish va xorijiy top-universitetlar (Ivy League, Russell Group) bo'yicha mutaxassis. Edinburg Universiteti magistri.",
      certificates: [
        { name: "IELTS Academic 8.5 (Writing: 8.5)", issuer: "IDP Education", year: "2023", badge: "IELTS 8.5" },
        { name: "Master of Science in Education", issuer: "University of Edinburgh", year: "2021", badge: "Edinburgh MSc" },
        { name: "TESOL 150-hour Advanced Certificate", issuer: "World TESOL Academy", year: "2020", badge: "TESOL 150h" }
      ]
    },
    {
      id: 6,
      name: "Anna Belova",
      subject: "Profilli Matematika",
      experience: "10 yillik tajriba",
      badgeText: "Matematika • 10 yillik tajriba",
      photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
      bio: "Kirish imtihonlari bo'yicha yetakchi ustoz. Geometriya, fazoviy masalalar va murakkab parametrli tenglamalar mutaxassisi.",
      certificates: [
        { name: "Aniq fanlar bo'yicha faxriy pedagog", issuer: "Pedagoglar uyushmasi", year: "2023", badge: "Top Educator" },
        { name: "Murakkab fazoviy geometriya sertifikati", issuer: "Ta'limni rivojlantirish instituti", year: "2022", badge: "Math Geometry" },
        { name: "Shahar va respublika olimpiada murabbiyi", issuer: "Ta'lim boshqarmasi", year: "2024", badge: "Olympiad Coach" }
      ]
    },
    {
      id: 7,
      name: "Robert Chen",
      subject: "So'zlashuv Ingliz tili (Native)",
      experience: "8 yillik tajriba",
      badgeText: "Ingliz tili • 8 yillik tajriba",
      photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
      bio: "Vankuverdan (Kanada) chet ellik ustoz. Speaking klublarni boshqaradi, elchixona va xalqaro universitetlar intervyulariga tayyorlaydi.",
      certificates: [
        { name: "Cambridge CELTA Pass A", issuer: "University of Cambridge", year: "2019", badge: "CELTA (Pass A)" },
        { name: "BA in Communication & Linguistics", issuer: "University of British Columbia", year: "2017", badge: "UBC Degree" },
        { name: "Xalqaro suhbatlarga tayyorlov mutaxassisi", issuer: "Global Education Network", year: "2023", badge: "Interview Coach" }
      ]
    },
    {
      id: 8,
      name: "Tatyana Volkova",
      subject: "Genetika & Hujayra Biologiyasi",
      experience: "11 yillik tajriba",
      badgeText: "Biologiya • 11 yillik tajriba",
      photo: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=600&q=80",
      bio: "Molekulyar biologiya va genetika o'qituvchisi. 150 dan ortiq shogirdlariga Yevropa va MDHdagi nufuzli tibbiyot oliygohlariga kirishga yordam bergan.",
      certificates: [
        { name: "Molekulyar biologiya magistri", issuer: "Milliy Universitet", year: "2017", badge: "MSc Genetics" },
        { name: "Biokimyo olimpiada eksperti", issuer: "Ilmiy Kengash", year: "2022", badge: "Genetics Expert" },
        { name: "'Genetika masalalar to'plami' qo'llanmasi muallifi", issuer: "Stanford nashriyoti", year: "2024", badge: "Author 2024" }
      ]
    },
    {
      id: 9,
      name: "Artyom Romanov",
      subject: "Olimpiada Matematikasi & IT",
      experience: "6 yillik tajriba",
      badgeText: "Matematika • 6 yillik tajriba",
      photo: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80",
      bio: "Diskret matematika, algoritmlar va mantiq mutaxassisi. Talabalarni xalqaro Computer Science va Sun'iy intellekt fakultetlariga tayyorlaydi.",
      certificates: [
        { name: "Amaliy matematika bakalavri (MIPT)", issuer: "MIPT", year: "2020", badge: "MIPT Math" },
        { name: "SAT Subject Test Math Level 2: 800/800", issuer: "College Board", year: "2021", badge: "SAT Math 800" },
        { name: "Butunrossiya matematika jamoaviy olimpiadasi finalchisi", issuer: "VKOSH qo'mitasi", year: "2023", badge: "Olympiad Finalist" }
      ]
    }
  ]
};

// Export to window
window.translations = translations;
window.multilingualTeachers = multilingualTeachers;
