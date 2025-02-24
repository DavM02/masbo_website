const InfoBlock = ({ icon, title, text }) => (
  <div
    className="column center-y center-x gap-10">
    <img
      className="icon"
      alt="icon"
      src={icon} />

    <h6>{title}</h6>

    <p
      className="to-middle text-center text-white capitalize"
      dangerouslySetInnerHTML={{__html: text}}></p>
  </div>
);

export default InfoBlock