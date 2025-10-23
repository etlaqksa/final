import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  schema?: object;
}

export function SEO({
  title = 'شركة إطلاق المتميزة | أفضل شركة حقن تربة وكشف فراغات في السعودية',
  description = 'شركة إطلاق المتميزة - أفضل شركة حقن تربة، كشف فراغات، معالجة هبوط، تقوية أساسات في الرياض، جدة، الدمام. خبرة +15 سنة في حقن التربة ومعالجة التكهفات. استشارات هندسية وجيوتكنيك احترافية.',
  keywords = 'حقن أسمنتي, حقن التربة, حقن تربة, شركة حقن, شركة حقن تربة, شركات حقن تربة, شركة حقن التربة, شركات حقن التربة, شركة حقن تربه, شركات حقن تربه, شركات حقن الخرسانة, شركة حقن خرسانة, حقن الخرسانة, شركة معالجة هبوطات, شركة معالجة تشققات, معالجة التربة, شركات معالجة التربة, شركة تقوية أساسات, تقوية الأساسات, شركات تقوية الأساسات, كشف فراغات, كشف الفراغات, دراسة تكهفات, دراسة التكهفات, كشف تكهفات, فحص الكهوف, كشف الكهوف, فحص فراغات التربة, دراسة التربة, فحص جيولوجي, دراسة جيولوجية, فحص تشققات, تشققات مباني, تصدعات المباني, تصدع أساسات, هبوطات مبنى, هبوط مباني, هبوط أساس, مشاكل التربة, مشاكل الأساسات, معالجة الفراغات, معالجة التكهفات, معالجة الهبوط الأرضي, جيوتكنيك, استشارات هندسية, تقارير تربة, تقرير تربة, تقرير فحص تربة, فحص تربة, فحص تربة جيولوجي, شركات فحص التربة, مكتب هندسي, مكاتب هندسية, شركة هندسية, شركات هندسية بالسعودية, شركات جيوتقنية, تقارير جيوتقنية, شركة دراسات جيوتقنية, مهندس جيولوجي, مهندسون جيولوجيون, حقن تربة في الرياض, شركات حقن تربة في الرياض, شركة حقن تربة في الرياض, كشف فراغات في الرياض, فحص التربة في الرياض, معالجة هبوط في الرياض, كشف تكهفات في الرياض, تقوية أساسات في الرياض, شركة جيوتكنيك في الرياض, استشارات هندسية في الرياض, حقن تربة في جدة, شركات حقن تربة في جدة, شركة حقن تربة في جدة, كشف فراغات في جدة, فحص التربة في جدة, معالجة هبوط في جدة, كشف تكهفات في جدة, تقوية أساسات في جدة, شركة جيوتكنيك في جدة, استشارات هندسية في جدة, حقن تربة في الدمام, شركات حقن تربة في الدمام, شركة حقن تربة في الدمام, كشف فراغات في الدمام, فحص التربة في الدمام, معالجة هبوط في الدمام, كشف تكهفات في الدمام, تقوية أساسات في الدمام, شركة جيوتكنيك في الدمام, استشارات هندسية في الدمام, إطلاق المتميزة, شركة إطلاق المتميزة, شركة إطلاق المتميزة للحقن, شركة إطلاق المتميزة لفحص التربة, ETLAQ DISTINGUISHED COMPANY, etlaqksa, etlaqksa.com, شركة جيوتكنيك إطلاق, شركة كشف فراغات إطلاق, إطلاق تربة, أفضل شركة حقن تربة, أفضل شركات حقن تربة, أفضل شركة كشف فراغات, أفضل شركة دراسة تكهفات, أفضل شركة جيوتكنيك, أفضل شركة فحص تربة, أفضل شركة معالجة تشققات, أفضل شركة فحص الكهوف, أفضل شركة تقوية أساسات, أفضل شركة معالجة هبوط, أفضل شركة استشارات هندسية, أفضل شركة معالجة التربة, أفضل شركة تصدعات, أفضل شركة تقارير تربة, أفضل شركة دراسات جيولوجية, أفضل شركة معالجة الفراغات, أحسن شركة حقن تربة, أحسن شركات حقن تربة, أحسن شركة كشف فراغات, أحسن شركة فحص التربة, أحسن شركة دراسة التكهفات, أحسن شركة جيوتكنيك, أحسن شركة تقوية أساسات, أحسن شركة فحص الكهوف, أحسن شركة تشققات مباني, أحسن شركة تصدعات, أحسن شركة فحص جيولوجي, أحسن شركة تقارير تربة, أحسن شركة معالجة التربة, أحسن شركة استشارات هندسية, أفضل شركة حقن تربة في الرياض, أحسن شركة كشف فراغات في جدة, أفضل شركة معالجة تشققات في الدمام',
  image = 'https://etlaqksa.com/og-image.jpg',
  url = 'https://etlaqksa.com',
  type = 'website',
  schema,
}: SEOProps) {
  const defaultSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'شركة إطلاق المتميزة المحدودة',
    alternateName: 'ETLAQ DISTINGUISHED COMPANY',
    description:
      'شركة متخصصة في حقن التربة، كشف الفراغات والتكهفات، معالجة هبوط المباني، تقوية الأساسات، والاستشارات الهندسية الجيوتقنية في المملكة العربية السعودية',
    url: 'https://etlaqksa.com',
    telephone: '+966-53-414-7112',
    email: 'etlaqksa@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'الرياض',
      addressRegion: 'الرياض',
      addressCountry: 'SA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 24.7136,
      longitude: 46.6753,
    },
    areaServed: [
      'الرياض',
      'جدة',
      'الدمام',
      'الخبر',
      'المدينة المنورة',
      'مكة المكرمة',
      'الطائف',
      'بريدة',
      'القصيم',
      'حائل',
      'أبها',
      'جيزان',
      'نجران',
      'تبوك',
      'الجبيل',
      'الهفوف',
      'القطيف',
      'الظهران',
    ],
    priceRange: '$$',
    openingHours: 'Mo-Su 08:00-20:00',
    sameAs: [
      'https://www.facebook.com/etlaqksa',
      'https://twitter.com/etlaqksa',
      'https://www.instagram.com/etlaqksa',
      'https://www.linkedin.com/company/etlaqksa',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'خدمات حقن التربة والاستشارات الهندسية',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'حقن التربة (الحقن الأسمنتي)',
            description: 'خدمات حقن التربة بالأسمنت لتقوية التربة وملء الفراغات',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'كشف الفراغات والتكهفات',
            description: 'استخدام أحدث تقنيات الكشف الجيوفيزيائي لتحديد الفراغات تحت الأرض',
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

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="شركة إطلاق المتميزة المحدودة" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="شركة إطلاق المتميزة" />
      <meta property="og:locale" content="ar_SA" />
      <meta property="og:locale:alternate" content="en_US" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Additional Meta Tags for SEO */}
      <meta name="geo.region" content="SA" />
      <meta name="geo.placename" content="الرياض" />
      <meta name="geo.position" content="24.7136;46.6753" />
      <meta name="ICBM" content="24.7136, 46.6753" />
      <meta name="language" content="Arabic" />
      <meta name="revisit-after" content="7 days" />
      <meta name="rating" content="general" />
      <meta name="distribution" content="global" />

      {/* Structured Data */}
      <script type="application/ld+json">{JSON.stringify(schema || defaultSchema)}</script>
    </Helmet>
  );
}

