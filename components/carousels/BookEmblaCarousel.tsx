'use client';
import React from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay'
import { DotButton, useDotButton } from './CarouselDotButton';
import useEmblaCarousel from 'embla-carousel-react';
import BookCard from '@/ui/books/BookCard';
import Styles from './Carousel.module.css';

type PropType = {
  slides: number[]
}

const BookEmblaCarousel: React.FC<PropType> = (props) => {
  const { slides } = props

  const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true, duration: 50 }
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [Autoplay({ delay: 6000, stopOnInteraction: false })])

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <section className={Styles.embla}>
      <div className={Styles.embla__viewport} ref={emblaRef}>
        <div className={Styles.embla__container}>
          {slides.map((slide, index) => (
            <BookCard
              key={`books-${index}`}
              data={{ bookData: slide, index: index }}
            />
          ))}
        </div>
      </div>

      {/* <div className={Styles.embla__controls}>
        <div className={Styles.embla__dots}>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={Styles.embla__dot.concat(
                index === selectedIndex ? Styles['embla__dot--selected'] : ''
              )}
            />
          ))}
        </div>
      </div> */}
    </section>
  )
}

export default BookEmblaCarousel
