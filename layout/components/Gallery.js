import Image from './Image';
import './Gallery.scss';

// TODO:  update image object structure

const GalleryImageRow = ({ galleryImages }) => {
  const rowClassName = galleryImages.reduce((result, galleryImage) => result ? result + '-' + galleryImage.aspect : galleryImage.aspect, "");
  let counter = 0;
  return(
    <div className={`gallery__row ${rowClassName}`}>
      { galleryImages &&
        galleryImages.map(({ url, alt }) =>
          <GalleryImage
            url={url}
            alt={alt}
            style={`image-${counter}`}
            key={`gallery-image=${++counter}`}
          />
        )
      }
    </div>
  )
}

const GalleryImage = ({ url, alt, style, key }) => {
  return (
    <Image
      url={url}
      alt={alt}
      className={style}
      key={key}
    />
  )
}

// takes in a row
const Gallery = ({ galleryRows }) => {
  return (
    <div className="gallery__container">
      { galleryRows &&
        galleryRows.map(( images ) =>
          <GalleryImageRow
            galleryImages={images}
          />)
      }
    </div>
  )
}

export default Gallery;