import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowLeft, ArrowRight, Calendar, Clock, User } from 'lucide-react';
import { Link, useParams } from 'wouter';
import { articles } from '@/data/articles';

export default function BlogPost() {
  const { language } = useLanguage();
  const params = useParams();
  const slug = params.slug;

  const article = articles.find(a => a.slug === slug);

  if (!article) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">
            {language === 'ar' ? 'المقال غير موجود' : 'Article Not Found'}
          </h1>
          <p className="text-muted-foreground">
            {language === 'ar'
              ? 'عذراً، المقال الذي تبحث عنه غير متوفر'
              : 'Sorry, the article you are looking for is not available'}
          </p>
          <Link href="/blog">
            <Button>
              {language === 'ar' ? 'العودة للمقالات' : 'Back to Articles'}
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const content = language === 'ar' ? article.content : article.contentEn;

  return (
    <div className="w-full">
      {/* Article Header */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 md:py-24">
        <div className="container max-w-4xl">
          <Link href="/blog">
            <Button variant="ghost" className="mb-6">
              {language === 'ar' ? (
                <>
                  <ArrowRight className="h-4 w-4 ml-2" />
                  العودة للمقالات
                </>
              ) : (
                <>
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Articles
                </>
              )}
            </Button>
          </Link>

          <div className="space-y-6">
            <Badge variant="secondary" className="text-base">
              {language === 'ar' ? article.category : article.categoryEn}
            </Badge>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              {language === 'ar' ? article.title : article.titleEn}
            </h1>

            <div className="flex flex-wrap gap-6 text-muted-foreground">
              <div className="flex items-center">
                <User className="h-5 w-5 mr-2 rtl:mr-0 rtl:ml-2" />
                {article.author}
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2 rtl:mr-0 rtl:ml-2" />
                {new Date(article.date).toLocaleDateString(
                  language === 'ar' ? 'ar-SA' : 'en-US'
                )}
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2 rtl:mr-0 rtl:ml-2" />
                {article.readTime}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <Card>
            <CardContent className="p-8 md:p-12">
              <div
                className="prose prose-lg max-w-none dark:prose-invert
                  prose-headings:font-bold prose-headings:text-foreground
                  prose-h1:text-4xl prose-h1:mb-6
                  prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4
                  prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3
                  prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-4
                  prose-ul:text-muted-foreground prose-ul:my-6
                  prose-li:mb-2
                  prose-strong:text-foreground prose-strong:font-semibold"
                dangerouslySetInnerHTML={{
                  __html: content
                    .split('\n')
                    .map(line => {
                      if (line.startsWith('# ')) {
                        return `<h1>${line.substring(2)}</h1>`;
                      } else if (line.startsWith('## ')) {
                        return `<h2>${line.substring(3)}</h2>`;
                      } else if (line.startsWith('### ')) {
                        return `<h3>${line.substring(4)}</h3>`;
                      } else if (line.startsWith('- ')) {
                        return `<li>${line.substring(2)}</li>`;
                      } else if (line.trim() === '') {
                        return '<br/>';
                      } else {
                        return `<p>${line}</p>`;
                      }
                    })
                    .join(''),
                }}
              />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/50">
        <div className="container text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            {language === 'ar' ? 'هل لديك استفسار حول هذا الموضوع؟' : 'Have a Question About This Topic?'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'ar'
              ? 'تواصل معنا للحصول على استشارة مجانية من خبرائنا'
              : 'Contact us for a free consultation from our experts'}
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

