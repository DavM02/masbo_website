import { Link } from 'react-router-dom';
import logo from '@assets/icons/MASBO_Logo 2.svg';
import useMediaQ from '@hooks/useMediaQ';
import './header.scss';
import { useContext } from 'preact/hooks';
import { gsap } from 'gsap';

import { useGSAP } from '@gsap/react';
import { MainContext } from "@context/MainContext";
 
export default function Header() {


  const {scrollbarAccess} = useContext(MainContext)
  const query = useMediaQ("(min-width: 920px)");
  const width = useMediaQ("(min-width: 1025px)")
  const height = useMediaQ("(min-height: 657px)")
 
 

  useGSAP(() => {


    const createAnimation = () => {
 
      scrollbarAccess.current.addListener((scroll) => {
        if (scroll.offset.y > 3) {
          gsap.set("header", { className: "scrolled" });  
        } else {
        
          gsap.set("header", { className: "static" });  
        } 
      })

      if (width && height) {
        gsap.to("#home-scroll", {
          scrollTrigger: {
            trigger: "#home-scroll",
            start: "top top",        
            end: "bottom bottom",   
            onEnter: () => {
              gsap.set("header", { backgroundColor: "transparent" });  
           
            },
            onEnterBack: () => {
              gsap.set("header", {clearProps: "backgroundColor"});  
            },
 
          }
        });
      }
 

    };

    requestAnimationFrame(() => {
      createAnimation()
    })


  
  }, {dependencies: [ width, height ], revertOnUpdate: true})

 
  return (
    <header>
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
