import ScrollParallaxImage from '@components/shared/ScrollParallaxImage/ScrollParallaxImage'
export default function PortfolioHero({ image }) {

  

  return (
    <ScrollParallaxImage
      src={image}
      wrapperClass="main-img placeholder-1" />
  )
}
