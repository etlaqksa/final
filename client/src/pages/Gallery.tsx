import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { useLanguage } from '@/contexts/LanguageContext';
import { X } from 'lucide-react';
import { useState } from 'react';

export default function Gallery() {
  const { language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Generate array of 55 images
  const images = Array.from({ length: 55 }, (_, i) => ({
    id: i + 1,
    src: `/gallery/Etlaq_${i + 1}.jpg`,
    alt: `${language === 'ar' ? 'مشروع إطلاق' : 'Etlaq Project'} ${i + 1}`,
  }));

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 md:py-24">
        <div className="container text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            {language === 'ar' ? 'معرض الصور' : 'Photo Gallery'}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {language === 'ar'
              ? 'استعرض مجموعة من صور مشاريعنا المنجزة في مجالات حقن التربة ومعالجة التكهفات'
              : 'Browse a collection of photos from our completed projects in soil grouting and cavity treatment'}
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <Card
                key={image.id}
                className="overflow-hidden cursor-pointer group hover:shadow-lg transition-all duration-300"
                onClick={() => openLightbox(index)}
              >
                <div className="aspect-square relative overflow-hidden bg-muted">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Dialog */}
      <Dialog open={selectedImage !== null} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-7xl w-full h-[90vh] p-0 bg-black/95 border-none">
          <VisuallyHidden>
            <DialogTitle>
              {selectedImage !== null ? images[selectedImage].alt : ''}
            </DialogTitle>
          </VisuallyHidden>
          {selectedImage !== null && (
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Previous Button */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Previous"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              {/* Image */}
              <div className="w-full h-full flex items-center justify-center p-8">
                <img
                  src={images[selectedImage].src}
                  alt={images[selectedImage].alt}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {/* Next Button */}
              <button
                onClick={goToNext}
                className="absolute right-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Next"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-full bg-white/10 text-white text-sm">
                {selectedImage + 1} / {images.length}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

