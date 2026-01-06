import './portfolio.scss';
import { useState } from 'react';
import { portfolioData } from './PortfolioData';
import PortfolioCard from './PortfolioCard';
import { AnimatePresence, motion } from 'framer-motion';
import SmoothAppearance from '@ui/SmoothAppearance'

 
const tags = [
  'private houses',
  'commercial real estate',
  'interiors',
  'urban development',
];

const categories = [ 'interiors',
  'architecture',
  'landscape',
  'all' ];
  


export default function Portfolio() {
  const [ activeTag, setActiveTag ] = useState(tags[0]);
  const [ activeCategory, setActiveCategory ] = useState('interiors');

  const filteredData = portfolioData.filter(item => {
    const tagMatch = item.tag === activeTag;
    const categoryMatch =
      activeCategory === 'all' || item.category === activeCategory;

    return tagMatch && categoryMatch;
  });

  // useEffect(() => {
  //   alert('ff')
  //   requestAnimationFrame(() => {
  //     ScrollTrigger.refresh(true)
  //   })
  // }, [])


  return (
    <section
      id="portfolio">
      <div
        className="container">

        <ul
          className="tags row s-between center-y wrap gap-40">
          {tags.map(tag => (
            <li
              key={tag}
              className={activeTag === tag ? 'active' : ''}
              onClick={() => setActiveTag(tag)}>
              <h5
                className="text-black capitalize">{tag}</h5>
            </li>
          ))}

          <li
            className="line"></li>
        </ul>

        <ul
          className="categories row s-between wrap gap-30">
          {categories.map(cat => (
            <li
              key={cat}
              className={`row center-y ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}>
              <div
                className="dot"></div>

              <h3
                className="text-gray capitalize">{cat}</h3>
            </li>
          ))}
        </ul>

        <AnimatePresence
          mode='wait'>
          <SmoothAppearance
            blur={true}
            Tag={motion.ul}
            key={activeTag + activeCategory}
            className="column gap-50">
            {filteredData.map(item => (
              <PortfolioCard
                key={item.id}
                item={item} />
            ))}
        
          </SmoothAppearance></AnimatePresence>

      </div>
    </section>
  );
}
