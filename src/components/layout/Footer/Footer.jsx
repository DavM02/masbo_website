import './footer.scss'
import { SocialList } from './SocialList';
import { Link } from 'react-router-dom';
import logo from "@assets/icons/MASBO_Logo 2.svg";
import MobileSocials from '@components/shared/MobileSocials/MobileSocials';
import { LinksList } from './LinksList';
import { popularLinks, hotLinks } from './LinksConfig';


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
        
           
            <LinksList
              items={popularLinks} />

          </div>

          <div>
            <h5>Hot links</h5>

            <LinksList
              items={hotLinks} />
          </div>

          <div
            className='footer-socials'>
            <h5>Social</h5>
            

            <SocialList />
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
        © {new Date().getFullYear()} .All Rights Reserved.
      </span>
    </div>
  </footer>)
}