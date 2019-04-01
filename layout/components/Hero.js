import './Hero.scss';

const Hero = ({ text, image, height }) => {
  const imageStyle = {
    backgroundImage: `url('${image}')`
  }
  return (
    <div className={`parallax__group hero ${height === 'large' ? 'hero__large' : height == 'medium' ? 'hero__medium' : 'hero__small'}`}>
      <div className="hero__image parallax__layer parallax__layer-back" style={imageStyle}></div>
      <div className="hero__content parallax__layer parallax__layer-base">
        <h1>{ text }</h1>
      </div>
    </div>
  )
}

export default Hero;