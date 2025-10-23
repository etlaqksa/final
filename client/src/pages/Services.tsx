import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SEO } from '@/components/SEO';
import { useLanguage } from '@/contexts/LanguageContext';
import { CheckCircle, Drill, Hammer, Search, Shield, Wrench } from 'lucide-react';
import { Link } from 'wouter';

export default function Services() {
  const { language } = useLanguage();

  const servicesSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'حقن التربة والاستشارات الهندسية الجيوتقنية',
    provider: {
      '@type': 'LocalBusiness',
      name: 'شركة إطلاق المتميزة المحدودة',
      url: 'https://etlaqksa.com',
    },
    areaServed: {
      '@type': 'Country',
      name: 'المملكة العربية السعودية',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'خدمات حقن التربة والاستشارات الهندسية',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'حقن التربة الأسمنتي',
            description: 'خدمات حقن التربة بالأسمنت لتقوية التربة وملء الفراغات في الرياض وجدة والدمام',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'كشف الفراغات والتكهفات',
            description: 'استخدام أحدث تقنيات الكشف الجيوفيزيائي لتحديد الفراغات والتكهفات تحت الأرض',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'معالجة هبوط المباني',
            description: 'تشخيص ومعالجة هبوط الأساسات والمباني بأحدث التقنيات الهندسية',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'إصلاح تشققات الجدران',
            description: 'معالجة احترافية لجميع أنواع التشققات الإنشائية والسطحية',
          },
        },
      ],
    },
  };

  const services = [
    {
      id: 'grouting',
      icon: Drill,
      title: language === 'ar' ? 'حقن التربة (الحقن الأسمنتي)' : 'Soil Grouting (Cement Injection)',
      description:
        language === 'ar'
          ? 'تجسد حلول الحقن الأسمنتي لدينا التآزر بين الدقة والقوة. بفضل خبرتنا الواسعة، نقوم بتثبيت وتعزيز الهياكل تحت الأرض بخبرة باستخدام تقنيات حقن مخصصة.'
          : 'Our cement grouting solutions embody the synergy between precision and strength. With our extensive expertise, we stabilize and reinforce underground structures using customized injection techniques.',
      benefits: [
        language === 'ar' ? 'تثبيت الأساسات' : 'Foundation stabilization',
        language === 'ar' ? 'ملء الفراغات' : 'Void filling',
        language === 'ar' ? 'تحسين التربة' : 'Soil improvement',
        language === 'ar' ? 'منع التسربات' : 'Leak prevention',
      ],
      techniques: [
        language === 'ar' ? 'حقن الضغط (Compaction Grouting)' : 'Compaction Grouting',
        language === 'ar' ? 'حقن النفاذ (Permeation Grouting)' : 'Permeation Grouting',
        language === 'ar' ? 'حقن النفث (Jet Grouting)' : 'Jet Grouting',
        language === 'ar' ? 'حقن الستار (Curtain Grouting)' : 'Curtain Grouting',
      ],
    },
    {
      id: 'settlement',
      icon: Hammer,
      title: language === 'ar' ? 'معالجة هبوط المباني' : 'Building Settlement Treatment',
      description:
        language === 'ar'
          ? 'نقدم حلولاً شاملة لتشخيص ومعالجة هبوط الأساسات والمباني باستخدام أحدث التقنيات الهندسية والمعدات المتخصصة.'
          : 'We provide comprehensive solutions for diagnosing and treating foundation and building settlement using the latest engineering techniques and specialized equipment.',
      benefits: [
        language === 'ar' ? 'تشخيص دقيق للهبوط' : 'Accurate settlement diagnosis',
        language === 'ar' ? 'معالجة فعالة' : 'Effective treatment',
        language === 'ar' ? 'منع الهبوط المستقبلي' : 'Prevention of future settlement',
        language === 'ar' ? 'استعادة استقرار المبنى' : 'Building stability restoration',
      ],
      techniques: [
        language === 'ar' ? 'رفع الألواح (Slab Jacking)' : 'Slab Jacking',
        language === 'ar' ? 'تقوية الأساسات' : 'Foundation strengthening',
        language === 'ar' ? 'حقن التعويض (Compensation Grouting)' : 'Compensation Grouting',
        language === 'ar' ? 'التدعيم بالخوازيق' : 'Pile underpinning',
      ],
    },
    {
      id: 'cracks',
      icon: Wrench,
      title: language === 'ar' ? 'إصلاح تشققات الجدران' : 'Wall Crack Repair',
      description:
        language === 'ar'
          ? 'معالجة احترافية لجميع أنواع التشققات الإنشائية والسطحية باستخدام مواد وتقنيات متقدمة لضمان إصلاح دائم وفعال.'
          : 'Professional treatment for all types of structural and surface cracks using advanced materials and techniques to ensure permanent and effective repair.',
      benefits: [
        language === 'ar' ? 'تحليل شامل للتشققات' : 'Comprehensive crack analysis',
        language === 'ar' ? 'إصلاح دائم' : 'Permanent repair',
        language === 'ar' ? 'استعادة القوة الإنشائية' : 'Structural strength restoration',
        language === 'ar' ? 'منع انتشار التشققات' : 'Crack propagation prevention',
      ],
      techniques: [
        language === 'ar' ? 'حقن الإيبوكسي (Epoxy Injection)' : 'Epoxy Injection',
        language === 'ar' ? 'حقن البولي يوريثان' : 'Polyurethane injection',
        language === 'ar' ? 'التدعيم بألياف الكربون' : 'Carbon fiber reinforcement',
        language === 'ar' ? 'الحشو والختم' : 'Filling and sealing',
      ],
    },
    {
      id: 'cavity',
      icon: Search,
      title: language === 'ar' ? 'كشف التكهفات والفراغات' : 'Cavity and Void Detection',
      description:
        language === 'ar'
          ? 'توفر خدماتنا المتقدمة لكشف التكهفات رؤى لا مثيل لها حول باطن الأرض باستخدام أحدث التقنيات الجيوفيزيائية.'
          : 'Our advanced cavity detection services provide unparalleled insights into the subsurface using the latest geophysical techniques.',
      benefits: [
        language === 'ar' ? 'كشف دقيق للفراغات' : 'Accurate void detection',
        language === 'ar' ? 'تقييم المخاطر' : 'Risk assessment',
        language === 'ar' ? 'خرائط تفصيلية' : 'Detailed mapping',
        language === 'ar' ? 'توصيات علاجية' : 'Treatment recommendations',
      ],
      techniques: [
        language === 'ar' ? 'رادار اختراق الأرض (GPR)' : 'Ground Penetrating Radar (GPR)',
        language === 'ar' ? 'المسح الكهربائي' : 'Electrical resistivity',
        language === 'ar' ? 'المسح السيزمي' : 'Seismic survey',
        language === 'ar' ? 'الحفر الاستكشافي' : 'Exploratory drilling',
      ],
    },
  ];

  const additionalServices = [
    {
      icon: Shield,
      title: language === 'ar' ? 'تقوية الأساسات' : 'Foundation Strengthening',
      description:
        language === 'ar'
          ? 'تعزيز قدرة تحمل الأساسات القائمة'
          : 'Enhancing the bearing capacity of existing foundations',
    },
    {
      icon: CheckCircle,
      title: language === 'ar' ? 'الاستشارات الهندسية' : 'Engineering Consultations',
      description:
        language === 'ar'
          ? 'استشارات متخصصة في الهندسة الجيوتقنية'
          : 'Specialized geotechnical engineering consultations',
    },
  ];

  return (
    <>
      <SEO
        title="خدماتنا | شركة حقن تربة وكشف فراغات في الرياض وجدة والدمام"
        description="شركة إطلاق المتميزة تقدم خدمات حقن التربة الأسمنتي، كشف الفراغات والتكهفات، معالجة هبوط المباني، تقوية الأساسات، إصلاح التشققات. أفضل شركة حقن تربة في السعودية."
        url="https://etlaqksa.com/services"
        schema={servicesSchema}
      />
      <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 md:py-24">
        <div className="container text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            {language === 'ar' ? 'خدماتنا المتخصصة' : 'Our Specialized Services'}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {language === 'ar'
              ? 'نقدم مجموعة شاملة من الخدمات المتخصصة في حقن التربة ومعالجة التكهفات التي تتجاوز الحدود التقليدية'
              : 'We offer a comprehensive range of specialized services in soil grouting and cavity treatment that go beyond traditional boundaries'}
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 md:py-24">
        <div className="container space-y-16">
          {services.map((service, index) => (
            <div key={service.id} id={service.id} className="scroll-mt-20">
              <Card className="overflow-hidden border-2 hover:border-primary/50 transition-colors hover-lift">
                <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <CardHeader className="space-y-4 p-8">
                    <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-3xl">{service.title}</CardTitle>
                    <CardDescription className="text-lg">{service.description}</CardDescription>
                    <Link href="/contact">
                      <Button className="w-full sm:w-auto">
                        {language === 'ar' ? 'احصل على عرض سعر' : 'Get a Quote'}
                      </Button>
                    </Link>
                  </CardHeader>

                  <CardContent className="p-8 bg-muted/30 space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-3">
                        {language === 'ar' ? 'الفوائد:' : 'Benefits:'}
                      </h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start space-x-2 rtl:space-x-reverse">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-3">
                        {language === 'ar' ? 'التقنيات المستخدمة:' : 'Techniques Used:'}
                      </h4>
                      <ul className="space-y-2">
                        {service.techniques.map((technique, i) => (
                          <li key={i} className="flex items-start space-x-2 rtl:space-x-reverse">
                            <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                            <span>{technique}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              {language === 'ar' ? 'خدمات إضافية' : 'Additional Services'}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {additionalServices.map((service, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-6 flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-accent text-primary-foreground">
        <div className="container text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            {language === 'ar' ? 'هل تحتاج إلى أحد خدماتنا؟' : 'Need One of Our Services?'}
          </h2>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            {language === 'ar'
              ? 'تواصل معنا اليوم للحصول على استشارة مجانية وتقييم احترافي لمشروعك'
              : 'Contact us today for a free consultation and professional assessment of your project'}
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
            </Button>
          </Link>
        </div>
      </section>
    </div>
    </>
  );
}

