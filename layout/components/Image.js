import './Image.scss';

// TODO:  upgrade url to variants / srcset list

const splitAspect = (ratio) => ratio.split("x");

// aspects:  portrait (2:3), landscape (3:2), square (1:1)
const Image = ({ className, url, alt, aspect=null, ratio=null, respectAspect=false }) => {

  const aspectClass = aspect ? 'image__' + aspect : '';

  // ratio controls
  const splitParams = ratio && splitAspect(ratio);
  const viewBoxParams = respectAspect ? splitParams[0] + " " + splitParams[1] : '0 0';

  return (
    <div className={`image__ratio ${aspectClass} ${className}`}>
      <svg viewBox={`0 0 ${viewBoxParams}`}></svg>
      <div>
        <img
          src={url} alt={alt} />
      </div>
    </div>
  )
}



export default Image;