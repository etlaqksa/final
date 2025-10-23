import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Calendar, Clock, User } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'wouter';

interface Article {
  id: number;
  title: string;
  titleEn: string;
  excerpt: string;
  excerptEn: string;
  category: string;
  categoryEn: string;
  date: string;
  readTime: string;
  author: string;
  slug: string;
}

export default function Blog() {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const articles: Article[] = [
    {
      id: 1,
      title: 'ما هو حقن التربة وكيف يعمل؟',
      titleEn: 'What is Soil Grouting and How Does It Work?',
      excerpt: 'دليل شامل لفهم تقنية حقن التربة وأنواعها المختلفة وكيفية تطبيقها في المشاريع الإنشائية',
      excerptEn: 'A comprehensive guide to understanding soil grouting technology, its types, and application in construction projects',
      category: 'حقن التربة',
      categoryEn: 'Soil Grouting',
      date: '2025-10-15',
      readTime: '8 دقائق',
      author: 'م. أحمد العتيبي',
      slug: 'what-is-soil-grouting',
    },
    {
      id: 2,
      title: 'أسباب هبوط المباني وطرق معالجتها',
      titleEn: 'Causes of Building Settlement and Treatment Methods',
      excerpt: 'تعرف على الأسباب الرئيسية لهبوط المباني والحلول الهندسية الفعالة لمعالجتها',
      excerptEn: 'Learn about the main causes of building settlement and effective engineering solutions',
      category: 'معالجة الهبوط',
      categoryEn: 'Settlement Treatment',
      date: '2025-10-10',
      readTime: '10 دقائق',
      author: 'م. سارة الدوسري',
      slug: 'building-settlement-causes',
    },
    {
      id: 3,
      title: 'تقنيات كشف التكهفات تحت الأرض',
      titleEn: 'Underground Cavity Detection Techniques',
      excerpt: 'استعراض لأحدث التقنيات الجيوفيزيائية المستخدمة في كشف التكهفات والفراغات تحت سطح الأرض',
      excerptEn: 'Review of the latest geophysical techniques used in detecting underground cavities and voids',
      category: 'كشف التكهفات',
      categoryEn: 'Cavity Detection',
      date: '2025-10-05',
      readTime: '12 دقيقة',
      author: 'د. محمد الشمري',
      slug: 'cavity-detection-techniques',
    },
    {
      id: 4,
      title: 'أنواع الحقن الأسمنتي واستخداماتها',
      titleEn: 'Types of Cement Grouting and Their Applications',
      excerpt: 'دليل تفصيلي لأنواع الحقن الأسمنتي المختلفة: حقن الضغط، حقن النفاذ، حقن النفث، وحقن الستار',
      excerptEn: 'Detailed guide to different types of cement grouting: compaction, permeation, jet, and curtain grouting',
      category: 'حقن التربة',
      categoryEn: 'Soil Grouting',
      date: '2025-09-28',
      readTime: '15 دقيقة',
      author: 'م. خالد السبيعي',
      slug: 'cement-grouting-types',
    },
    {
      id: 5,
      title: 'التشققات في المباني: الأسباب والحلول',
      titleEn: 'Building Cracks: Causes and Solutions',
      excerpt: 'كيفية تشخيص أنواع التشققات المختلفة وتحديد الطرق المناسبة لإصلاحها بشكل دائم',
      excerptEn: 'How to diagnose different types of cracks and determine appropriate permanent repair methods',
      category: 'إصلاح التشققات',
      categoryEn: 'Crack Repair',
      date: '2025-09-20',
      readTime: '9 دقائق',
      author: 'م. فاطمة القحطاني',
      slug: 'building-cracks-solutions',
    },
    {
      id: 6,
      title: 'أهمية فحص التربة قبل البناء',
      titleEn: 'Importance of Soil Testing Before Construction',
      excerpt: 'لماذا يعتبر فحص التربة خطوة أساسية قبل البدء في أي مشروع إنشائي وكيف يمكن أن يوفر التكاليف',
      excerptEn: 'Why soil testing is essential before starting any construction project and how it can save costs',
      category: 'فحص التربة',
      categoryEn: 'Soil Testing',
      date: '2025-09-15',
      readTime: '7 دقائق',
      author: 'د. عبدالله الغامدي',
      slug: 'soil-testing-importance',
    },
    {
      id: 7,
      title: 'تقنية رادار اختراق الأرض (GPR)',
      titleEn: 'Ground Penetrating Radar (GPR) Technology',
      excerpt: 'كيف تعمل تقنية GPR في كشف الفراغات والتكهفات تحت الأرض دون الحاجة للحفر',
      excerptEn: 'How GPR technology works in detecting underground voids and cavities without excavation',
      category: 'كشف التكهفات',
      categoryEn: 'Cavity Detection',
      date: '2025-09-08',
      readTime: '11 دقيقة',
      author: 'م. نواف المطيري',
      slug: 'gpr-technology',
    },
    {
      id: 8,
      title: 'معالجة هبوط الأرضيات الخرسانية',
      titleEn: 'Concrete Slab Settlement Treatment',
      excerpt: 'تقنيات رفع وتسوية الأرضيات الخرسانية المهبوطة باستخدام الحقن والتقنيات الحديثة',
      excerptEn: 'Techniques for lifting and leveling settled concrete slabs using grouting and modern technologies',
      category: 'معالجة الهبوط',
      categoryEn: 'Settlement Treatment',
      date: '2025-09-01',
      readTime: '10 دقائق',
      author: 'م. ريم الحربي',
      slug: 'concrete-slab-settlement',
    },
    {
      id: 9,
      title: 'حقن الإيبوكسي لإصلاح التشققات الإنشائية',
      titleEn: 'Epoxy Injection for Structural Crack Repair',
      excerpt: 'دليل شامل لاستخدام حقن الإيبوكسي في إصلاح التشققات الإنشائية واستعادة قوة الخرسانة',
      excerptEn: 'Comprehensive guide to using epoxy injection for structural crack repair and concrete strength restoration',
      category: 'إصلاح التشققات',
      categoryEn: 'Crack Repair',
      date: '2025-08-25',
      readTime: '13 دقيقة',
      author: 'م. طارق الزهراني',
      slug: 'epoxy-injection-repair',
    },
    {
      id: 10,
      title: 'تقوية الأساسات الضعيفة',
      titleEn: 'Strengthening Weak Foundations',
      excerpt: 'طرق تقوية الأساسات القائمة وزيادة قدرتها على تحمل الأحمال الإضافية',
      excerptEn: 'Methods for strengthening existing foundations and increasing their load-bearing capacity',
      category: 'تقوية الأساسات',
      categoryEn: 'Foundation Strengthening',
      date: '2025-08-18',
      readTime: '14 دقيقة',
      author: 'د. سلطان العنزي',
      slug: 'foundation-strengthening',
    },
    {
      id: 11,
      title: 'المشاكل الجيوتقنية الشائعة في السعودية',
      titleEn: 'Common Geotechnical Problems in Saudi Arabia',
      excerpt: 'استعراض للمشاكل الجيوتقنية الأكثر شيوعاً في المملكة وكيفية التعامل معها',
      excerptEn: 'Review of the most common geotechnical problems in the Kingdom and how to address them',
      category: 'فحص التربة',
      categoryEn: 'Soil Testing',
      date: '2025-08-10',
      readTime: '16 دقيقة',
      author: 'م. منى الشهري',
      slug: 'geotechnical-problems-saudi',
    },
    {
      id: 12,
      title: 'تقنية Jet Grouting وتطبيقاتها',
      titleEn: 'Jet Grouting Technology and Applications',
      excerpt: 'كيف تعمل تقنية حقن النفث وما هي استخداماتها في المشاريع الكبرى',
      excerptEn: 'How jet grouting technology works and its applications in major projects',
      category: 'حقن التربة',
      categoryEn: 'Soil Grouting',
      date: '2025-08-03',
      readTime: '12 دقيقة',
      author: 'م. عبدالرحمن الراشد',
      slug: 'jet-grouting-technology',
    },
    {
      id: 13,
      title: 'كيفية اختيار تقنية الحقن المناسبة',
      titleEn: 'How to Choose the Right Grouting Technique',
      excerpt: 'معايير اختيار تقنية الحقن الأنسب حسب نوع التربة والمشكلة المراد حلها',
      excerptEn: 'Criteria for selecting the most suitable grouting technique based on soil type and problem',
      category: 'حقن التربة',
      categoryEn: 'Soil Grouting',
      date: '2025-07-28',
      readTime: '11 دقيقة',
      author: 'د. ياسر الخالدي',
      slug: 'choosing-grouting-technique',
    },
    {
      id: 14,
      title: 'معالجة تسربات المياه في الأساسات',
      titleEn: 'Water Leakage Treatment in Foundations',
      excerpt: 'طرق كشف ومعالجة تسربات المياه في الأساسات باستخدام تقنيات الحقن والعزل',
      excerptEn: 'Methods for detecting and treating water leakage in foundations using grouting and waterproofing',
      category: 'معالجة الهبوط',
      categoryEn: 'Settlement Treatment',
      date: '2025-07-20',
      readTime: '9 دقائق',
      author: 'م. هند العمري',
      slug: 'foundation-water-leakage',
    },
    {
      id: 15,
      title: 'التدعيم بألياف الكربون للمباني',
      titleEn: 'Carbon Fiber Reinforcement for Buildings',
      excerpt: 'استخدام ألياف الكربون في تقوية وتدعيم العناصر الإنشائية الضعيفة',
      excerptEn: 'Using carbon fiber to strengthen and reinforce weak structural elements',
      category: 'إصلاح التشققات',
      categoryEn: 'Crack Repair',
      date: '2025-07-15',
      readTime: '10 دقائق',
      author: 'م. بدر الحارثي',
      slug: 'carbon-fiber-reinforcement',
    },
    {
      id: 16,
      title: 'الفحص الدوري للمباني: أهميته وتوقيته',
      titleEn: 'Periodic Building Inspection: Importance and Timing',
      excerpt: 'لماذا يجب إجراء فحص دوري للمباني وما هو التوقيت المناسب لذلك',
      excerptEn: 'Why periodic building inspections are necessary and when they should be conducted',
      category: 'فحص التربة',
      categoryEn: 'Soil Testing',
      date: '2025-07-08',
      readTime: '8 دقائق',
      author: 'م. لينا الجهني',
      slug: 'periodic-building-inspection',
    },
    {
      id: 17,
      title: 'التكهفات الصخرية: المخاطر والحلول',
      titleEn: 'Rock Cavities: Risks and Solutions',
      excerpt: 'كيفية التعامل مع التكهفات الصخرية في مواقع البناء وطرق معالجتها',
      excerptEn: 'How to deal with rock cavities in construction sites and treatment methods',
      category: 'كشف التكهفات',
      categoryEn: 'Cavity Detection',
      date: '2025-07-01',
      readTime: '13 دقيقة',
      author: 'د. فهد المالك',
      slug: 'rock-cavities-solutions',
    },
    {
      id: 18,
      title: 'تحسين خواص التربة قبل البناء',
      titleEn: 'Soil Improvement Before Construction',
      excerpt: 'تقنيات تحسين خواص التربة الضعيفة لجعلها صالحة للبناء',
      excerptEn: 'Techniques for improving weak soil properties to make it suitable for construction',
      category: 'حقن التربة',
      categoryEn: 'Soil Grouting',
      date: '2025-06-25',
      readTime: '15 دقيقة',
      author: 'م. عمر الشهراني',
      slug: 'soil-improvement-techniques',
    },
  ];

  const categories = [
    { ar: 'الكل', en: 'All', value: 'all' },
    { ar: 'حقن التربة', en: 'Soil Grouting', value: 'grouting' },
    { ar: 'معالجة الهبوط', en: 'Settlement Treatment', value: 'settlement' },
    { ar: 'كشف التكهفات', en: 'Cavity Detection', value: 'cavity' },
    { ar: 'إصلاح التشققات', en: 'Crack Repair', value: 'cracks' },
    { ar: 'فحص التربة', en: 'Soil Testing', value: 'testing' },
    { ar: 'تقوية الأساسات', en: 'Foundation Strengthening', value: 'foundation' },
  ];

  const filteredArticles = selectedCategory === 'all'
    ? articles
    : articles.filter(article => {
        const categoryMap: Record<string, string> = {
          'grouting': language === 'ar' ? 'حقن التربة' : 'Soil Grouting',
          'settlement': language === 'ar' ? 'معالجة الهبوط' : 'Settlement Treatment',
          'cavity': language === 'ar' ? 'كشف التكهفات' : 'Cavity Detection',
          'cracks': language === 'ar' ? 'إصلاح التشققات' : 'Crack Repair',
          'testing': language === 'ar' ? 'فحص التربة' : 'Soil Testing',
          'foundation': language === 'ar' ? 'تقوية الأساسات' : 'Foundation Strengthening',
        };
        return article.category === categoryMap[selectedCategory] || article.categoryEn === categoryMap[selectedCategory];
      });

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 md:py-24">
        <div className="container text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            {language === 'ar' ? 'المقالات التقنية' : 'Technical Articles'}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {language === 'ar'
              ? 'مقالات متخصصة في حقن التربة ومعالجة التكهفات والهندسة الجيوتقنية'
              : 'Specialized articles on soil grouting, cavity treatment, and geotechnical engineering'}
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 border-b">
        <div className="container">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.value)}
                className="text-sm"
              >
                {language === 'ar' ? category.ar : category.en}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <Card key={article.id} className="hover:shadow-lg transition-shadow flex flex-col">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary">
                      {language === 'ar' ? article.category : article.categoryEn}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1 rtl:mr-0 rtl:ml-1" />
                      {article.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-xl line-clamp-2">
                    {language === 'ar' ? article.title : article.titleEn}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {language === 'ar' ? article.excerpt : article.excerptEn}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto space-y-4">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1 rtl:mr-0 rtl:ml-1" />
                      {article.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1 rtl:mr-0 rtl:ml-1" />
                      {new Date(article.date).toLocaleDateString(language === 'ar' ? 'ar-SA' : 'en-US')}
                    </div>
                  </div>
                  <Link href={`/blog/${article.slug}`}>
                    <Button variant="outline" className="w-full">
                      {language === 'ar' ? 'اقرأ المزيد' : 'Read More'}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/50">
        <div className="container text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            {language === 'ar' ? 'هل لديك استفسار تقني؟' : 'Have a Technical Question?'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'ar'
              ? 'فريقنا من المهندسين المتخصصين جاهز للإجابة على استفساراتكم التقنية'
              : 'Our team of specialized engineers is ready to answer your technical questions'}
          </p>
          <Link href="/contact">
            <Button size="lg" className="text-lg px-8">
              {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

