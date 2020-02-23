import Image from './Image';
import './Gallery.scss';

// TODO:  update image object structure

const GalleryImage = ({ width, url, alt, key }) => {
  const imageClassName = width == 'full' ? 'gallery__image-full' : 'gallery__image-half';
  return (
    <Image
      className={imageClassName}
      url={url}
      alt={alt}
      key={key}
    />
  )
}

const Gallery = ({ galleryImages }) => {
  let counter = 0;
  return (
    <div className="gallery__container">
      { galleryImages &&
        galleryImages.map(({ width, url, alt }) =>
          <GalleryImage
            width={width}
            url={url}
            alt={alt}
            key={`gallery-image=${++counter}`}
          />)
      }
    </div>
  )
}

export default Gallery;