import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: 'rtl' | 'ltr';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved === 'ar' || saved === 'en') ? saved : 'ar';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  };

  useEffect(() => {
    document.documentElement.setAttribute('lang', language);
    document.documentElement.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');
  }, [language]);

  const t = (key: string): string => {
    return translations[language]?.[key] || key;
  };

  const dir = language === 'ar' ? 'rtl' : 'ltr';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

// Translation dictionary
const translations: Record<Language, Record<string, string>> = {
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.services': 'خدماتنا',
    'nav.projects': 'مشاريعنا',
    'nav.blog': 'المقالات التقنية',
    'nav.faq': 'الأسئلة الشائعة',
    'nav.contact': 'تواصل معنا',
    'nav.gallery': 'معرض الصور',
    'nav.photos': 'معرض الصور',
    
    // Home page
    'home.title': 'شركة إطلاق المتميزة المحدودة',
    'home.subtitle': 'خبراء في حقن التربة ومعالجة التكهفات في السعودية',
    'home.tagline': 'نحن نقوي أساساتك',
    'home.cta': 'احصل على استشارة مجانية',
    'home.experience': 'أكثر من 15 عاماً من الخبرة',
    
    // Services
    'services.title': 'خدماتنا المتخصصة',
    'services.grouting': 'حقن التربة (الحقن الأسمنتي)',
    'services.grouting.desc': 'حلول متقدمة لتقوية التربة وملء الفراغات باستخدام تقنيات الحقن الأسمنتي الحديثة',
    'services.settlement': 'معالجة هبوط المباني',
    'services.settlement.desc': 'تشخيص ومعالجة هبوط الأساسات والمباني بأحدث التقنيات الهندسية',
    'services.cracks': 'إصلاح تشققات الجدران',
    'services.cracks.desc': 'معالجة احترافية لجميع أنواع التشققات الإنشائية والسطحية',
    'services.cavity': 'كشف التكهفات والفراغات',
    'services.cavity.desc': 'استخدام أحدث تقنيات الكشف الجيوفيزيائي لتحديد الفراغات تحت الأرض',
    
    // About
    'about.title': 'من نحن',
    'about.vision': 'رؤيتنا',
    'about.mission': 'مهمتنا',
    'about.values': 'قيمنا',
    
    // Contact
    'contact.title': 'تواصل معنا',
    'contact.name': 'الاسم',
    'contact.email': 'البريد الإلكتروني',
    'contact.phone': 'رقم الهاتف',
    'contact.message': 'الرسالة',
    'contact.send': 'إرسال',
    'contact.whatsapp': 'تواصل عبر واتساب',
    
    // Common
    'common.readMore': 'اقرأ المزيد',
    'common.learnMore': 'معرفة المزيد',
    'common.viewAll': 'عرض الكل',
    'common.loading': 'جاري التحميل...',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.blog': 'Technical Articles',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact Us',
    'nav.gallery': 'Gallery',
    'nav.photos': 'Photo Gallery',
    
    // Home page
    'home.title': 'Etlaq Distinguished Company',
    'home.subtitle': 'Experts in Soil Grouting and Cavity Treatment in Saudi Arabia',
    'home.tagline': 'We Strengthen Your Foundations',
    'home.cta': 'Get Free Consultation',
    'home.experience': 'Over 15 Years of Experience',
    
    // Services
    'services.title': 'Our Specialized Services',
    'services.grouting': 'Soil Grouting (Cement Injection)',
    'services.grouting.desc': 'Advanced solutions for soil strengthening and void filling using modern cement grouting techniques',
    'services.settlement': 'Building Settlement Treatment',
    'services.settlement.desc': 'Diagnosis and treatment of foundation and building settlement using the latest engineering techniques',
    'services.cracks': 'Wall Crack Repair',
    'services.cracks.desc': 'Professional treatment for all types of structural and surface cracks',
    'services.cavity': 'Cavity and Void Detection',
    'services.cavity.desc': 'Using the latest geophysical detection techniques to identify underground voids',
    
    // About
    'about.title': 'About Us',
    'about.vision': 'Our Vision',
    'about.mission': 'Our Mission',
    'about.values': 'Our Values',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.phone': 'Phone Number',
    'contact.message': 'Message',
    'contact.send': 'Send',
    'contact.whatsapp': 'Contact via WhatsApp',
    
    // Common
    'common.readMore': 'Read More',
    'common.learnMore': 'Learn More',
    'common.viewAll': 'View All',
    'common.loading': 'Loading...',
  },
};

