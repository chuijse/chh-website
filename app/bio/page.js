import Image from "next/image";
import LinkButton from "../components/LinkButton";
import Contact from "../components/contact";
import "./_bio.scss";

export default function Bio() {
  return (
    <main className="bio-page-root">
      <section className="header">
        <div className="bio-image">
          <Image
            src="/static/images/perfil-website.jpg"
            priority
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
            alt="Foto de perfil cristian Huijse heise"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="subtitle-image">
          <h2>{"Diseño & Informática"}</h2>
        </div>
        <div className="bio-abstract">
          <h1>Biografía</h1>
          <p>
            Desde muy joven, he estado vinculado a la tecnología gracias al
            entusiasmo que mi madre me heredó. Mientras estudiaba diseño, me
            aventuré en el mundo de la programación de manera autodidacta, lo
            que despertó en mí una gran pasión por la interacción digital como
            herramienta para expandir nuestra realidad. Actualmente, el
            desarrollo de software es un componente esencial en mis proyectos
            profesionales y docentes.{" "}
          </p>
          <div className="items-buttons">
            <LinkButton path="static/docs/CV.pdf" text="CV" download />
            <LinkButton
              path="static/docs/portafolio.pdf"
              text="Portafolio"
              download
            />
          </div>
        </div>
      </section>
      <Contact />
    </main>
  );
}
