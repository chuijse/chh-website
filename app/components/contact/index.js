"use client";

import styles from "./_contact.module.scss";
import { useRef, useState, useEffect } from "react";

export default function Contact() {
  const textRef = useRef();
  const [value, setValue] = useState();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    if (textRef && textRef.current) {
      textRef.current.style.height = "0px";
      const taHeight = textRef.current.scrollHeight;
      textRef.current.style.height = taHeight + "px";
    }
  }, [value]);

  return (
    <section className={styles.root}>
      <div className={styles.header}>
        <h3 className={styles.title}>Contacto</h3>
        <p className={styles.description}>
          Te invito a escribirme a través de este formulario
        </p>

        <form className={styles.form} autocomplete="off">
          <div className={styles.input_half}>
            <input
              type="text"
              id="form_name"
              name="form_name"
              required=""
              placeholder="Escriba aquí*"
            />
            <label for="form_name">Nombre:</label>
          </div>
          <div className={styles.input_half}>
            <input
              type="text"
              id="form_subject"
              name="form_subject"
              required=""
              placeholder="Escriba aquí"
            />
            <label>Asunto:</label>
          </div>
          <div className={styles.input}>
            <input
              type="email"
              id="form_mail"
              name="form_mail"
              required
              placeholder="Escriba aquí"
            />
            <label>Mail:</label>
          </div>
          <div className={styles.input_textarea}>
            <textarea
              type="text"
              id="form_message"
              name="form_message"
              required
              placeholder="Escriba aquí"
              onChange={handleChange}
              ref={textRef}
            />
            <label htmlFor="message">Mensaje:</label>
          </div>
          <input type="submit" className={styles.input_button} />
        </form>
      </div>
    </section>
  );
}
