/**
 * Composant 'Carousel' qui affiche une liste d'images sous forme de carrousel.
 *
 * @param {string[]} props.images - Un tableau d'images à afficher dans le carrousel.
 * @param {string} [props.className] - Option de personnalisation de la classe du composant.
 *
 * @returns {JSX.Element} The rendered Carousel component.
 *
 * @example
 * ```tsx
 * <Carousel
 *   images={['image1.jpg', 'image2.jpg', 'image3.jpg']}
 *   className="customClass or TailwindClass"
 * />
 * ```
 */

import { useState } from "react";

type CarouselProps = {
  images: string[];
  className?: string;
};

const Carousel = ({ images, className }: CarouselProps) => {
  const [current, setCurrent] = useState(0);
  const carouselControls = {
    left: () =>
      setCurrent((prev) => (prev - 1 + images.length) % images.length),
    right: () => setCurrent((prev) => (prev + 1) % images.length),
  };

  return (
    <section className={`relative ${className}`}>
      {/* IMAGE */}
      <img
        src={images[current]}
        alt=""
        className="h-full w-full object-cover"
      />

      {/* BUTTONS */}
      {Object.entries(carouselControls).map(([button, action], index) => (
        <button
          key={index}
          onClick={action}
          className={`absolute top-1/2 ${button === "left" ? "left-0" : "right-0"} h-full w-1/6 max-w-20 -translate-y-1/2 text-white/50 hover:text-white md:w-10`}
        >
          <i className={`fa-solid fa-chevron-${button} text-2xl`}></i>
        </button>
      ))}

      {/* DOTS */}
      <div className="absolute bottom-4 left-1/2 flex w-full -translate-x-1/2 items-center justify-center space-x-1.5 px-6">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-1 w-5 min-w-1 flex-shrink rounded-full shadow-lg ${index === current ? "bg-primary-500" : "bg-white/50 hover:bg-white/75"}`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Carousel;
