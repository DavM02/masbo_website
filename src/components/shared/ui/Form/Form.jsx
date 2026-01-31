import './form.scss'
import MainButton from '@ui/buttons/MainButton';
import AutoTextarea from '@ui/AutoTextarea/AutoTextarea';

export default function Form() {
  return (
    <div
      className="form-wrapper row s-between wrap gap-15">
      <h3
        className="text-gray">
        Fill out the form below, and our manager will get in touch with you shortly.
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
              name='name'
              type="text"
              placeholder="Your Name*" />

            <input
              name='email'
              type="email"
              placeholder="email*" />
          </div>

          <input
            name='tel'
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
