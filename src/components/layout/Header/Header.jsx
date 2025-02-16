import { Link } from 'react-router-dom';
import logo from '@assets/icons/MASBO_Logo 2.svg';
import { useState } from 'preact/hooks';
import useMediaQ from '../../../hooks/useMediaQ';
import './header.scss';
 
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
 
export default function Header() {
 
  const query = useMediaQ("(min-width: 920px)");
  const query2 = useMediaQ("(min-width: 1025px)")
  const [ hideFill, setHideFill ] = useState(false)

  useGSAP(() => {
    const createAnimation = () => {
 
      gsap.to("#home-scroll", {
        scrollTrigger: {
          trigger: "#home-scroll",
          start: "top top",        
          end: "bottom bottom",   
          onEnter: () => setHideFill(true),
          onEnterBack: () =>  setHideFill(false),
        }
      });
 
    };

    requestAnimationFrame(() => {
      createAnimation()
    })


  
  }, {dependencies: [ query2 ], revertOnUpdate: true})

 
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
