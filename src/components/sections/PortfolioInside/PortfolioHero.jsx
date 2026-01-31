import ScrollParallaxImage from '@components/shared/ScrollParallaxImage/ScrollParallaxImage'
export default function PortfolioHero({ image }) {

  

  return (
    <ScrollParallaxImage
      src={`${import.meta.env.BASE_URL}${image}`}
      wrapperClass="main-img placeholder-1" />
  )
}
