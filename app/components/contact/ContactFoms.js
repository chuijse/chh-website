"use client";
import { useRef, useState, useEffect } from "react";

export default function ContactForm() {
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
    <form className="contact-form" autoComplete="off">
      <div className="input_half">
        <input
          type="text"
          id="form_name"
          name="form_name"
          required
          placeholder="Escriba aquí*"
        />
        <label htmlFor="form_name">Nombre:</label>
      </div>
      <div className="input">
        <input
          type="email"
          id="form_mail"
          name="form_mail"
          required
          placeholder="Escriba aquí"
        />
        <label htmlFor="form_mail">Mail:</label>
      </div>
      <div className="input_textarea">
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
      <button type="submit" className="input_button" value="enviar">
        Enviar
      </button>
    </form>
  );
}
