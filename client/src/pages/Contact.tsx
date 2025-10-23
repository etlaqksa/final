import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

export default function Contact() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast.success(
      language === 'ar'
        ? 'تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.'
        : 'Your message has been sent successfully! We will contact you soon.'
    );

    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: language === 'ar' ? 'الهاتف' : 'Phone',
      value: '+966 53 414 5922',
      link: 'tel:+966534145922',
    },
    {
      icon: Mail,
      title: language === 'ar' ? 'البريد الإلكتروني' : 'Email',
      value: 'info@etlaqksa.com',
      link: 'mailto:info@etlaqksa.com',
    },
    {
      icon: MapPin,
      title: language === 'ar' ? 'العنوان' : 'Address',
      value: language === 'ar' ? 'المملكة العربية السعودية - الرياض' : 'Saudi Arabia - Riyadh',
      link: 'https://maps.google.com/?q=Riyadh,Saudi+Arabia',
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 md:py-24">
        <div className="container text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {language === 'ar'
              ? 'نحن هنا لمساعدتك. تواصل معنا للحصول على استشارة مجانية أو عرض سعر لمشروعك'
              : 'We are here to help you. Contact us for a free consultation or project quote'}
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover-lift">
                <CardContent className="p-6 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <info.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{info.title}</h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-muted-foreground hover:text-primary transition-colors block hover:underline"
                      {...(info.link.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-muted-foreground">{info.value}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">
                  {language === 'ar' ? 'أرسل لنا رسالة' : 'Send Us a Message'}
                </CardTitle>
                <CardDescription>
                  {language === 'ar'
                    ? 'املأ النموذج وسنتواصل معك في أقرب وقت ممكن'
                    : 'Fill out the form and we will contact you as soon as possible'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">
                      {language === 'ar' ? 'الاسم الكامل' : 'Full Name'} *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder={language === 'ar' ? 'أدخل اسمك الكامل' : 'Enter your full name'}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">
                      {language === 'ar' ? 'البريد الإلكتروني' : 'Email'} *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder={
                        language === 'ar' ? 'أدخل بريدك الإلكتروني' : 'Enter your email'
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">
                      {language === 'ar' ? 'رقم الهاتف' : 'Phone Number'} *
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder={language === 'ar' ? 'أدخل رقم هاتفك' : 'Enter your phone number'}
                      dir="ltr"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">
                      {language === 'ar' ? 'الموضوع' : 'Subject'} *
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder={language === 'ar' ? 'موضوع الرسالة' : 'Message subject'}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">
                      {language === 'ar' ? 'الرسالة' : 'Message'} *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder={
                        language === 'ar'
                          ? 'اكتب رسالتك هنا...'
                          : 'Write your message here...'
                      }
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting
                      ? language === 'ar'
                        ? 'جاري الإرسال...'
                        : 'Sending...'
                      : language === 'ar'
                        ? 'إرسال الرسالة'
                        : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map and Additional Info */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">
                    {language === 'ar' ? 'موقعنا' : 'Our Location'}
                  </CardTitle>
                  <CardDescription>
                    {language === 'ar'
                      ? 'نخدم جميع مناطق المملكة العربية السعودية'
                      : 'We serve all regions of Saudi Arabia'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.2537!2d46.6753!3d24.7136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQyJzQ5LjAiTiA0NsKwNDAnMzEuMSJF!5e0!3m2!1sen!2ssa!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={language === 'ar' ? 'موقع الشركة' : 'Company Location'}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold">
                    {language === 'ar' ? 'ساعات العمل' : 'Working Hours'}
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>{language === 'ar' ? 'السبت - الخميس' : 'Saturday - Thursday'}</span>
                      <span dir="ltr">8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{language === 'ar' ? 'الجمعة' : 'Friday'}</span>
                      <span>{language === 'ar' ? 'مغلق' : 'Closed'}</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-primary-foreground/20">
                    <p className="text-sm opacity-90">
                      {language === 'ar'
                        ? 'للحالات الطارئة، نحن متاحون على مدار الساعة'
                        : 'For emergencies, we are available 24/7'}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-16 bg-[#25D366] text-white">
        <div className="container text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            {language === 'ar' ? 'تواصل معنا عبر واتساب' : 'Contact Us via WhatsApp'}
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            {language === 'ar'
              ? 'للتواصل السريع والمباشر، راسلنا على واتساب'
              : 'For quick and direct communication, message us on WhatsApp'}
          </p>
          <a href="https://wa.me/966534145922" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              {language === 'ar' ? 'فتح واتساب' : 'Open WhatsApp'}
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}

