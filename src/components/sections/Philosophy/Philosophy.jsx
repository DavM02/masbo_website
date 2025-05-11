import TextLineAnimation from "@components/TextLineAnimation/TextLineAnimation";
import './philosophy.scss'
import tick from '@assets/tick.svg'
import img1 from "@assets/img-25.jpg"
import img2 from "@assets/img-26.jpg"
import img3 from "@assets/img-27.jpg"
export default function Philosophy() {
  return (
    <section
      id='philosophy'>
      <div
        className='container'>
        <div
          className="row s-between wrap gap-60">
          <div>
            <TextLineAnimation
              lines={[
                "Arhitecture modern technology", "MasBo is an architectural "
              ]} />

            <p
              className="static text-gray capitalize">We offer innovative engineering solutions that ensure the successful achievement of the client's goals. Because engineering is a result-oriented strategy in action.</p>

            <ul
              className="column gap-25">
              <li
                className="row gap-10 start-y">
                <img
                  src={tick}
                  alt="tick" />

                <p
                  className="static text-black capitalize">
                  Many strands of place-making, environmental stewardship, social equity and economic viability into the creation 
                </p>

 
              </li>

              <li
                className="row gap-10 start-y">
                <img
                  src={tick}
                  alt="tick" />

                <p
                  className="static text-black capitalize">
                  Many strands of place-making, environmental stewardship, social equity and economic viability into the creation 
                </p>

 
              </li>

              <li
                className="row gap-10 start-y">
                <img
                  src={tick}
                  alt="tick" />

                <p
                  className="static text-black capitalize">
                  Many strands of place-making, environmental stewardship, social equity and economic viability into the creation 
                </p>

 
              </li>
            </ul>

          </div>

          <div
            className="images">
            <div
              className="image">
              <img
                alt="img-1"
                src={img1} />
            </div>

            <div
              className="image">
              <img
                alt="img-2"
                src={img2} />
            </div>

            <div
              className="image">
              <img
                alt="img-3"
                src={img3} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
