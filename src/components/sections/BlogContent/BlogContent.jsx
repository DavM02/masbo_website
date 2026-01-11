import './blogContent.scss'
import {
  BlogParagraph,
  BlogHeading,
  BlogParallaxImage,
  BlogQuote,
  BlogTextImageBlock,
  BlogSocials
} from './BlogComponents';  

export default function BlogContent({ data }) {
  const { intro, image, sections } = data

  return (
    <section
      id="blog-content">
      <div
        className="container">

        <BlogParagraph
          text={intro} />

        <BlogParallaxImage
          src={image}
          wrapperClass="blog-image placeholder-3"
          height="140%" />

        <div
          className="column gap-25">

          <BlogHeading
            text={sections.heading} />

          <BlogParagraph
            text={sections.paragraphs[0]} />

          <BlogParagraph
            text={sections.paragraphs[1]} />

          <BlogQuote
            text={sections.quote} />

          <BlogParagraph
            text={sections.paragraphs[2]} />

          <BlogParagraph
            text={sections.paragraphs[3]} />

          <BlogTextImageBlock
            paragraphs={sections.textImageBlock.paragraphs}
            image={sections.textImageBlock.image} />

          <BlogParagraph
            text={sections.paragraphs[4]} />

          <BlogParagraph
            text={sections.paragraphs[5]} />

        </div>

        <BlogSocials />
      </div>
    </section>
  )
}
