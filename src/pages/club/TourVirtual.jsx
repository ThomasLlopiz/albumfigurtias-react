import { useState, useEffect } from 'react';
export const TourVirtual = () => {
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Generamos un array de 29 imágenes (1 a 29)
    const imageCount = 29;
    const images = Array.from({ length: imageCount }, (_, i) => ({
        src: `./assets/tour/${i + 1}.jpg`,
        alt: `Imagen ${i + 1}`,
    }));

    const openLightbox = (index) => {
        setCurrentIndex(index);
        setIsLightboxOpen(true);
    };

    const closeLightbox = () => {
        setIsLightboxOpen(false);
    };

    const showPrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const showNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Manejo de teclas
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!isLightboxOpen) return;
            if (e.key === 'ArrowLeft') showPrev();
            if (e.key === 'ArrowRight') showNext();
            if (e.key === 'Escape') closeLightbox();
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isLightboxOpen]);

    return (
        <>
            <section className="py-4 relative my-24">
                <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                    <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-left">
                        Tour Virtual
                    </h2>
                    <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-left">
                        Conoce nuestras instalaciones.
                    </p>
                    <div id="masonry-grid" className="masonry my-6">
                        {images.map((image, index) => (
                            <div key={index} className="masonry-item">
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="cursor-pointer open-lightbox"
                                    onClick={() => openLightbox(index)}
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div
                id="lightbox"
                className={`fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center ${isLightboxOpen ? '' : 'hidden'
                    }`}
                onClick={(e) => e.target.id === 'lightbox' && closeLightbox()}
            >
                <span
                    id="close-lightbox"
                    className="absolute top-20 right-10 text-white text-3xl cursor-pointer"
                    onClick={closeLightbox}
                >
                    ×
                </span>
                <button id="prev" className="hidden" onClick={showPrev}>
                    ←
                </button>
                <img
                    id="lightbox-img"
                    className="max-w-full max-h-full rounded-lg px-2"
                    src={images[currentIndex]?.src}
                    alt={images[currentIndex]?.alt}
                />
                <button id="next" className="hidden" onClick={showNext}>
                    →
                </button>
            </div>
        </>
    );
};