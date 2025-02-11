import { Link } from 'react-router-dom';
import logo from '@assets/icons/MASBO_Logo 2.svg';
import { useEffect, useState } from 'preact/hooks';
import useMediaQ from '../../../hooks/useMediaQ';
import './header.scss';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from 'gsap';
 
export default function Header() {
 
  const query = useMediaQ("(min-width: 920px)");
  const query2 = useMediaQ("(min-width: 1025px)")
  const [ hideFill, setHideFill ] = useState(false)

  useEffect(() => {

    const ctx = gsap.context(() => {});  
 

    const createAnimation = () => {
      ctx.revert();  

    
      ctx.add(() => {
        gsap.to("#home-scroll", {
          scrollTrigger: {
            trigger: "#home-scroll",
            start: "top top",        
            end: "bottom bottom",   
            onEnter: () => setHideFill(true),
            onEnterBack: () =>  setHideFill(false),
          }
        });
      });

      ScrollTrigger.refresh();
 
    };

    createAnimation()

    return () => {
      ctx.revert();  
    }


  
  }, [ query2 ])

 
  return (
    <header
      className={hideFill ? 'hide-fill' : 'static'}>
      <div
        className='container'>
        <div
          className='row s-between'>
          <div
            className='row center-y'>
            <Link
              className='logo'
              to={'/'}>
              <img
                className='icon'
                src={logo}
                alt='logo' />
            </Link>

            {query && (
              <nav>
                <ul
                  className='row'>
                  <li><Link
                    className='text-white fs-14 capitalize'>About us</Link></li>

                  <li><Link
                    className='text-white fs-14 capitalize'>Portfolio</Link></li>

                  <li><Link
                    className='text-white fs-14 capitalize'>Team</Link></li>

                  <li><Link
                    className='text-white fs-14 capitalize'>Services</Link></li>

                  <li><Link
                    className='text-white fs-14 capitalize'>News</Link></li>

                  <li><Link
                    className='text-white fs-14 capitalize'>Contacts</Link></li>
                </ul>
              </nav>
            )}
          </div>

          <div
            className='row center-y'>
            <div
              className='order-project'>
              <span
                className='fs-14 text-white capitalize'>Order the project</span>
            </div>

            <div
              className='menu-bars column gap-5 end-y'>
              <div></div>

              <div></div>

              <div></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
