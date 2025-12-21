import { useState } from 'preact/hooks';
import './servicesCases.scss';
import MainButton from '@ui/buttons/MainButton';
import DraggableSlider from '@components/shared/DraggableSlider/DraggableSlider';
import SmoothAppearance from '@ui/SmoothAppearance';
import { AnimatePresence } from 'framer-motion';
import { categories, imagesByCategory } from './servicesCasesData';

export default function ServicesCases() {
  const [ activeCategory, setActiveCategory ] = useState('All Projects');

  const handleCategoryClick = (label) => {
    setActiveCategory(label);
  };

  return (
    <section
      id='services-cases'>
      <div
        className="row gap-70">
        
        <div
          className='column center-x'>
          <span
            className="fs-14 text-black up-case">Last Projects</span>

          <h3
            className='text-gray'>Selected case <br /> studies</h3>

          <ul
            className='column gap-20'>
            {categories.map(({ label, count }) => (
              <li
                onClick={() => handleCategoryClick(label)}
                key={label}>
                <span
                  className={`fs-14 font-bold cursor-pointer ${activeCategory === label ? 'active' : 'inactive'}`}
                  data-count={count}>
                  {label}
                </span>
              </li>
            ))}
          </ul>

          <MainButton
            arrow={true}
            type='button'>
            See all projects
          </MainButton>
        </div>

        <div
          className='services-cases__slider'>
          <AnimatePresence
            mode='wait'>
            <SmoothAppearance
              key={activeCategory}
              blur={true}>
              <DraggableSlider
                options={{ dragFree: true }}
                images={imagesByCategory[activeCategory].map(src => ({ src }))} />
            </SmoothAppearance>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
