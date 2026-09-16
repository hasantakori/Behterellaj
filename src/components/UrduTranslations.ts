export interface TranslationDict {
  siteName: string;
  tagline: string;
  subTagline: string;
  findDoctor: string;
  findHospital: string;
  specialties: string;
  services: string;
  library: string;
  aboutUs: string;
  forDoctors: string;
  bookAppointment: string;
  login: string;
  register: string;
  heroHeadline: string;
  heroSubtitle: string;
  searchPlaceholder: string;
  cityPlaceholder: string;
  searchBtn: string;
  popularSpecialties: string;
  trustVerified: string;
  trustHospitals: string;
  trustCities: string;
  trustSupport: string;
  howItWorks: string;
  step1Title: string;
  step1Desc: string;
  step2Title: string;
  step2Desc: string;
  step3Title: string;
  step3Desc: string;
  step4Title: string;
  step4Desc: string;
  specialtiesTitle: string;
  specialtiesSubtitle: string;
  doctorsTitle: string;
  doctorsSubtitle: string;
  hospitalsTitle: string;
  hospitalsSubtitle: string;
  servicesTitle: string;
  servicesSubtitle: string;
  symptomsTitle: string;
  symptomsSubtitle: string;
  libraryTitle: string;
  librarySubtitle: string;
  patientCtaTitle: string;
  patientCtaDesc: string;
  doctorCtaTitle: string;
  doctorCtaDesc: string;
  partnerCtaTitle: string;
  partnerCtaDesc: string;
  footerDisclaimer: string;
}

export const translations: Record<'en' | 'ur', TranslationDict> = {
  en: {
    siteName: 'Behter Ellaj',
    tagline: 'Better Healthcare. Better Access.',
    subTagline: 'Pakistan’s Trusted Healthcare Discovery & Appointment Platform',
    findDoctor: 'Find a Doctor',
    findHospital: 'Hospitals',
    specialties: 'Specialties',
    services: 'Health Services',
    library: 'Health Library',
    aboutUs: 'About Us',
    forDoctors: 'For Doctors',
    bookAppointment: 'Book Appointment',
    login: 'Login',
    register: 'Register',
    heroHeadline: 'Find the Right Doctor. Get Better Access to Healthcare.',
    heroSubtitle: 'Discover verified healthcare professionals, trusted hospitals, and convenient healthcare services across Pakistan — all in one place.',
    searchPlaceholder: 'Search by doctor, specialty, condition or service...',
    cityPlaceholder: 'Select City',
    searchBtn: 'Search Care',
    popularSpecialties: 'Popular Specialties:',
    trustVerified: '100% PMDC-Verified Doctors',
    trustHospitals: '150+ Recognized Hospital Affiliations',
    trustCities: '14+ Cities Across Pakistan',
    trustSupport: '24/7 Dedicated Patient Guidance',
    howItWorks: 'How Behter Ellaj Works',
    step1Title: '01 — Search',
    step1Desc: 'Find doctors, hospitals, specialties or healthcare services in your city.',
    step2Title: '02 — Compare',
    step2Desc: 'Review verified qualifications, patient experiences, consultation fees, and locations.',
    step3Title: '03 — Book',
    step3Desc: 'Select an instant in-person clinic slot or convenient online video consultation.',
    step4Title: '04 — Get Care',
    step4Desc: 'Consult with your chosen medical professional and continue your journey to recovery.',
    specialtiesTitle: 'Find Care by Specialty',
    specialtiesSubtitle: 'Explore qualified specialists across a wide spectrum of medical fields tailored to your needs.',
    doctorsTitle: 'Meet Trusted Healthcare Professionals',
    doctorsSubtitle: 'Discover qualified doctors with verified PMDC credentials, transparent fees, and genuine reviews.',
    hospitalsTitle: 'Find Healthcare Facilities Across Pakistan',
    hospitalsSubtitle: 'Discover premier tertiary care hospitals, emergency trauma units, and outpatient centers near you.',
    servicesTitle: 'Healthcare Services & Diagnostics',
    servicesSubtitle: 'Access home blood sample collection, advanced imaging, physiotherapy, and wellness packages.',
    symptomsTitle: 'Health Conditions & Symptoms',
    symptomsSubtitle: 'Understand common health conditions and connect directly with the appropriate clinical specialist.',
    libraryTitle: 'Understand Your Health Better',
    librarySubtitle: 'Practical, medically reviewed health guides, preventive tips, and wellness articles.',
    patientCtaTitle: 'Start Your Healthcare Journey with Behter Ellaj',
    patientCtaDesc: 'Experience hassle-free doctor appointments, digital medical records, and prioritized healthcare access across Pakistan.',
    doctorCtaTitle: 'Grow Your Practice with Behter Ellaj',
    doctorCtaDesc: 'Join Pakistan’s premier verified medical network, connect with new patients, and manage your practice effortlessly.',
    partnerCtaTitle: 'Healthcare Partnerships for Institutions & Corporates',
    partnerCtaDesc: 'Partner with Behter Ellaj to offer employee wellness coverage, diagnostic lab integrations, and hospital listings.',
    footerDisclaimer: 'Medical Disclaimer: Health information provided by Behter Ellaj is for general educational purposes and should not replace professional medical advice, diagnosis, or treatment. For urgent medical emergencies, immediately contact emergency services or visit the nearest hospital emergency department.',
  },
  ur: {
    siteName: 'بہتر علاج',
    tagline: 'بہتر علاج۔ بہتر رسائی۔',
    subTagline: 'پاکستان کا قابلِ اعتماد ہیلتھ کیئر پلیٹ فارم',
    findDoctor: 'ڈاکٹر تلاش کریں',
    findHospital: 'ہسپتال',
    specialties: 'شعبہ جات',
    services: 'طبی خدمات',
    library: 'ہیلتھ لائبریری',
    aboutUs: 'ہمارے بارے میں',
    forDoctors: 'ڈاکٹرز کے لیے',
    bookAppointment: 'وقت لیں',
    login: 'لاگ ان',
    register: 'رجسٹر',
    heroHeadline: 'صحیح ڈاکٹر تلاش کریں۔ بہترین علاج تک رسائی حاصل کریں۔',
    heroSubtitle: 'پاکستان بھر میں تصدیق شدہ ڈاکٹرز، قابل اعتماد ہسپتالوں اور تشخیصی لیبز سے ایک ہی جگہ پر رجوع کریں۔',
    searchPlaceholder: 'ڈاکٹر، بیماری، شعبہ یا سروس تلاش کریں...',
    cityPlaceholder: 'شہر منتخب کریں',
    searchBtn: 'تلاش کریں',
    popularSpecialties: 'معروف شعبہ جات:',
    trustVerified: '۱۰۰٪ تصدیق شدہ میڈیکل پروفیشنلز',
    trustHospitals: '۱۵۰+ تسلیم شدہ پارٹنر ہسپتال',
    trustCities: '۱۴+ بڑے پاکستانی شہر',
    trustSupport: '۲۴ گھنٹے مریضوں کی رہنمائی',
    howItWorks: 'بہتر علاج کیسے کام کرتا ہے',
    step1Title: '۰۱ — تلاش',
    step1Desc: 'اپنے شہر میں ڈاکٹر، ہسپتال یا طبی سروس تلاش کریں۔',
    step2Title: '۰۲ — موازنہ',
    step2Desc: 'ڈاکٹر کی ڈگری، تجربہ، فیس اور ہسپتال کے مقامات دیکھیں۔',
    step3Title: '۰۳ — بکنگ',
    step3Desc: 'کلینک میں معائنہ یا آن لائن ویڈیو مشورے کا وقت طے کریں۔',
    step4Title: '۰۴ — علاج',
    step4Desc: 'مستند ڈاکٹر سے مشاورت کریں اور صحت یابی کا سفر جاری رکھیں۔',
    specialtiesTitle: 'شعبہ وار ڈاکٹرز تلاش کریں',
    specialtiesSubtitle: 'دل، جلد، اطفال، نسواں اور تمام بڑے طبی شعبوں کے ماہر ڈاکٹرز',
    doctorsTitle: 'مستند اور تصدیق شدہ ڈاکٹرز',
    doctorsSubtitle: 'پاکستان کے مستند پی ایم ڈی سی رجسٹرڈ کنسلٹنٹس اور فیسوں کی مکمل تفصیلات',
    hospitalsTitle: 'پاکستان کے معروف ہسپتال اور کلینکس',
    hospitalsSubtitle: '۲۴ گھنٹے ایمرجنسی، جدید آئی سی یو اور ماہر ڈاکٹرز کی سہولیات سے لیس ہسپتال',
    servicesTitle: 'طبی اور تشخیصی سہولیات',
    servicesSubtitle: 'گھر پر خون کے ٹیسٹ، ایم آر آئی، الٹراساؤنڈ اور فزیوتھراپی کی سہولت',
    symptomsTitle: 'بیماریاں اور علامات',
    symptomsSubtitle: 'علامات کو سمجھیں اور بر وقت متعلقہ ماہر ڈاکٹر سے رجوع کریں',
    libraryTitle: 'صحت سے متعلق تصدیق شدہ مضامین',
    librarySubtitle: 'مستند ڈاکٹرز کے زیر نگرانی تیار کردہ طبی رہنمائی اور حفاظتی تدابیر',
    patientCtaTitle: 'بہتر علاج کے ساتھ اپنی صحت کا سفر شروع کریں',
    patientCtaDesc: 'آسانی سے وقت حاصل کریں اور اپنے اور اپنے پیاروں کی صحت کا خیال رکھیں۔',
    doctorCtaTitle: 'بہتر علاج نیٹ ورک میں بطور ڈاکٹر شامل ہوں',
    doctorCtaDesc: 'پاکستان کے جدید ترین ہیلتھ کیئر نیٹ ورک کا حصہ بنیں اور مریضوں تک براہ راست رسائی حاصل کریں۔',
    partnerCtaTitle: 'ہسپتالوں اور کمپنیوں کے لیے شراکت داری',
    partnerCtaDesc: 'کارپوریٹ ملازمین کے لیے ہیلتھ انشورنس اور لیب نیٹ ورک شراکت داری۔',
    footerDisclaimer: 'طبی دستبرداری: بہتر علاج پر فراہم کردہ تمام معلومات صرف آگاہی کے لیے ہیں اور یہ کسی بھی مستند ڈاکٹر کے مشورے کا نعم البدل نہیں ہیں۔ کسی بھی ہنگامی صورتحال میں فوری طور پر قریبی ایمرجنسی وارڈ سے رجوع کریں۔',
  },
};
