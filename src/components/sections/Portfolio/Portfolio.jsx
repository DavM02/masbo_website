import './portfolio.scss';
import { useState } from 'preact/hooks';
import { portfolioData } from './PortfolioData';
import PortfolioCard from './PortfolioCard';
import { AnimatePresence, motion } from 'framer-motion';
import SmoothAppearance from '@ui/SmoothAppearance';
import Categories from '@components/shared/Categories/Categories';

const tags = [
  'private houses',
  'commercial real estate',
  'interiors',
  'urban development',
];

const categories = [
  'interiors',
  'architecture',
  'landscape',
  'all',
];

export default function Portfolio() {
  const [ activeTag, setActiveTag ] = useState(tags[0]);
  const [ activeCategory, setActiveCategory ] = useState('interiors');

  const filteredData = portfolioData.filter(item => {
    const tagMatch = item.tag === activeTag;
    const categoryMatch =
      activeCategory === 'all' || item.category === activeCategory;

    return tagMatch && categoryMatch;
  });

  return (
    <section
      id="portfolio">
      <div
        className="container">

        {/* TAGS — пока оставляем тут */}
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


        <Categories
          items={categories}
          active={activeCategory}
          onChange={setActiveCategory} />

        <AnimatePresence
          mode="wait">
          <SmoothAppearance
            blur
            Tag={motion.ul}
            key={activeTag + activeCategory}
            className="column gap-50">
            {filteredData.map(item => (
              <PortfolioCard
                key={item.id}
                item={item} />
            ))}
          </SmoothAppearance>
        </AnimatePresence>

      </div>
    </section>
  );
}
