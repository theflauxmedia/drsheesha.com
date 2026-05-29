import { useEffect, useRef, useState } from 'react';

/**
 * Gallery image tile — lazy loads when near viewport.
 * No Framer Motion here (keeps scroll smooth with many images).
 */
const GalleryTile = ({ photo, className = '', lazy = true, style }) => {
  const ref = useRef(null);
  const [showImage, setShowImage] = useState(!lazy);

  useEffect(() => {
    if (!lazy) return undefined;

    const el = ref.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowImage(true);
          observer.disconnect();
        }
      },
      { rootMargin: '120px', threshold: 0.01 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [lazy]);

  return (
    <figure
      ref={ref}
      className={`gallery-tile ${className}`.trim()}
      style={style}
    >
      {showImage ? (
        <img
          src={photo.src}
          alt={photo.alt}
          loading="lazy"
          decoding="async"
          fetchPriority="low"
        />
      ) : (
        <div className="gallery-tile__skeleton" aria-hidden="true" />
      )}
      <div className="gallery-tile__overlay">
        <span>{photo.label}</span>
      </div>
    </figure>
  );
};

export default GalleryTile;
