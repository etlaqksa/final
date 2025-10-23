import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'wouter';

export default function Footer() {
  const { t, language } = useLanguage();

  const quickLinks = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.services'), href: '/services' },
    { name: t('nav.projects'), href: '/projects' },
  ];

  const services = [
    { name: t('services.grouting'), href: '/services#grouting' },
    { name: t('services.settlement'), href: '/services#settlement' },
    { name: t('services.cracks'), href: '/services#cracks' },
    { name: t('services.cavity'), href: '/services#cavity' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">
              {language === 'ar' ? 'شركة إطلاق المتميزة' : 'ETLAQ Distinguished Company'}
            </h3>
            <p className="text-sm opacity-90">
              {language === 'ar'
                ? 'رواد حلول حقن التربة ومعالجة التكهفات في المملكة العربية السعودية منذ أكثر من 15 عاماً'
                : 'Leaders in soil grouting and cavity treatment solutions in Saudi Arabia for over 15 years'}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">
              {language === 'ar' ? 'روابط سريعة' : 'Quick Links'}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-sm hover:underline opacity-90 hover:opacity-100 cursor-pointer">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">
              {language === 'ar' ? 'خدماتنا' : 'Our Services'}
            </h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link href={service.href}>
                    <span className="text-sm hover:underline opacity-90 hover:opacity-100 cursor-pointer">
                      {service.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">
              {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 rtl:space-x-reverse text-sm">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0 opacity-90" />
                <a 
                  href="tel:+966534145922" 
                  className="opacity-90 hover:opacity-100 hover:underline transition-all"
                  dir="ltr"
                >
                  +966 53 414 5922
                </a>
              </li>
              <li className="flex items-start space-x-2 rtl:space-x-reverse text-sm">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0 opacity-90" />
                <a 
                  href="mailto:info@etlaqksa.com" 
                  className="opacity-90 hover:opacity-100 hover:underline transition-all"
                >
                  info@etlaqksa.com
                </a>
              </li>
              <li className="flex items-start space-x-2 rtl:space-x-reverse text-sm">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 opacity-90" />
                <a 
                  href="https://maps.google.com/?q=Riyadh,Saudi+Arabia" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="opacity-90 hover:opacity-100 hover:underline transition-all"
                >
                  {language === 'ar'
                    ? 'المملكة العربية السعودية - الرياض'
                    : 'Saudi Arabia - Riyadh'}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-sm opacity-90">
          <p>
            {language === 'ar'
              ? `© ${new Date().getFullYear()} شركة إطلاق المتميزة المحدودة. جميع الحقوق محفوظة.`
              : `© ${new Date().getFullYear()} ETLAQ Distinguished Company Ltd. All rights reserved.`}
          </p>
        </div>
      </div>
    </footer>
  );
}

