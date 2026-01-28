import PortfolioInside from "@components/sections/PortfolioInside/PortfolioInside";
import PortfolioGallery from "@components/sections/PortfolioGallery/PortfolioGallery";
import StageOfWorks from "@components/sections/StageOfWorks/StageOfWorks";

import imgMain from '@assets/img-28.jpg'
import imgOverview from '@assets/img-35.jpg'

import img1 from '@assets/img-29.jpg'
import img2 from '@assets/img-30.jpg'
import img3 from '@assets/img-31.jpg'
import img4 from '@assets/img-28.jpg'


export default function PortfolioInsideSections() {

  const project = {
    id: 'investment-interior-01',
    slug: 'investment-interior',

    title: 'Investment Interior Design Project',

    intro:
    'A comprehensive residential interior design project developed for long-term investment purposes. The concept focuses on spatial efficiency, visual clarity, and sustainable market value, ensuring strong appeal for future tenants or buyers.',

    mainImage: imgMain,

    details: {
      type: 'Interior Design',
      date: '12.03.2022',
      price: '$200,000',
      location: 'Yerevan, Armenia',
    },

    description: {
      goal: 'Investment-focused residential interior design',

      paragraphs: [
        'The primary objective of this project was to create an interior environment that balances architectural elegance with strong commercial potential. The design needed to remain visually relevant over time while appealing to a wide and diverse audience in the real estate market.',

        'Special attention was given to spatial organization and natural light. The layout was optimized to enhance openness and comfort, while neutral color schemes were carefully combined with subtle accent elements to maintain flexibility for future stylistic adaptations.',

        'From the early concept stage, engineering and technical solutions were developed in parallel with the visual design. Lighting scenarios, ventilation systems, and smart home infrastructure were seamlessly integrated to support daily functionality without disrupting the architectural composition.',

        'Material selection prioritized durability, longevity, and ease of maintenance. Each finish was chosen not only for its aesthetic qualities but also for its ability to perform reliably under long-term use, supporting the overall investment strategy of the project.',
      ],

      image: imgOverview,

      problems: [
        'Creating an interior that feels neutral yet distinctive, capable of attracting different tenant profiles while maintaining a strong and recognizable design identity.',

        'Optimizing usable space and storage solutions without sacrificing visual openness, comfort, or the natural flow of movement throughout the apartment.',

        'Balancing construction and finishing costs with long-term financial efficiency, ensuring that every design decision contributes to the property’s overall market value.',

        'Integrating modern engineering systems — including lighting control, climate regulation, and smart technologies — in a discreet manner that preserves visual clarity.',

        'Selecting materials and surfaces that offer high durability and resistance to wear, ensuring consistent performance under long-term эксплуатация and frequent occupancy.',
      ],
    },

    gallery: [
      img1,
      img2,
      img3,
      img4,
      img1,
      img3,
      img4,
    ],
  }

 
  return (
    <>
      <PortfolioInside
        project={project} />

      <PortfolioGallery
        images={project.gallery} />
      
      <StageOfWorks />
    </>
  )
}
