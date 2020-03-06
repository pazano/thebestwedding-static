// import './VimeoPlayer.scss';

// TODO:  upgrade url to variants / srcset list

const Image = ({ className, url, alt }) => {
  return (
    <picture className={className}>
      <img
        src={url} alt={alt} />
    </picture>
  )
}



export default Image;