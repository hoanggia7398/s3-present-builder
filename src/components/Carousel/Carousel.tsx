"use client";

import { useState, useRef, useEffect } from "react";
import styles from "./Carousel.module.css";

export interface DestinationCard {
  id: string;
  title: string;
  image: string;
  duration?: string; // e.g., "2 days"
  rating?: number; // e.g., 4.9
  maxRating?: number; // e.g., 5
}

export interface CarouselProps {
  cards: DestinationCard[];
  autoplay?: boolean;
  autoplayInterval?: number;
  showIndicators?: boolean;
}

const Carousel = ({
  cards,
  autoplay = false,
  autoplayInterval = 3000,
  showIndicators = true,
}: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Autoplay functionality
  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      goToNext();
    }, autoplayInterval);

    return () => clearInterval(interval);
  }, [autoplay, autoplayInterval, currentIndex]);

  const goToNext = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );

    setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
  };

  const goToPrev = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );

    setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;

    setIsTransitioning(true);
    setCurrentIndex(index);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carousel} ref={carouselRef}>
        <div
          className={styles.inner}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {cards.map((card) => (
            <div key={card.id} className={styles.carouselItem}>
              <div className={styles.card}>
                <div className={styles.imageContainer}>
                  <img
                    src={card.image}
                    alt={card.title}
                    className={styles.image}
                  />
                </div>
                <div className={styles.content}>
                  <h2 className={styles.title}>{card.title}</h2>
                  <div className={styles.details}>
                    {card.duration && (
                      <div className={styles.duration}>
                        <span className={styles.durationIcon}>🕒</span>
                        <span>{card.duration}</span>
                      </div>
                    )}
                    {card.rating !== undefined && (
                      <div className={styles.rating}>
                        <span className={styles.ratingIcon}>⭐</span>
                        <span>
                          {card.rating}/{card.maxRating || 5}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        className={`${styles.navButton} ${styles.prevButton}`}
        onClick={goToPrev}
        aria-label="Previous slide"
      >
        &lt;
      </button>
      <button
        className={`${styles.navButton} ${styles.nextButton}`}
        onClick={goToNext}
        aria-label="Next slide"
      >
        &gt;
      </button>

      {showIndicators && cards.length > 1 && (
        <div className={styles.indicators}>
          {cards.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${index === currentIndex ? styles.active : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
