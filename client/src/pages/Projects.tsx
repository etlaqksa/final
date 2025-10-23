import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Building2, Calendar, MapPin } from 'lucide-react';

export default function Projects() {
  const { language } = useLanguage();

  const projects = [
    {
      title: language === 'ar' ? 'مترو الرياض' : 'Riyadh Metro',
      client: language === 'ar' ? 'شركة فاست' : 'FAST Company',
      location: language === 'ar' ? 'الرياض' : 'Riyadh',
      year: '2015',
      category: language === 'ar' ? 'حقن التربة' : 'Soil Grouting',
      description:
        language === 'ar'
          ? 'مشروع ضخم لحقن التربة وتثبيت الأساسات لمشروع مترو الرياض'
          : 'Massive soil grouting and foundation stabilization project for Riyadh Metro',
    },
    {
      title: language === 'ar' ? 'قصر الأمير عبدالعزيز بن مشعل آل سعود' : 'Prince Abdulaziz bin Mishaal Palace',
      client: language === 'ar' ? 'شركة نظم المقاولات' : 'Nuzum Contracting Company',
      location: language === 'ar' ? 'الرياض' : 'Riyadh',
      year: '2017',
      category: language === 'ar' ? 'معالجة هبوط' : 'Settlement Treatment',
      description:
        language === 'ar'
          ? 'معالجة هبوط الأساسات وتقوية التربة لقصر ملكي'
          : 'Foundation settlement treatment and soil strengthening for royal palace',
    },
    {
      title: language === 'ar' ? 'مشروع الطاقة الشمسية - الأفلاج' : 'Solar Energy Project - Al-Aflaj',
      client: language === 'ar' ? 'شركة الجهاز' : 'Al-Jehaz Company',
      location: language === 'ar' ? 'الأفلاج' : 'Al-Aflaj',
      year: '2018',
      category: language === 'ar' ? 'حقن التربة' : 'Soil Grouting',
      description:
        language === 'ar'
          ? 'تثبيت التربة وتقويتها لمشروع الطاقة الشمسية'
          : 'Soil stabilization and strengthening for solar energy project',
    },
    {
      title: language === 'ar' ? 'مسجد الفاخرية' : 'Al-Fakhiriya Mosque',
      client: language === 'ar' ? 'شركة اتحاد البواني' : 'Ittihad Al-Bawani Company',
      location: language === 'ar' ? 'الدمام' : 'Dammam',
      year: '2018',
      category: language === 'ar' ? 'كشف تكهفات' : 'Cavity Detection',
      description:
        language === 'ar'
          ? 'كشف التكهفات ومعالجة الفراغات تحت الأساسات'
          : 'Cavity detection and void treatment under foundations',
    },
    {
      title: language === 'ar' ? 'بنك البلاد' : 'Bank AlBilad',
      client: language === 'ar' ? 'شركة التربة والأساسات المحدودة - سفكو' : 'SAFCO - Soil & Foundation Company',
      location: language === 'ar' ? 'الرياض' : 'Riyadh',
      year: '2019',
      category: language === 'ar' ? 'تقوية أساسات' : 'Foundation Strengthening',
      description:
        language === 'ar'
          ? 'تقوية وتدعيم أساسات مبنى بنك البلاد'
          : 'Strengthening and reinforcement of Bank AlBilad building foundations',
    },
    {
      title: language === 'ar' ? 'شبكات تصريف مياه الأمطار' : 'Rainwater Drainage Networks',
      client: language === 'ar' ? 'شركة يوكسال إنشاءات السعودية' : 'Yuksel Construction Saudi Arabia',
      location: language === 'ar' ? 'الرياض' : 'Riyadh',
      year: '2021',
      category: language === 'ar' ? 'حقن التربة' : 'Soil Grouting',
      description:
        language === 'ar'
          ? 'حقن التربة وتثبيتها لشبكات تصريف مياه الأمطار'
          : 'Soil grouting and stabilization for rainwater drainage networks',
    },
    {
      title: language === 'ar' ? 'حدائق الملك سلمان' : 'King Salman Park',
      client: language === 'ar' ? 'شركة فرسينيه' : 'Freyssinet Company',
      location: language === 'ar' ? 'الرياض' : 'Riyadh',
      year: '2022',
      category: language === 'ar' ? 'حقن التربة' : 'Soil Grouting',
      description:
        language === 'ar'
          ? 'أعمال حقن التربة الشاملة لمشروع حدائق الملك سلمان'
          : 'Comprehensive soil grouting works for King Salman Park project',
    },
    {
      title: language === 'ar' ? 'بوليفارد العالم' : 'Boulevard World',
      client: language === 'ar' ? 'مؤسسة تليد الخليجية للمقاولات' : 'Taleed Al-Khaleejiya Contracting',
      location: language === 'ar' ? 'الرياض' : 'Riyadh',
      year: '2022',
      category: language === 'ar' ? 'معالجة تشققات' : 'Crack Repair',
      description:
        language === 'ar'
          ? 'معالجة التشققات وتقوية الهياكل الإنشائية'
          : 'Crack treatment and structural reinforcement',
    },
    {
      title: language === 'ar' ? 'مستودعات نون' : 'Noon Warehouses',
      client: language === 'ar' ? 'شركة أمانة' : 'Amanah Company',
      location: language === 'ar' ? 'الرياض' : 'Riyadh',
      year: '2023',
      category: language === 'ar' ? 'حقن التربة' : 'Soil Grouting',
      description:
        language === 'ar'
          ? 'حقن التربة وتثبيت الأساسات لمستودعات نون'
          : 'Soil grouting and foundation stabilization for Noon warehouses',
    },
    {
      title: language === 'ar' ? 'سرايا النرجس' : 'Saraya Al-Narjis',
      client: language === 'ar' ? 'شركة دار وإعمار للاستثمار والتطوير العقاري' : 'Dar & Emaar Investment & Real Estate Development',
      location: language === 'ar' ? 'الرياض' : 'Riyadh',
      year: '2023',
      category: language === 'ar' ? 'كشف تكهفات' : 'Cavity Detection',
      description:
        language === 'ar'
          ? 'كشف التكهفات ومعالجة الفراغات للمشروع السكني'
          : 'Cavity detection and void treatment for residential project',
    },
    {
      title: language === 'ar' ? 'برج ركين' : 'Rakeen Tower',
      client: language === 'ar' ? 'شركة ركين العقارية' : 'Rakeen Real Estate Company',
      location: language === 'ar' ? 'الرياض' : 'Riyadh',
      year: '2023',
      category: language === 'ar' ? 'تقوية أساسات' : 'Foundation Strengthening',
      description:
        language === 'ar'
          ? 'تقوية أساسات برج ركين السكني'
          : 'Foundation strengthening for Rakeen residential tower',
    },
    {
      title: language === 'ar' ? 'قصر الأمير سعود بن فيصل آل سعود' : 'Prince Saud bin Faisal Palace',
      client: language === 'ar' ? 'شركة نظم المقاولات' : 'Nuzum Contracting Company',
      location: language === 'ar' ? 'الرياض' : 'Riyadh',
      year: '2023',
      category: language === 'ar' ? 'معالجة هبوط' : 'Settlement Treatment',
      description:
        language === 'ar'
          ? 'معالجة هبوط الأساسات وإصلاح التشققات'
          : 'Foundation settlement treatment and crack repair',
    },
    {
      title: language === 'ar' ? 'برج صميم' : 'Sameem Tower',
      client: language === 'ar' ? 'شركة صميم العقارية' : 'Sameem Real Estate Company',
      location: language === 'ar' ? 'الرياض' : 'Riyadh',
      year: '2023',
      category: language === 'ar' ? 'حقن التربة' : 'Soil Grouting',
      description:
        language === 'ar'
          ? 'أعمال حقن التربة الشاملة لبرج صميم'
          : 'Comprehensive soil grouting works for Sameem Tower',
    },
    {
      title: language === 'ar' ? 'مدرسة المعرفة الخاصة' : 'Al-Maarefa Private School',
      client: language === 'ar' ? 'شركة المعرفة الخاصة العالمية للتعليم' : 'Al-Maarefa International Education Company',
      location: language === 'ar' ? 'الدمام' : 'Dammam',
      year: '2023',
      category: language === 'ar' ? 'معالجة تشققات' : 'Crack Repair',
      description:
        language === 'ar'
          ? 'معالجة التشققات وتقوية الهياكل الإنشائية للمدرسة'
          : 'Crack treatment and structural reinforcement for school',
    },
    {
      title: language === 'ar' ? 'مجمع فلل سكنية بالخبر' : 'Residential Villas Complex - Khobar',
      client: language === 'ar' ? 'مؤسسة نايف عبدالله محمد العتيبي للمقاولات العامة' : 'Naif Abdullah Al-Otaibi General Contracting',
      location: language === 'ar' ? 'الخبر' : 'Khobar',
      year: '2023',
      category: language === 'ar' ? 'حقن التربة' : 'Soil Grouting',
      description:
        language === 'ar'
          ? 'حقن التربة وتثبيت الأساسات لمجمع الفلل'
          : 'Soil grouting and foundation stabilization for villas complex',
    },
    {
      title: language === 'ar' ? 'العبيكان هيلز' : 'Obeikan Hills',
      client: language === 'ar' ? 'العبيكان القابضة' : 'Obeikan Holding',
      location: language === 'ar' ? 'الرياض' : 'Riyadh',
      year: '2023-2024',
      category: language === 'ar' ? 'حقن التربة' : 'Soil Grouting',
      description:
        language === 'ar'
          ? 'مشروع متعدد المراحل لحقن التربة وتثبيت الأساسات'
          : 'Multi-phase soil grouting and foundation stabilization project',
    },
    {
      title: language === 'ar' ? 'مدرسة المعالي الأهلية' : 'Al-Maali National School',
      client: language === 'ar' ? 'الشركة العربية للطاقة والمقاولات' : 'Arab Company for Energy & Contracting',
      location: language === 'ar' ? 'الرياض' : 'Riyadh',
      year: '2024',
      category: language === 'ar' ? 'معالجة هبوط' : 'Settlement Treatment',
      description:
        language === 'ar'
          ? 'معالجة هبوط الأساسات للمدرسة'
          : 'Foundation settlement treatment for school',
    },
    {
      title: language === 'ar' ? 'مصنع الري للعصائر والألبان' : 'Al-Raie Juice & Dairy Factory',
      client: language === 'ar' ? 'مصنع الري للعصائر والألبان' : 'Al-Raie Juice & Dairy Factory',
      location: language === 'ar' ? 'الأحساء' : 'Al-Ahsa',
      year: '2024',
      category: language === 'ar' ? 'حقن التربة' : 'Soil Grouting',
      description:
        language === 'ar'
          ? 'حقن التربة وتقويتها لمصنع الري'
          : 'Soil grouting and strengthening for Al-Raie factory',
    },
    {
      title: language === 'ar' ? 'ستاد أرامكو' : 'Aramco Stadium',
      client: language === 'ar' ? 'أرامكو السعودية / الشركة العربية للمختبرات والتربة / شركة العسيس للمقاولات' : 'Saudi Aramco / Arab Lab & Soil / Al-Asees Contracting',
      location: language === 'ar' ? 'الدمام' : 'Dammam',
      year: '2024',
      category: language === 'ar' ? 'كشف تكهفات' : 'Cavity Detection',
      description:
        language === 'ar'
          ? 'كشف التكهفات ومعالجة الفراغات لستاد أرامكو'
          : 'Cavity detection and void treatment for Aramco Stadium',
    },
  ];

  const categories = [
    language === 'ar' ? 'الكل' : 'All',
    language === 'ar' ? 'حقن التربة' : 'Soil Grouting',
    language === 'ar' ? 'معالجة هبوط' : 'Settlement Treatment',
    language === 'ar' ? 'كشف تكهفات' : 'Cavity Detection',
    language === 'ar' ? 'معالجة تشققات' : 'Crack Repair',
    language === 'ar' ? 'تقوية أساسات' : 'Foundation Strengthening',
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 md:py-24">
        <div className="container text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            {language === 'ar' ? 'مشاريعنا' : 'Our Projects'}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {language === 'ar'
              ? 'مجموعة مختارة من المشاريع التي تكشف عن تفانينا الثابت في إحداث ثورة في مجال حقن التربة ومعالجة التكهفات'
              : 'A curated selection of projects that reveal our unwavering dedication to revolutionizing soil grouting and cavity treatment'}
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-bold">500+</div>
              <div className="text-sm md:text-base opacity-90">
                {language === 'ar' ? 'مشروع منجز' : 'Projects Completed'}
              </div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-bold">100+</div>
              <div className="text-sm md:text-base opacity-90">
                {language === 'ar' ? 'عميل راضٍ' : 'Satisfied Clients'}
              </div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-bold">15+</div>
              <div className="text-sm md:text-base opacity-90">
                {language === 'ar' ? 'سنة خبرة' : 'Years Experience'}
              </div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-bold">20+</div>
              <div className="text-sm md:text-base opacity-90">
                {language === 'ar' ? 'مدينة' : 'Cities'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="secondary">{project.category}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1 rtl:mr-0 rtl:ml-1" />
                      {project.year}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="space-y-2">
                    <div className="flex items-start space-x-2 rtl:space-x-reverse">
                      <Building2 className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{project.client}</span>
                    </div>
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <MapPin className="h-4 w-4 flex-shrink-0" />
                      <span className="text-sm">{project.location}</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Projects Note */}
      <section className="py-16 bg-muted/50">
        <div className="container text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold">
            {language === 'ar' ? 'وأكثر من ذلك بكثير...' : 'And Much More...'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'ar'
              ? 'بالإضافة إلى المشاريع المذكورة أعلاه، قمنا بإنجاز مئات المشاريع السكنية والتجارية في جميع أنحاء المملكة العربية السعودية خلال الفترة من 2010 إلى 2025'
              : 'In addition to the projects mentioned above, we have completed hundreds of residential and commercial projects throughout Saudi Arabia from 2010 to 2025'}
          </p>
        </div>
      </section>
    </div>
  );
}

