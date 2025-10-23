import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Counter } from '@/components/Counter';
import { ImageSlideshow } from '@/components/ImageSlideshow';
import { SEO } from '@/components/SEO';
import { useLanguage } from '@/contexts/LanguageContext';
import { Award, CheckCircle, Drill, Hammer, Search, Users } from 'lucide-react';
import { Link } from 'wouter';

export default function Home() {
  const { t, language } = useLanguage();

  const services = [
    {
      icon: Drill,
      title: t('services.grouting'),
      description: t('services.grouting.desc'),
      href: '/services#grouting',
      color: 'from-blue-500 to-blue-600',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
    },
    {
      icon: Hammer,
      title: t('services.settlement'),
      description: t('services.settlement.desc'),
      href: '/services#settlement',
      color: 'from-orange-500 to-orange-600',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600',
    },
    {
      icon: CheckCircle,
      title: t('services.cracks'),
      description: t('services.cracks.desc'),
      href: '/services#cracks',
      color: 'from-teal-500 to-teal-600',
      iconBg: 'bg-teal-100',
      iconColor: 'text-teal-600',
    },
    {
      icon: Search,
      title: t('services.cavity'),
      description: t('services.cavity.desc'),
      href: '/services#cavity',
      color: 'from-purple-500 to-purple-600',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
    },
  ];

  const stats = [
    { value: 15, suffix: '+', label: language === 'ar' ? 'سنة خبرة' : 'Years Experience' },
    { value: 200, suffix: '+', label: language === 'ar' ? 'مشروع منجز' : 'Projects Completed' },
    { value: 100, suffix: '+', label: language === 'ar' ? 'عميل راضٍ' : 'Satisfied Clients' },
    { value: 50, suffix: '+', label: language === 'ar' ? 'معدة متخصصة' : 'Specialized Equipment' },
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: language === 'ar' ? 'خبرة واسعة' : 'Extensive Experience',
      description:
        language === 'ar'
          ? 'أكثر من 15 عاماً من الخبرة في مجال حقن التربة ومعالجة التكهفات'
          : 'Over 15 years of experience in soil grouting and cavity treatment',
      gradient: 'from-amber-500 via-yellow-500 to-orange-500',
      iconBg: 'bg-gradient-to-br from-amber-100 to-yellow-100',
      iconColor: 'text-amber-600',
    },
    {
      icon: Users,
      title: language === 'ar' ? 'فريق محترف' : 'Professional Team',
      description:
        language === 'ar'
          ? 'فريق من المهندسين والفنيين المؤهلين والمدربين على أعلى مستوى'
          : 'Team of qualified engineers and technicians trained to the highest standards',
      gradient: 'from-emerald-500 via-green-500 to-teal-500',
      iconBg: 'bg-gradient-to-br from-emerald-100 to-green-100',
      iconColor: 'text-emerald-600',
    },
    {
      icon: Drill,
      title: language === 'ar' ? 'معدات حديثة' : 'Modern Equipment',
      description:
        language === 'ar'
          ? 'أحدث المعدات والتقنيات المتطورة في مجال الحقن والكشف'
          : 'Latest equipment and advanced technologies in grouting and detection',
      gradient: 'from-violet-500 via-purple-500 to-fuchsia-500',
      iconBg: 'bg-gradient-to-br from-violet-100 to-purple-100',
      iconColor: 'text-violet-600',
    },
  ];

  return (
    <>
      <SEO
        title="شركة إطلاق المتميزة | أفضل شركة حقن تربة وكشف فراغات في السعودية"
        description="شركة إطلاق المتميزة - أفضل شركة حقن تربة، كشف فراغات، معالجة هبوط، تقوية أساسات في الرياض، جدة، الدمام. خبرة +15 سنة في حقن التربة ومعالجة التكهفات. استشارات هندسية وجيوتكنيك احترافية."
        url="https://etlaqksa.com"
      />
      <div className="w-full">
      {/* Gallery Slideshow Section - Hero */}
      <section className="relative overflow-hidden">
        <div className="w-full h-[60vh] md:h-[70vh] lg:h-[80vh]">
          <ImageSlideshow
            images={[
              '/gallery/Etlaq_1.jpg',
              '/gallery/Etlaq_5.jpg',
              '/gallery/Etlaq_10.jpg',
              '/gallery/Etlaq_15.jpg',
              '/gallery/Etlaq_20.jpg',
              '/gallery/Etlaq_25.jpg',
              '/gallery/Etlaq_30.jpg',
              '/gallery/Etlaq_35.jpg',
              '/gallery/Etlaq_40.jpg',
              '/gallery/Etlaq_45.jpg',
            ]}
            interval={3500}
            linkTo="/gallery"
          />
        </div>
        {/* Overlay Text */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 flex items-center justify-center z-20">
          <div className="container text-center text-white space-y-6 px-4">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight drop-shadow-2xl">
              {t('home.title')}
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl drop-shadow-lg max-w-3xl mx-auto">
              {t('home.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link href="/contact">
                <Button size="lg" className="text-lg px-8 bg-white text-primary hover:bg-gray-100">
                  {t('home.cta')}
                </Button>
              </Link>
              <Link href="/gallery">
                <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white/20">
                  {language === 'ar' ? 'عرض جميع الصور' : 'View All Photos'}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20 md:py-32 overflow-hidden" style={{display: 'none'}}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl" />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {t('home.title')}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                {t('home.subtitle')}
              </p>
              <p className="text-lg text-accent font-semibold">{t('home.tagline')}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="text-lg px-8">
                    {t('home.cta')}
                  </Button>
                </Link>
                <Link href="/services">
                  <Button size="lg" variant="outline" className="text-lg px-8">
                    {t('common.learnMore')}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="text-6xl font-bold text-primary">15+</div>
                  <div className="text-2xl font-semibold">{t('home.experience')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-12 bg-primary text-primary-foreground overflow-hidden">
        {/* Background Collage */}
        <div className="absolute inset-0 grid grid-cols-4 md:grid-cols-6 gap-1 opacity-10">
          <div className="aspect-square bg-cover bg-center" style={{ backgroundImage: 'url(/gallery/1.jpg)' }} />
          <div className="aspect-square bg-cover bg-center" style={{ backgroundImage: 'url(/gallery/5.jpg)' }} />
          <div className="aspect-square bg-cover bg-center" style={{ backgroundImage: 'url(/gallery/10.jpg)' }} />
          <div className="aspect-square bg-cover bg-center" style={{ backgroundImage: 'url(/gallery/15.jpg)' }} />
          <div className="aspect-square bg-cover bg-center" style={{ backgroundImage: 'url(/gallery/20.jpg)' }} />
          <div className="aspect-square bg-cover bg-center" style={{ backgroundImage: 'url(/gallery/25.jpg)' }} />
          <div className="aspect-square bg-cover bg-center" style={{ backgroundImage: 'url(/gallery/30.jpg)' }} />
          <div className="aspect-square bg-cover bg-center" style={{ backgroundImage: 'url(/gallery/35.jpg)' }} />
          <div className="aspect-square bg-cover bg-center" style={{ backgroundImage: 'url(/gallery/40.jpg)' }} />
          <div className="aspect-square bg-cover bg-center" style={{ backgroundImage: 'url(/gallery/45.jpg)' }} />
          <div className="aspect-square bg-cover bg-center" style={{ backgroundImage: 'url(/gallery/50.jpg)' }} />
          <div className="aspect-square bg-cover bg-center" style={{ backgroundImage: 'url(/gallery/2.jpg)' }} />
          <div className="aspect-square bg-cover bg-center" style={{ backgroundImage: 'url(/gallery/7.jpg)' }} />
          <div className="aspect-square bg-cover bg-center" style={{ backgroundImage: 'url(/gallery/12.jpg)' }} />
          <div className="aspect-square bg-cover bg-center" style={{ backgroundImage: 'url(/gallery/17.jpg)' }} />
          <div className="aspect-square bg-cover bg-center" style={{ backgroundImage: 'url(/gallery/22.jpg)' }} />
          <div className="aspect-square bg-cover bg-center" style={{ backgroundImage: 'url(/gallery/27.jpg)' }} />
          <div className="aspect-square bg-cover bg-center" style={{ backgroundImage: 'url(/gallery/32.jpg)' }} />
          <div className="aspect-square bg-cover bg-center" style={{ backgroundImage: 'url(/gallery/37.jpg)' }} />
          <div className="aspect-square bg-cover bg-center" style={{ backgroundImage: 'url(/gallery/42.jpg)' }} />
          <div className="aspect-square bg-cover bg-center" style={{ backgroundImage: 'url(/gallery/47.jpg)' }} />
          <div className="aspect-square bg-cover bg-center" style={{ backgroundImage: 'url(/gallery/52.jpg)' }} />
          <div className="aspect-square bg-cover bg-center" style={{ backgroundImage: 'url(/gallery/3.jpg)' }} />
          <div className="aspect-square bg-cover bg-center" style={{ backgroundImage: 'url(/gallery/8.jpg)' }} />
        </div>
        <div className="container relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <Counter end={stat.value} suffix={stat.suffix} duration={2500} />
                <div className="text-sm md:text-base opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-orange-50 via-white to-teal-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-300/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-300/10 rounded-full blur-3xl" />
        <div className="container relative z-10">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">{t('services.title')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {language === 'ar'
                ? 'نقدم مجموعة شاملة من الخدمات المتخصصة في حقن التربة ومعالجة التكهفات'
                : 'We offer a comprehensive range of specialized services in soil grouting and cavity treatment'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover-lift cursor-pointer border-2 hover:border-current transition-all duration-300 group">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-xl ${service.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className={`h-8 w-8 ${service.iconColor}`} />
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    {service.description}
                  </CardDescription>
                  <Link href={service.href}>
                    <Button 
                      variant="link" 
                      className={`px-0 font-semibold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}
                    >
                      {t('common.readMore')} →
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-green-50 via-teal-50 to-cyan-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-300/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-300/10 rounded-full blur-3xl" />
        <div className="container relative z-10">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              {language === 'ar' ? 'لماذا تختارنا؟' : 'Why Choose Us?'}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="text-center hover-lift border-0 shadow-lg overflow-hidden group">
                <div className={`h-2 bg-gradient-to-r ${item.gradient}`} />
                <CardContent className="p-8 space-y-4">
                  <div className={`w-20 h-20 rounded-2xl ${item.iconBg} flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                    <item.icon className={`h-10 w-10 ${item.iconColor}`} />
                  </div>
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <p className="text-muted-foreground text-base leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        <div className="container relative z-10 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            {language === 'ar'
              ? 'هل تحتاج إلى استشارة هندسية؟'
              : 'Need Engineering Consultation?'}
          </h2>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            {language === 'ar'
              ? 'تواصل معنا اليوم للحصول على استشارة مجانية وتقييم احترافي لمشروعك'
              : 'Contact us today for a free consultation and professional assessment of your project'}
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              {t('contact.title')}
            </Button>
          </Link>
        </div>
      </section>
    </div>
    </>
  );
}

