import Image from "next/image";
import Link from "next/link";
import styles from "./_page.module.scss";
//import portfolio from ""
//import cv from "../public/static/docs/CV.pdf"

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.iam}>
        <h2>
          Hola soy <br />
          <b className={styles.name}>Cristian Huijse Heise</b>
        </h2>
      </div>
      <div className={styles.title}>
        <h1>Diseñador, Desarrollador y Docente</h1>
      </div>
      <div className={styles.imageItem}>
        <Image
          src="/static/images/perfil-website.jpg"
          fill
          alt="Foto de perfil cristian Huijse heise"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={styles.abstract}>
        <p>
          ¡Bienvenido/a a mi portafolio! Aquí encontrarás una amplia variedad de
          disciplinas. Mi enfoque principal se centra en el diseño gráfico e
          industrial, así como también en el desarrollo de software,
          especialmente Frontend. Te invito a visitar mis proyectos.
        </p>
        <div className={styles.button}>
          <a
            className={styles.buttonText}
            href="/static/docs/portafolio.pdf"
            download
          >
            Descargar Portafolio
          </a>
          <div className={styles.flecha}>
            <Image
              fill
              src="/static/images/arrow-small.svg"
              alt="flecha de botton"
            />
          </div>
        </div>
        <div className={styles.button}>
          <a className={styles.buttonText} href="/static/docs/CV.pdf" download>
            CV
          </a>
          <div className={styles.flecha}>
            <Image
              fill
              src="/static/images/arrow-small.svg"
              alt="flecha de botton"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
