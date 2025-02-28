import './footer.scss'
import Instagram from "@assets/icons/instagram.svg?react";
import Facebook from "@assets/icons/facebook.svg?react";
import Twitter from "@assets/icons/twitter.svg?react";

import Telegram from "@assets/icons/telegram.svg?react";

import Youtube from "@assets/icons/youtube.svg?react";
import { Link } from 'react-router-dom';
import logo from "@assets/icons/MASBO_Logo 2.svg";
import MobileSocials from '@components/shared/MobileSocials/MobileSocials';

export default function Footer() {
  return (<footer>
    <div
      className="container">
      <div
        className="row gap-75 s-between">
        <div>
          <Link
            className='logo'>
            <img
              className='icon'
              src={logo}
              alt='logo' />
          </Link>

          <h5
            className='static capitalize'>
            About the company
          </h5>

          <p
            className='to-middle text-white capitalize'>
            MasBo is an architectural group working in the field of architecture and urban planning. The company was founded in 2006. We offer a full range of services from interior design, individual cottages to the design and construction of residential complexes.
          </p>
                  
          <div
            className='row gap-25 wrap'>
            <p
              className='to-middle text-white capitalize'>
              <span
                className='font-bold'> Address: </span> Ukraine, Kyiv region, 08200 Irpen,

              <br /> Stelmakh street 9a, office 206
            </p>

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
          </div>
        </div>

        <div
          className='line'></div>

        <div
          className="row wrap s-between gap-50">
          <div>
            <h5>
              Popular
            </h5>
        
           

            <ul>
              <li> <Link>  Arhitexture</Link> </li> 

              <li>   <Link>Modern design</Link> </li> 

              <li>   <Link>Our Services</Link> </li> 

              <li>   <Link>How we work</Link> </li> 

              <li>   <Link>Order the project</Link> </li> 
            </ul>
          </div>

          <div>
            <h5>Hot links</h5>

            <ul>
              <li>   <Link>       Our team</Link> </li> 

              <li>   <Link>Our Services</Link> </li> 

              <li>   <Link>   How to order </Link> </li> 

              <li>   <Link>Last project</Link> </li> 
            </ul>
          </div>

          <div
            className='footer-socials'>
            <h5>Social</h5>
            


            <ul >
              <li
                className='row center-y gap-15'>
                <a
                  href='#'>
                  <Facebook />
                </a>

                <h4>  Facebook</h4>
                
              </li>

              <li
                className='row center-y gap-15'>
                <a
                  href='#'>
                                  
                  <Instagram />
                </a>

                <h4>   Instagram</h4>
          
              
                
              </li>

              <li
                className='row center-y gap-15'>
                <a
                  href='#'> <Twitter /></a>

                <h4>  Twiter</h4>
                
              </li>

              <li
                className='row center-y gap-15'>
                <a
                  href='#'><Youtube /></a>

                <h4>   Youtube</h4>
                
              </li>

              <li
                className='row center-y gap-15'>
                <a
                  href='#'> <Telegram /></a>

                <h4>    Telegram</h4>
                
              </li>
            </ul>
          </div>
        </div>
              
 

  
      </div>
    </div>
      
    <div
      className='container'>
      <MobileSocials />
    </div>

    <div
      className='label center-gr'>
      <span
        className='fs-12 text-white text-center'>
        © {new Date().getFullYear()} .All Rioghts Reserved.
      </span>
    </div>
  </footer>)
}