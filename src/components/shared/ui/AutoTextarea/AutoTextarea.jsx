import { useRef } from "preact/hooks";

export default function AutoTextarea({ placeholder }) {
  const ref = useRef(null);

  const handleInput = (e) => {
    const el = e.target;
    el.style.height = "auto";
    el.style.height = el.scrollHeight + "px";
  };

  return (
    <textarea
      name="message"
      ref={ref}
      rows={1}
      placeholder={placeholder}
      onInput={handleInput} />
  );
}
