/**
 * Gallery image tile — native lazy loading (no IO swap) to keep masonry layout stable.
 */
const GalleryTile = ({ photo, className = '', lazy = true, style }) => (
  <figure className={`gallery-tile ${className}`.trim()} style={style}>
    <img
      src={photo.src}
      alt={photo.alt}
      loading={lazy ? 'lazy' : 'eager'}
      decoding="async"
      fetchPriority={lazy ? 'low' : 'high'}
    />
    <div className="gallery-tile__overlay">
      <span>{photo.label}</span>
    </div>
  </figure>
);

export default GalleryTile;
