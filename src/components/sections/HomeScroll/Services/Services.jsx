

import img2 from '@assets/img-2.jpg';
import img13 from '@assets/img-13.jpg';
import img14 from '@assets/img-14.jpg';
import img15 from '@assets/img-15.jpg';
import img16 from '@assets/img-16.jpg';
import img17 from '@assets/img-17.jpg';
import icon1 from '@assets/icons/icon-1.svg';
import icon2 from '@assets/icons/icon-2.svg';
import icon3 from '@assets/icons/icon-3.svg';
import icon4 from '@assets/icons/icon-4.svg';
import icon5 from '@assets/icons/icon-5.svg';
import icon6 from '@assets/icons/icon-6.svg';
import ServiceItem from './ServiceItem';
import ServiceTextBlock from './ServiceTextBlock';
import './services.scss'
const servicesData = [
  { img: img13, icon: icon4, title: 'Interior', className: 'placeholder-2' },
  { img: img14, icon: icon1, title: 'Architecture', className: 'placeholder-1' },
  { img: img15, icon: icon2, title: 'Engineering', className: 'placeholder-2' },
  { img: img16, icon: icon3, title: 'Construction', className: 'placeholder-1' },
  { img: img17, icon: icon5, title: 'Landscape Design', className: 'placeholder-2' },
  { img: img2, icon: icon6, title: 'Investment projects', className: 'placeholder-1' }
];


export default function Services() {
  return (
    <section
      className='services'>
      <div
        className='row'>
        {servicesData.slice(0, 4).map((service, index) => (
          <ServiceItem
            key={index}
            {...service} />
        ))}
      </div>

      <div
        className='row'>
        <ServiceItem
          {...servicesData[4]} />

        <ServiceTextBlock />

        <ServiceItem
          {...servicesData[5]} />
      </div>
    </section>
  );
}
