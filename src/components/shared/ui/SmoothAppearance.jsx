
import { motion } from 'framer-motion'
import { getScrollBar } from '@components/Scroll/ScrollAccess';
export default function SmoothAppearance({ blur, Tag = motion.div, updateLayout,  ...props }) {
  return (
    <Tag

      onAnimationComplete={() => {
         
 
        if (updateLayout) {
          const scrollBar = getScrollBar();
          scrollBar?.update();
        }
    
      }}

      onAnimationStart={(e) => {
       
        if (updateLayout && e.opacity == 1) {
          const scrollBar = getScrollBar();
          scrollBar?.update();
        }
    
      }}

      transition={{
        duration: 0.5,
        ease: [ 0.645,
          0.045,
          0.355,
          1 ],  
      }}
      initial={{ opacity: 0, filter: blur ? 'blur(4px)' : 'none' }}
      animate={{ opacity: 1, filter: blur ? 'blur(0px)' : 'none' }}
      exit={{ opacity: 0, filter: blur ? 'blur(2px)' : 'none' }}
      {...props}>
      {props.children}
    </Tag>
  );
}
