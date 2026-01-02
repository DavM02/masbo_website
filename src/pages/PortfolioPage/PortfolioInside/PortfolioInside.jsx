
import { Link } from 'react-router-dom'
import './portfolioInside.scss'
import img1 from '@assets/img-28.jpg'
import img2 from '@assets/img-35.jpg'
import Check from '@assets/icons/check.svg?react'

import { LazyLoadImage } from 'react-lazy-load-image-component'
export default function PortfolioInside() {
  return (
    <section
      id="portfolio-inside">
      <div
        className="container">
        <div
          className="section-header row s-between">
          <div
            className="row wrap gap-20">
            <Link
              to={'/'}>
              <span
                className="fs-14 text-black up-case">
                back home
              </span>
            </Link>

            <Link
              to={'/portfolio'}>
              <span
                className="fs-14 text-black up-case">
                portfolio
              </span>
            </Link>

            <span
              className="fs-14 text-black up-case">portfolio inside</span>

          </div>

          <span
            className="fs-14 text-black up-case">01</span>
        </div>
              
        <div
          className="main-img placeholder-1">
          <LazyLoadImage
            src={img1}
            width={"100%"}
            height={"100%"}
            effect="opacity" />
        </div>

        <div
          className="project-overview">
          <h3
            className="text-gray capitalize">
            name of project
          </h3>

          <p
            className="font-bold to-middle text-gray capitalize">
            We offer innovative engineering solutions that ensure the successful achievement of the client's goals. Because engineering is a result-oriented strategy in action. An individual approach and attention to detail in the development.</p>
        </div>
              
        <div
          className="project-details">
          <div
            className={"row wrap"}>
            <span
              className="fs-14 text-gray capitalize">
              <span
                className="font-bold text-black">
                Type:&nbsp;&nbsp;&nbsp;


              </span>
               
              
              Interior Design
            </span>

            <span
              className="fs-14 text-gray capitalize">
              <span
                className="font-bold text-black">
                Date:&nbsp;&nbsp;&nbsp;
              </span>
              12.03.2022
            </span>

            <span
              className="fs-14 text-gray capitalize">
              <span
                className="font-bold text-black">
                Price:&nbsp;&nbsp;&nbsp;
              </span>
              200.00.00 $
            </span>
          </div>
                  
          
        </div>
              
        <div
          className="project-description">


          <div
            className={"column gap-25"}>
            <h5
              className="text-black capitalize">
              Goal: Investment projects</h5>    

            <p
              className={"to-middle text-gray capitalize"}>
              We offer innovative engineering solutions that ensure the successful achievement of the client's goals. Because engineering is a result-oriented strategy in action. We offer innovative engineering solutions that ensure the successful achievement of the client's goals. Because engineering is a result-oriented strategy in action. We offer innovative engineering solutions that ensure the successful achievement of the client's goals. Because engineering is a result-oriented strategy in action. 
              the successful achievement of the client's goals. Because engineering is a result-oriented strategy in action. We offer innovative engineering solutions that ensure the successful achievement of the client's goals. Because engineering is a result-oriented strategy in action. 
            </p>

            <p
              className={"to-middle text-gray capitalize"}>
              We offer innovative engineering solutions that ensure the successful achievement of the client's goals. Because engineering is a result-oriented strategy in action. We offer innovative engineering solutions that ensure the successful achievement of the client's goals.
            </p>
          </div>
                  
          <div
            className={"row wrap gap-80"}>
            <div
              className={"placeholder-1"}>
              <LazyLoadImage
                src={img2}
                width={"100%"}
                height={"100%"}
                effect="opacity" />
            </div>

            <div className={"problem-solving"}>
              <h5
                className="text-black capitalize">
                Problem solving: 
              </h5>

              <ul className={"column gap-35"}>
                <li
                  className={"row gap-10"}>
                  <Check />  

                  <p
                    className={"to-middle text-black capitalize"}>
                    Many strands of place-making, environmental stewardship, social equity and economic viability into the creation </p>                
                </li>

                <li
                  className={"row gap-10"}>
                  <Check />  

                  <p
                    className={"to-middle text-black capitalize"}>
                    Many strands of place-making, environmental stewardship, social equity and economic viability into the creation </p>                
                </li>

                <li
                  className={"row gap-10"}>
                  <Check />  

                  <p
                    className={"to-middle text-black capitalize"}>
                    Many strands of place-making, environmental stewardship, social equity and economic viability into the creation </p>                
                </li>

                <li
                  className={"row gap-10"}>
                  <Check />  

                  <p
                    className={"to-middle text-black capitalize"}>
                    Many strands of place-making, environmental stewardship, social equity and economic viability into the creation </p>                
                </li>

                <li
                  className={"row gap-10"}>
                  <Check />  

                  <p
                    className={"to-middle text-black capitalize"}>
                    Many strands of place-making, environmental stewardship, social equity and economic viability into the creation </p>                
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
