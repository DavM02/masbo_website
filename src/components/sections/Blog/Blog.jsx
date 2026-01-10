import { useState } from 'preact/hooks';
import { AnimatePresence, motion } from 'framer-motion';
import SmoothAppearance from '@ui/SmoothAppearance';
import Categories from '@components/shared/Categories/Categories';
import BlogCard from './BlogCard';
import './blog.scss';
import { blogData } from './blogData';


const categories = [
  'interiors',
  'architecture',
  'landscape',
  'all',
];

export default function Blog() {
  const [ activeCategory, setActiveCategory ] = useState('interiors');

 

  const filteredData = blogData.filter(item => {
    return activeCategory === 'all' || item.category === activeCategory;
  });

  return (
    <section
      id="blog">
      <div
        className="container">
        <Categories
          items={categories}
          active={activeCategory}
          onChange={setActiveCategory} />

        <AnimatePresence
          mode="wait">
          <SmoothAppearance
            blur
            Tag={motion.ul}
            key={activeCategory}
            className="column gap-50">
            {filteredData.map(item => (
              <BlogCard
                key={item.id}
                item={item} />
            ))}
          </SmoothAppearance>
        </AnimatePresence>
      </div>
    </section>
  );
}
