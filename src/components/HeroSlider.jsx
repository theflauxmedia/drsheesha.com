import { useState, useEffect, useRef } from 'react';
import { HERO_SLIDES, HERO_SLIDE_INTERVAL_MS } from '../data/heroSlides';

const INTERVAL_SEC = HERO_SLIDE_INTERVAL_MS / 1000;

/**
 * Hero background — single active image in DOM (lightweight).
 * CSS handles crossfade and Ken Burns.
 */
const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const pausedRef = useRef(paused);

  pausedRef.current = paused;

  const goTo = (index) => {
    setCurrent((index + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  useEffect(() => {
    const tick = () => {
      if (!pausedRef.current) {
        setCurrent((c) => (c + 1) % HERO_SLIDES.length);
      }
    };

    const timer = setInterval(tick, HERO_SLIDE_INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const nextIndex = (current + 1) % HERO_SLIDES.length;
    const img = new Image();
    img.src = HERO_SLIDES[nextIndex].src;
  }, [current]);

  const slide = HERO_SLIDES[current];

  return (
    <div
      className="hero-slider"
      aria-hidden="true"
      style={{ '--hero-interval': `${INTERVAL_SEC}s` }}
    >
      <div className="hero-slider__stage">
        <img
          key={slide.id}
          src={slide.src}
          alt=""
          className="hero-slider__img"
          fetchPriority="high"
          decoding="async"
        />
      </div>

      <div className="hero-slider__shade" />
      <div className="hero-slider__vignette" />
      <div className="hero-slider__gold" />

      <div
        className="hero-slider__ui"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <div
          className={`hero-slider__progress ${paused ? 'is-paused' : ''}`}
          aria-hidden="true"
        >
          <span key={current} className="hero-slider__progress-bar" />
        </div>

        <div
          className="hero-slider__dots"
          role="tablist"
          aria-label="Hero slideshow"
        >
          {HERO_SLIDES.map((s, i) => (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={i === current}
              aria-label={`Slide ${i + 1} of ${HERO_SLIDES.length}`}
              className={`hero-slider__dot ${i === current ? 'is-active' : ''}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
