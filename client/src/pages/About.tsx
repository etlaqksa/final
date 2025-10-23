import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Award, Eye, Heart, Target, Users } from 'lucide-react';

export default function About() {
  const { language } = useLanguage();

  const values = [
    {
      icon: Award,
      title: language === 'ar' ? 'التميز' : 'Excellence',
      description:
        language === 'ar'
          ? 'نسعى دائماً لتقديم أعلى مستويات الجودة والاحترافية في جميع خدماتنا'
          : 'We always strive to deliver the highest levels of quality and professionalism in all our services',
    },
    {
      icon: Heart,
      title: language === 'ar' ? 'الأمانة' : 'Integrity',
      description:
        language === 'ar'
          ? 'نلتزم بالصدق والشفافية في تعاملاتنا مع عملائنا وشركائنا'
          : 'We commit to honesty and transparency in our dealings with clients and partners',
    },
    {
      icon: Users,
      title: language === 'ar' ? 'العمل الجماعي' : 'Teamwork',
      description:
        language === 'ar'
          ? 'نؤمن بقوة التعاون والعمل الجماعي لتحقيق أفضل النتائج'
          : 'We believe in the power of collaboration and teamwork to achieve the best results',
    },
    {
      icon: Target,
      title: language === 'ar' ? 'الابتكار' : 'Innovation',
      description:
        language === 'ar'
          ? 'نستخدم أحدث التقنيات والأساليب المبتكرة في حلولنا الهندسية'
          : 'We use the latest technologies and innovative methods in our engineering solutions',
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 md:py-24">
        <div className="container text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">{language === 'ar' ? 'من نحن' : 'About Us'}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {language === 'ar'
              ? 'شركة إطلاق المتميزة المحدودة - رواد حلول حقن التربة ومعالجة التكهفات في المملكة العربية السعودية'
              : 'ETLAQ Distinguished Company Ltd. - Leaders in soil grouting and cavity treatment solutions in Saudi Arabia'}
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                {language === 'ar' ? 'قصتنا' : 'Our Story'}
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  {language === 'ar'
                    ? 'تقف شركة إطلاق المتميزة المحدودة تتويجاً لأكثر من 15 عاماً من الخبرة في مجالات كشف التكهفات الصخرية وحقن التربة، موحدة الآن تحت اسم واحد. بعد أن عملنا سابقاً تحت هويات مختلفة، قمنا بتسخير هذه الخبرة الواسعة لترسيخ أنفسنا كقوة رائدة في هذه المجالات المتخصصة.'
                    : 'ETLAQ Distinguished Company Ltd. stands as the culmination of over 15 years of experience in rock cavity detection and soil grouting, now unified under one name. Having previously operated under different identities, we have harnessed this extensive expertise to establish ourselves as a leading force in these specialized fields.'}
                </p>
                <p>
                  {language === 'ar'
                    ? 'نفخر بتقديم حلول مبتكرة وموثوقة لعملائنا في مختلف القطاعات، مع التزام ثابت بالجودة والسلامة والاستدامة في كل مشروع نتولاه.'
                    : 'We pride ourselves on delivering innovative and reliable solutions to our clients across various sectors, with an unwavering commitment to quality, safety, and sustainability in every project we undertake.'}
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
                <div className="text-center space-y-2">
                  <div className="text-5xl font-bold text-primary">500+</div>
                  <div className="text-xl font-semibold">
                    {language === 'ar' ? 'مشروع ناجح' : 'Successful Projects'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-primary/20">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">{language === 'ar' ? 'رؤيتنا' : 'Our Vision'}</h3>
                <p className="text-lg text-muted-foreground">
                  {language === 'ar'
                    ? 'أن نقود الصناعة في كشف التكهفات الصخرية وحقن التربة، ووضع معايير جديدة في الدقة والاستقرار والاستدامة. نطمح إلى خلق مستقبل يكون فيه كل هيكل تحت الأرض بمثابة شهادة على البراعة البشرية والالتزام بعالم مرن أعلاه.'
                    : 'To lead the industry in rock cavity detection and soil grouting, setting new standards in precision, stability, and sustainability. We aspire to create a future where every underground structure serves as a testament to human ingenuity and commitment to a resilient world above.'}
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/20">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <Target className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold">{language === 'ar' ? 'مهمتنا' : 'Our Mission'}</h3>
                <p className="text-lg text-muted-foreground">
                  {language === 'ar'
                    ? 'إعادة تعريف فن الاستقرار تحت أقدامنا. من خلال الابتكار والدقة والممارسات المستدامة، نحن ملتزمون بهندسة الأساسات التي تصمد أمام اختبار الزمن. رحلتنا مسترشدة بشغف التميز وفهم عميق للعالم المعقد أدناه.'
                    : 'To redefine the art of stability beneath our feet. Through innovation, precision, and sustainable practices, we are committed to engineering foundations that withstand the test of time. Our journey is guided by a passion for excellence and a deep understanding of the complex world below.'}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              {language === 'ar' ? 'قيمنا' : 'Our Values'}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {language === 'ar'
                ? 'القيم التي توجه عملنا وتشكل ثقافتنا المؤسسية'
                : 'The values that guide our work and shape our corporate culture'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-accent text-primary-foreground">
        <div className="container text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            {language === 'ar' ? 'مناطق خدماتنا' : 'Our Service Areas'}
          </h2>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
            {language === 'ar'
              ? 'نخدم جميع أنحاء المملكة العربية السعودية: الرياض، جدة، الدمام، المدينة المنورة، مكة المكرمة، الطائف، القصيم، حائل، أبها، تبوك، وجميع المدن والمناطق الأخرى'
              : 'We serve all regions of Saudi Arabia: Riyadh, Jeddah, Dammam, Madinah, Makkah, Taif, Qassim, Hail, Abha, Tabuk, and all other cities and regions'}
          </p>
        </div>
      </section>
    </div>
  );
}

