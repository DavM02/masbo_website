import './portfolio.scss';
import Loading from "@components/shared/Loading/Loading";
import PortfolioCard from './PortfolioCard';
import { AnimatePresence, motion } from 'framer-motion';
import SmoothAppearance from '@ui/SmoothAppearance';
import Categories from '@components/shared/Categories/Categories';
import { useFetch } from '@hooks/useFetch';
import loadDataByCategory from '@db/loadData';
import Error from '@components/shared/ui/Error/Error';
import { useSearchParams } from 'react-router-dom';

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

  const [ searchParams, setSearchParams ] = useSearchParams();

  const activeTag = searchParams.get('tag') || tags[0];
  const activeCategory = searchParams.get('category') || 'interiors';

 
  const { data, isLoading, isFetching, error } = useFetch(
    `portfolio_${activeCategory}`,
    () => loadDataByCategory('portfolio', activeCategory)
  ); 
  
  const filteredData = (data ?? []).filter(item => {
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

        <ul
          className="tags row s-between center-y wrap gap-40">
          {tags.map(tag => (
            <li
              key={tag}
              className={activeTag === tag ? 'active' : ''}
              onClick={() => {
                setSearchParams(prev => {
                  prev.set('tag', tag);
                  return prev;
                });
              }}>
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
          onChange={category =>  setSearchParams(prev => {
            prev.set('category', category);
            return prev;
          })} />

        {/* <AnimatePresence
          mode="wait">
          {
            (isLoading || isFetching) ? <SmoothAppearance
              key={'loading'}
              style={{minHeight: 'inherit'}}
              updateLayout={true}>
              <Loading /> 
            </SmoothAppearance> : (error || filteredData.length === 0) ?
              <SmoothAppearance
                key={'error'}
                style={{minHeight: 'inherit'}}
                updateLayout={true}>  
                <Error
                  text={"no data found"} /> 
              </SmoothAppearance> :
              <SmoothAppearance
                updateLayout={true}
                Tag={motion.ul}
                key={activeTag + activeCategory}
                className="column gap-50">
                {filteredData.map(item => (
                  <PortfolioCard
                    key={item.id}
                    item={item} />
                ))}
              </SmoothAppearance>
          }

        </AnimatePresence> */}

      </div>
    </section>
  );
}
