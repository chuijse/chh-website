import Image from "next/image";
import "./_link-button.scss";

export default function LinkButton({ path, text, download = false }) {
  return (
    <button className="link-button-root">
      <a className href={path} download={download}>
        {text}
        <div className="link-button-arrow">
          <Image
            fill
            src="../static/images/arrow-small.svg"
            alt="flecha de botton"
          />
        </div>
      </a>
    </button>
  );
}
