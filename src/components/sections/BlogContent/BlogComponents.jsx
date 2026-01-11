import { LazyLoadImage } from 'react-lazy-load-image-component'
import ScrollParallaxImage from '@components/shared/ScrollParallaxImage/ScrollParallaxImage'

import Twitter from "@assets/icons/twitter.svg?react"
import Youtube from "@assets/icons/youtube.svg?react"
import Telegram from "@assets/icons/telegram.svg?react"

 
export const BlogParagraph = ({ text }) => (
  <p
    className="to-middle text-gray capitalize">{text}</p>
)

 
export const BlogHeading = ({ text }) => (
  <h5
    className="text-black capitalize">{text}</h5>
)

 
export const BlogParallaxImage = ({ src, wrapperClass, height }) => (
  <ScrollParallaxImage
    src={src}
    wrapperClass={wrapperClass}
    height={height} />
)

 
export const BlogQuote = ({ text }) => (
  <div
    className='quote row gap-25'>
    <div
      className='font-bold'>”</div>

    <p
      className='text-gray capitalize'>{text}</p>
  </div>
)

 
export const BlogTextImageBlock = ({ paragraphs, image }) => (
  <div
    className='row wrap gap-30'>
    <div
      className='column gap-25'>
      {paragraphs.map((p, i) => (
        <BlogParagraph
          key={i}
          text={p} />
      ))}
    </div>

    <div
      className='blog-main-image placeholder-3'>
      <LazyLoadImage
        width="100%"
        height="100%"
        effect="opacity"
        src={image} />
    </div>
  </div>
)

 
export const BlogSocials = () => (
  <ul
    className='blog-socials row end-x gap-15'>
    <li
      className='center-gr'><Twitter /></li>

    <li
      className='center-gr'><Youtube /></li>

    <li
      className='center-gr'><Telegram /></li>
  </ul>
)
