import { useRef } from 'preact/hooks';
import { gsap } from 'gsap';
import { createPortal } from 'preact/compat';
import CloseMenu from './CloseMenu';
import './MenuOverlay.scss';
import Logo from '../Logo';
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import Scheme1 from "@assets/icons/scheme-1.svg?react"
import Scheme2 from "@assets/icons/scheme-2.svg?react"
import Scheme3 from "@assets/icons/scheme-3.svg?react"
import Scheme4 from "@assets/icons/scheme-4.svg?react"
import { getScrollBar } from '../../../Scroll/ScrollAccess';
import Instagram from "@assets/icons/instagram.svg?react";
import Facebook from "@assets/icons/facebook.svg?react";
import Twitter from "@assets/icons/twitter.svg?react";
import useMediaQ from '@hooks/useMediaQ';
import Telegram from "@assets/icons/telegram.svg?react";

import Youtube from "@assets/icons/youtube.svg?react";


const menuLinks = [
  [ '/about', 'About Us' ],
  [ '/portfolio', 'Portfolio' ],
  [ '/team', 'Team' ],
  [ '/services', 'Services' ],
  [ '/news', 'News' ],
  [ '/contact', 'Contact' ],
];

const extraLinks = [
  [ '/technologies', 'Technologies' ],
  [ '/approach', 'Our approach' ],
  [ '/projects', 'Last projects' ],
  [ '/team', 'Become a part of team' ],
  [ '/investment', 'For investors' ],
];

const openStart = 'M0 4069V-8C2516.76 -7.99976 1409.21 -8.00024 3990 -5.49619V4069C3990 4069 3091.05 3187.25 2004 3187.25C916.96 3187.25 0 4069 0 4069Z'
const openEnd = 'M0 2015.3V-2054C1307.5 -3053.78 2532 -3088.78 3988 -2051.5V2015.3C3988 2015.3 3089.5 1135.22 2003 1135.22C916.5 1135.22 0 2015.3 0 2015.3Z'
const closeStart = 'M0 0.0825195V-3665.86C1499.5 -3667 2271 -3665.86 3989 -3667V0.0825195C3989 0.0825195 2773.81 0.0825195 1979 0.0825195C1129 0.0825195 0 0.0825195 0 0.0825195Z'
const closeEnd = 'M0 8026.8V3957.5C1307.5 2957.72 2532 2922.72 3988 3960V8026.8C3988 8026.8 3089.5 7146.72 2003 7146.72C916.5 7146.72 0 8026.8 0 8026.8Z'

function MenuOverlay({ openTl, closeTl }) {

  const isMobile = useMediaQ('(max-width: 600px)')


  const pathRef = useRef(null);

  const createTimelines = () => {

   
    
    openTl.current = gsap.timeline({ paused: true })
      .to(pathRef.current, {
        duration: 0.8, ease: 'power3.in',
        attr: { d: openStart, fill: "#1D1D20" },
        onStart: () => {
          gsap.set('body', { className: "overlay-opened" });
          getScrollBar()?.updatePluginOptions('overflow', { open: true })
        },

      })
      .to(pathRef.current, {
        duration: 0.4, ease: 'power3.out',
        attr: { d: openStart }
      })
      .from([ '.menu-overlay .logo',
        '.close-menu',
        '.menu-overlay p',
        '.mobile-footer h5' ], { opacity: 0, y: -20, duration: 0.5, stagger: 0.2 }, "-=0.5")
      .from('.menu-overlay ul li', {
        opacity: 0, x: -30, duration: 0.4, stagger: 0.05,
        onComplete: () => { gsap.set('.close-menu', { pointerEvents: "all" }); }

      }, "-=1.2");

    closeTl.current = gsap.timeline({ paused: true })
      .to('.menu-overlay ul li', {
        opacity: 0, x: 30, duration: 0.3, stagger: 0.05, onStart: () => {
          gsap.set('.close-menu', { pointerEvents: "none" })
        }},  "-=0,7" )
      .to([ '.menu-overlay  .logo',
        '.close-menu',
        '.menu-overlay p',
        '.mobile-footer h5' ], { opacity: 0, y: -20, duration: 0.3, stagger: 0.1 }, "-=0.4")
      .to(pathRef.current, {
        duration: 0.5, ease: 'power3.in',
        attr: { d: openEnd, fill: "#E9E9E9" }
      }, '-=0.4')
      .to(pathRef.current, {
        duration: 0.3, ease: 'power3.out',
        attr: { d: closeStart,   },
        onComplete: () => {
          gsap.set(pathRef.current, {
            attr: { d: closeEnd, }
          });
          gsap.set('.close-menu', { clearProps: "pointerEvents" })
          getScrollBar()?.updatePluginOptions('overflow', { open: false })
          document.body.removeAttribute('class')

        }
      });
  };
 
  useGSAP(() => {

    
    createTimelines();

    return () => {
      openTl.current?.kill();
      closeTl.current?.kill();
      gsap.set(pathRef.current, {
        attr: { d: closeEnd, }
      });
      gsap.set('.close-menu', { clearProps: "pointerEvents" })
      getScrollBar()?.updatePluginOptions('overflow', { open: false })
      document.body.removeAttribute('class')
    };
  }, {dependencies: [ isMobile ], revertOnUpdate: true});



 

  return createPortal(
    <div
      className='menu-overlay row center-y'>
      <svg
        className="transition"
        viewBox="0 0 3988 3185"
        preserveAspectRatio="none">
        <path
          className="path"
          fill="#E9E9E9"
          d="M0 8026.8V3957.5C1307.5 2957.72 2532 2922.72 3988 3960V8026.8C3988 8026.8 3089.5 7146.72 2003 7146.72C916.5 7146.72 0 8026.8 0 8026.8Z"
          vectorEffect="non-scaling-stroke"
          ref={pathRef} />
          
      </svg>

      <Logo />
                  
 
      <div
        className='row s-between gap-50'>

        <div
          className='column s-between'>
          
          <ul
   
            className='column gap-20'>
            {menuLinks.map(([ path, label ]) => (
              <li
                key={path}><Link
                  to={path}>{label}</Link></li>
            ))}
          </ul>

          {!isMobile && <p
           
            className='to-middle text-white capitalize'>
            <span
              className='font-bold'> Address: </span> Ukraine, Kyiv region, 08200 Irpen,

            <br /> Stelmakh street 9a, office 206
          </p>}


        </div>

        <div
          
          className='column s-between'>
          {!isMobile && 
            <ul
   
              className='column gap-20'>
              {extraLinks.map(([ path, label ]) => (
                <li
                  key={path}><Link
                    to={path}>{label}</Link></li>
              ))}
            </ul>
          }

          {
            !isMobile &&
            <p
            
              className='to-middle text-white capitalize'>
              <span
                className='font-bold'>
                Tel:
              </span> +3 (096) 029-81-18, +3 (063) 023-81-18

              <br />

              <span
                className='font-bold'>
                Email:
              </span> office@masbo.com.ua 
            </p>
          }
        </div>


        <div
          className='column s-between'>
          <ul
            className='schemes'>
            <li
              className='column s-between'>
              <Scheme1 />

              <h5
                className='static capitalize'>
                private houses
              </h5>
            </li>

            <li
              className='column s-between'>
              <Scheme2 />

              <h5
                className='static capitalize'>
                interiors
              </h5>
            </li>

            <li
              className='column s-between'>
              <Scheme3 />

              <h5
                className='static capitalize'>
                commercial <br /> real estate


              </h5>
            </li>

            <li
              className='column s-between'>
              <Scheme4 />

              <h5
                className='static capitalize'>
                urban <br /> development



              </h5>
            </li>
          </ul>

          {!isMobile && <p
           
            className='to-middle text-white capitalize'>
            We offer a full range of services from interior design, individual cottages to the design 
            and construction of residential complexes. For our customers, we are known as a 
            reliable partner with high standards of quality and responsibility.
          </p>}


        </div>

        {isMobile &&
          <div
      
            className='mobile-footer'>
            <h5
           
              className='static capitalize'>
              hot links:
            </h5>

            <ul
              className='hot-links row wrap gap-10'>
              {extraLinks.map(([ path, label ]) => (
                <li
                  className='center-gr'
                  key={path}><Link
                    to={path}>{label}</Link></li>
              ))}
            </ul>

            <div
              className='row s-between gap-20'>
              <p
            
                className='to-small text-white capitalize'>
                <span
                  className='font-bold'>
                  Tel:
                </span> +3 (096) 029-81-18, +3 (063) 023-81-18

                <br />

                <span
                  className='font-bold'>
                  Email:
                </span> office@masbo.com.ua 
              </p>

              <p
              
                className='to-small text-white capitalize'>
                <span
                  className='font-bold'> Address: </span> Ukraine, Kyiv region, 08200 Irpen,

                <br /> Stelmakh street 9a, office 206
              </p>
            </div>

            <ul
              className='mobile-socials gap-15 s-between'>
              <li>
                <a
                  href='#'
                  className='center-gr'>
                  <Facebook />       
                </a>
              </li>
        
              <li>
                <a
                  href='#'
                  className='center-gr'>
                  <Instagram />           
                </a>
              </li>
        
              <li>
                <a
                  href='#'
                  className='center-gr'>
                  <Twitter />      
                </a>
              </li>
        
              <li>
                <a
                  href='#'
                  className='center-gr'>
                  <Youtube />
                </a>
              </li>
        
              <li>
                <a
                  href='#'
                  className='center-gr'>
                  <Telegram />
                </a>
              </li>
            </ul>
          </div>
        }

      </div>

      <CloseMenu
        onClick={() => closeTl.current.restart()} />
    </div>,
    document.querySelector("#transition-root")
  );
}

export default MenuOverlay;
