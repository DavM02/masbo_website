import { AnimatePresence, motion } from 'framer-motion';
import SmoothAppearance from '@ui/SmoothAppearance';
import Categories from '@components/shared/Categories/Categories';
import BlogCard from './BlogCard';
import './blog.scss';
import Loading from "@components/shared/Loading/Loading";
import { useFetch } from '@hooks/useFetch';
import loadDataByCategory from '@db/loadData';
import Error from '@components/shared/ui/Error/Error';
import { useSearchParams } from 'react-router-dom';
 
const categories = [
  'interiors',
  'architecture',
  'landscape',
  'all',
];

export default function Blog() {
  const [ searchParams, setSearchParams ] = useSearchParams();

  const activeCategory = searchParams.get('category') || 'interiors';

  
  const { data, isLoading, isFetching, error } = useFetch(
    `blog_${activeCategory}`,
    () => loadDataByCategory('blog', activeCategory)
  ); 
  

  const filteredData = data && data.filter(item => {
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
          onChange={category => setSearchParams(prev => {
            prev.set('category', category);
            return prev;
          })} />
 

        <AnimatePresence
          mode="wait">
          {
            (isLoading || isFetching) ? <SmoothAppearance
              updateLayout={true}
              key={'loading'}
              style={{minHeight: 'inherit'}}>
              <Loading /> 
            </SmoothAppearance> : (error || filteredData.length === 0) ?
              <SmoothAppearance
                updateLayout={true}
                key={'error'}
                style={{minHeight: 'inherit'}}>
                <Error
                  text={"no data found"} /> 
              </SmoothAppearance> :
              <SmoothAppearance
                updateLayout={true}
                Tag={motion.ul}
                key={activeCategory}
                className="column gap-50">
                {filteredData.map(item => (
                  <BlogCard
                    key={item.id}
                    item={item} />
                ))}
              </SmoothAppearance>
          }

        </AnimatePresence>

      </div>
    </section>
  );
}
 