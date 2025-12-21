
import Text from "./Text";
import Images from "./Images";
import './philosophy.scss';

export default function Philosophy() {
  return (
    <section
      id="philosophy">
      <div
        className="container">
        <div
          className="row s-between gap-60">
          <Text />

          <Images />
        </div>
      </div>
    </section>
  );
}
