import './form.scss'
import MainButton from '@ui/buttons/MainButton';
import AutoTextarea from '@ui/AutoTextarea/AutoTextarea';

export default function Form() {
  return (
    <div
      className="form-wrapper row s-between wrap gap-15">
      <h3
        className="text-gray">
        Do you have any questions?
        Fill the form below and our manager will contact you
      </h3>
      
      <div>
        <p
          className="static text-gray capitalize">
          Required fields are marked *
        </p>
      
        <form>
          <div
            className="row gap-45">
            <input
              type="text"
              placeholder="Your Name*" />

            <input
              type="email"
              placeholder="email*" />
          </div>

          <input
            type="tel"
            placeholder="phone number*" />

          <AutoTextarea
            placeholder="message*" />

          <MainButton
            arrow={false}
            type="submit">
            send
          </MainButton>
        </form>
      </div>
    </div>

  )
}
